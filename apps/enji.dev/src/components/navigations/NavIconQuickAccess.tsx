import clsx from 'clsx';

import { QuickAccessIcon } from '@/components/Icons';

import useGlobal from '@/hooks/useGlobal';

function NavIconQuickAccess() {
  const { setQuickAccessOpen } = useGlobal();

  return (
    <button
      type="button"
      className={clsx(
        'ml-1 flex h-9 w-9 items-center justify-center gap-2 rounded-xl bg-slate-300/50 text-slate-800',
        'xl:w-auto xl:px-3',
        'hover:bg-slate-300/70 sm:ml-0',
        'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
      )}
      aria-label="Open Quick Access"
      title="Open Quick Access"
      onClick={() => {
        setQuickAccessOpen(true);
      }}
    >
      <QuickAccessIcon className={clsx('h-5 w-5')} />
      <div
        className={clsx(
          'hidden items-center gap-2 text-xs font-bold',
          'xl:flex',
          'dark:font-normal'
        )}
      >
        Quick Access
        <kbd
          className={clsx(
            'rounded-[4px] border border-b-[3px] border-slate-400 bg-slate-300 px-1 py-0.5',
            'dark:border-slate-900 dark:bg-slate-700'
          )}
        >
          Q
        </kbd>
      </div>
    </button>
  );
}

export default NavIconQuickAccess;
