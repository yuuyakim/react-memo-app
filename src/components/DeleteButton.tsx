import { MouseEventHandler } from "react";

export const DeleteButton: React.FC<{ onClickDeleteButton: MouseEventHandler<HTMLButtonElement> }> = ({ onClickDeleteButton }) => {
  return <button onClick={onClickDeleteButton}>削除</button>;
};
