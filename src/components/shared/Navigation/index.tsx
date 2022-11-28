import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { GitHubIcon, TwitterIcon } from '@/components/shared/Icons';
import NavIcon from '@/components/shared/Navigation/NavIcon';
import NavLogo from '@/components/shared/Navigation/NavLogo';
import NavLink from '@/components/shared/Navigation/NavLink';
import NavIconTheme from '@/components/shared/Navigation/NavIconTheme';
import NavLinkDropdown from '@/components/shared/Navigation/NavLinkDropdown';
import NavLinkExpanded from './NavLinkExpanded';

const workLinks = [
  { title: 'Skills & Tools', href: '/work/skills-and-tools' },
  { title: 'Testimonials', href: '/work/testimonials' },
  { title: 'Studio', href: '/work/studio' },
];

const Navbar = () => {
  let [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    let offset = 10;
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true);
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false);
      }
    }
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [isOpaque]);

  return (
    <nav className={clsx('fixed right-0 left-0 z-[1000]')}>
      <div
        className={clsx(
          'pointer-events-none fixed top-0 left-0 right-0 h-16 border-b border-divider-light bg-white/60 backdrop-blur transition',
          'dark:border-divider-dark dark:bg-slate-900/80',
          [isOpaque ? 'opacity-100' : 'opacity-0']
        )}
      />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <div className={clsx('flex', 'md:gap-2')}>
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li>
                <NavLink title="Projects" href="/projects" />
              </li>
              <li>
                <NavLink title="Blog" href="/blog" />
              </li>
              <li className={clsx('lg:hidden')}>
                <NavLinkDropdown title="Work" items={workLinks} />
              </li>
              <li className={clsx('hidden lg:block')}>
                <NavLinkExpanded title="Work" items={workLinks} />
              </li>
            </ul>
          </div>
          <ul className={clsx('flex items-center gap-2')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/enjidev"
                icon={<GitHubIcon className={clsx('h-5 w-5')} />}
                title="GitHub"
              />
            </li>
            <li>
              <NavIcon
                href="https://twitter.com/enjidev"
                icon={<TwitterIcon className={clsx('h-5 w-5')} />}
                title="Twitter"
                label="enjidev"
              />
            </li>
            <li>
              <div
                className={clsx(
                  'h-3 w-[1px] bg-slate-200',
                  'dark:bg-slate-700'
                )}
              />
            </li>
            <li className={clsx('mr-2')}>
              <NavIconTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
