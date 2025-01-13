import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonGroup = ({ children }: Props) => {
  return <div style={{ display: "flex", gap: "5px" }}>{children}</div>;
};

export default ButtonGroup;
