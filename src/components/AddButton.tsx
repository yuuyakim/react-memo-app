import React, { MouseEventHandler } from "react";

export const AddButton: React.FC<{onClickAddButton: MouseEventHandler<HTMLButtonElement>}> = ({ onClickAddButton }) => {
  return <button onClick={onClickAddButton}>追加</button>;
};