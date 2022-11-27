import clsx from 'clsx';
import PageHeader from '@/components/shared/PageHeader';
import TableOfContents from '@/components/shared/TableOfContents';
import type { TTableOfContentsItem } from '@/types';

interface PageMeta {
  title: string;
  description: string;
  tableOfContents: Array<TTableOfContentsItem>;
}

interface ContentsLayoutProps {
  meta: PageMeta;
  children: React.ReactNode;
}

const ContentsLayout = ({
  meta: { title, description, tableOfContents },
  children,
}: ContentsLayoutProps) => {
  return (
    <div className={clsx('')}>
      <PageHeader title={title} desc={description} />
      <div className={clsx('content-wrapper')}>
        <div className={clsx('flex')}>
          <div className={clsx('flex-1 py-8')}>{children}</div>
          <div className={clsx('-mt-20')}>
            <TableOfContents items={tableOfContents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsLayout;
