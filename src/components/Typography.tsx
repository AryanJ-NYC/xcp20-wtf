export const A: React.FC<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = (props) => <a {...props} className="text-blue-400 hover:text-blue-500" />;

export const H1: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = (props) => <h1 {...props} className="dark:text-slate-50 tracking-wide" />;

export const H2: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = (props) => <h2 {...props} className="dark:text-slate-50 tracking-wide" />;

export const BodyText: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = (props) => <p {...props} className="dark:text-slate-300" />;

export const Li: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = (props) => <li {...props} className="dark:text-slate-300" />;
