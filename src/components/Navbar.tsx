import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import useShortcut from '@/hooks/useShortcut';
import Logo from '@/components/Logo';
import {
  DarkIcon,
  GitHubIcon,
  LightIcon,
  TwitterIcon,
} from '@/components/Icons';

import type { ReactElement } from 'react';

interface NavLogoProps {
  href: string;
  title: string;
}

const NavLogo = ({ href, title }: NavLogoProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`md:link flex h-9 items-center gap-2 rounded-xl px-2 ${
        isActive && 'md:link--active'
      }`}
      aria-label={title}
    >
      <Logo active={isActive} />
    </Link>
  );
};

interface NavItemProps {
  href: string;
  title: string;
}

const NavItem = ({ href, title }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`link flex h-9 items-center justify-center gap-1.5 rounded-xl px-2 text-gray-900 dark:text-slate-200 ${
        isActive && 'link--active'
      }`}
    >
      {title}
    </Link>
  );
};

interface NavItemIconProps {
  href: string;
  icon: ReactElement;
  title: string;
  label?: string;
}

const NavItemIcon = ({ href, icon, title, label }: NavItemIconProps) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center rounded-xl"
      aria-label={title}
      target="_blank"
      rel="noreferrer"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-800 dark:text-slate-200">
        {icon}
      </span>
      {label && <span className="label mt-0.5 mr-2 md:block">{label}</span>}
    </a>
  );
};

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-gray-800 hover:bg-slate-200 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50"
      aria-label="Toggle Theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && resolvedTheme === 'dark' ? (
        <LightIcon className="h-5 w-5" />
      ) : (
        <DarkIcon className="h-5 w-5" />
      )}
    </button>
  );
};

const Navbar = () => {
  useShortcut('/', () => router.push('/'));
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b border-divider-light bg-white py-4 px-2 text-sm dark:border-divider-dark dark:bg-slate-900 md:px-4">
      <div>
        <ul className="flex items-center font-semibold md:gap-1">
          <li>
            <NavLogo href="/" title="Home" />
          </li>
          <li>
            <NavItem href="/projects" title="Projects" />
          </li>
          <li>
            <NavItem href="/blog" title="Blog" />
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-2">
          <li className="hidden sm:block">
            <NavItemIcon
              href="https://github.com/enjidev"
              icon={<GitHubIcon className="h-5 w-5" />}
              title="GitHub"
            />
          </li>
          <li>
            <NavItemIcon
              href="https://twitter.com/enjidev"
              icon={<TwitterIcon className="h-5 w-5" />}
              title="Twitter"
              label="Follow"
            />
          </li>
          <li>
            <div className="h-3 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
          </li>
          <li className="mx-2">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
