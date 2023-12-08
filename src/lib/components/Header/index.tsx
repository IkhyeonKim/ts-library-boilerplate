import { ReactElement } from "react";

type HeaderProps = {
  children: ReactElement;
};

export default function Header(headerProps: HeaderProps) {
  const { children } = headerProps;
  return <div className="w-full">{children}</div>;
}
