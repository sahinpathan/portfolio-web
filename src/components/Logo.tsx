import clsx from 'clsx';

interface LogoProps {
  active?: boolean;
}

const Logo = ({ active = false }: LogoProps) => {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div
        className={clsx(
          'flex h-6 w-6 items-center justify-center rounded-lg border-2',
          [
            active
              ? 'border-primary-600 bg-primary-600 dark:border-primary-500 dark:bg-primary-500'
              : 'border-primary-600 dark:border-primary-500',
          ]
        )}
      >
        <div
          className={clsx('h-3 w-0.5 rotate-12 rounded-full', [
            active ? 'bg-white' : 'bg-primary-600 dark:bg-primary-500',
          ])}
        />
      </div>
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className={clsx('text-gray-900', 'dark:text-slate-200')}>
          enji
        </span>
        <span className={clsx('text-primary-600', 'dark:text-primary-500')}>
          dev
        </span>
      </div>
    </div>
  );
};

export default Logo;
