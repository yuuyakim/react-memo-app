import { ChangeEventHandler } from "react";

export const InputMemo: React.FC<{
  onChangeText: ChangeEventHandler<HTMLInputElement>, children: string
}> = ({ onChangeText, children}) => {
  return <input type="text" value={children} onChange={onChangeText}></input>;
};