import React from 'react';

export const metadata = { title: 'xcp20.wtf' };

const RootLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
