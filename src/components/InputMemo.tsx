import { ChangeEventHandler } from "react";

export const InputMemo: React.FC<{
  onChangeText: ChangeEventHandler<HTMLInputElement>;
}> = ({ onChangeText }) => {
  return <input onChange={onChangeText}></input>;
};