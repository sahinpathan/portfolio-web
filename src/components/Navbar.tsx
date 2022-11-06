import Link from 'next/link';
import { GitHubIcon, LightIcon, TwitterIcon } from '@/components/Icons';
import type { ReactElement } from 'react';

interface NavItemProps {
  href: string;
  title: string;
  active?: boolean;
}

const NavItem = ({ href, title, active = false }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`link flex h-9 items-center rounded-lg px-2 text-gray-900 ${
        active && 'active'
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
}

const NavItemIcon = ({ href, icon, title }: NavItemIconProps) => {
  return (
    <Link
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-900"
      aria-label={title}
    >
      {icon}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-slate-100 py-4 px-2 text-sm md:px-4">
      <div>
        <ul className="flex items-center font-semibold md:gap-2">
          <li className="hidden md:block">
            <Link
              href="/"
              className="link block h-9 rounded-lg px-2 text-2xl font-extrabold text-gray-900"
            >
              <span className="text-gray-900">enji</span>
              <span className="text-primary-400">dev</span>
            </Link>
          </li>
          <li className="md:hidden">
            <NavItem href="/" title="home" />
          </li>
          <li>
            <NavItem href="/" title="blog" />
          </li>
          <li>
            <NavItem href="/" title="projects" />
          </li>
          <li>
            <NavItem href="/" title="about" />
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-2">
          <li>
            <NavItemIcon
              href="/"
              icon={<TwitterIcon className="h-5 w-5" />}
              title="Twitter"
            />
          </li>
          <li className="hidden sm:block">
            <NavItemIcon
              href="/"
              icon={<GitHubIcon className="h-5 w-5" />}
              title="GitHub"
            />
          </li>
          <li>
            <div className="h-3 w-[1px] bg-slate-200"></div>
          </li>
          <li>
            <NavItemIcon
              href="/"
              icon={<LightIcon className="h-5 w-5" />}
              title="Toggle Dark Mode"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
