import clsx from 'clsx';
import { m } from 'framer-motion';
import { useTheme } from 'next-themes';

import { DarkIcon, LightIcon } from '@/components/Icons';

import type { PropsWithChildren, ReactElement } from 'react';

const animation = {
  hide: { y: -16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.12,
    },
  },
};

interface ActionCenterButtonProps {
  icon: ReactElement;
  title: string;
  onClick?: () => void;
}

function ActionCenterButton({
  icon,
  title,
  onClick = () => {},
}: PropsWithChildren<ActionCenterButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'border-divider-light flex flex-1 flex-col justify-between rounded-xl border bg-white p-4',
        'dark:border-divider-dark dark:bg-[#1d263a]'
      )}
    >
      <div className={clsx('')}>{icon}</div>
      <div className={clsx('text-[13px] font-medium', 'dark:font-normal')}>
        {title}
      </div>
    </button>
  );
}

function ActionCenter() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <m.div
      className={clsx('flex flex-col gap-4')}
      initial="hide"
      animate="show"
      transition={{ staggerChildren: 0.06 }}
    >
      <m.div className={clsx('text-xl font-bold')} variants={animation}>
        Action Center
      </m.div>
      <div className={clsx('flex flex-1 flex-col gap-8')}>
        <m.div className={clsx('flex h-24 gap-4')} variants={animation}>
          <ActionCenterButton
            title={theme === 'dark' ? 'Use Light Mode' : 'Use Dark Mode'}
            onClick={handleThemeChange}
            icon={
              <>
                <div className={clsx('hidden', 'dark:block')}>
                  <LightIcon className={clsx('h-5 w-5')} />
                </div>
                <div className={clsx('dark:hidden')}>
                  <DarkIcon className={clsx('h-5 w-5')} />
                </div>
              </>
            }
          />
          <ActionCenterButton
            title={theme === 'dark' ? 'Use Light Mode' : 'Use Dark Mode'}
            onClick={handleThemeChange}
            icon={
              <>
                <div className={clsx('hidden', 'dark:block')}>
                  <LightIcon className={clsx('h-5 w-5')} />
                </div>
                <div className={clsx('dark:hidden')}>
                  <DarkIcon className={clsx('h-5 w-5')} />
                </div>
              </>
            }
          />
        </m.div>
      </div>
    </m.div>
  );
}

export default ActionCenter;
