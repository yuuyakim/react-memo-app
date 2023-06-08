import React from "react";

type ContentsProps = {
  contents: string[];
}

export const Contents: React.FC<ContentsProps> = ({ contents }) => {
  return (
    <div>
      <ul>
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
};