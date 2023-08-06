"use client";

import { RecoilRoot } from "recoil";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Provider;
