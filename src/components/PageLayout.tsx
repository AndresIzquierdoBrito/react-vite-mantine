import React, { ReactNode } from 'react';
interface PageLayoutProps {
    content: ReactNode;
}

export function PageLayout({content}: PageLayoutProps){
    return (
      <>
      <div className="p-4 sm:ml-64">
        {content}
      </div>
      </>
    )
}
