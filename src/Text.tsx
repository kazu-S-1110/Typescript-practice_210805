import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// export const Text = ({ color, fontSize }: Props) => {
//下の書き方の方が一般的らしい
// ただFCだとchildrenも持ってこれるので良くないとしていてreact18が出るまでは暫定的にVFCを使う。
// VFCならchildrenは渡ってこない
export const Text: VFC<Props> = ({ color, fontSize }) => {
  return <p style={{ color, fontSize }}>テキストですよ〜。</p>;
};
