import React, { MouseEventHandler } from "react";
import { DeleteButton } from "./DeleteButton";

type ContentsProps = {
  contents: string[];
  onClickDeleteButton: any;
};

export const Contents: React.FC<ContentsProps> = ({ contents, onClickDeleteButton }) => {
  return (
    <div>
      <ul>
        {contents.map((content, index) => (
          <li key={index}>
            {content}
            <button onClick={() => onClickDeleteButton(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};