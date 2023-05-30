import './tailwind.css';

const RootLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">{children}</body>
    </html>
  );
};

export const metadata = { title: 'xcp20.wtf' };
export default RootLayout;
