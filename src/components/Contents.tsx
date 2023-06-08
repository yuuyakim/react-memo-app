import React from "react";

export const Contents: React.FC<{contents: Array<string>}> = ({ contents }) => {

    return (
      <div>
        <ul>
          {contents.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </div>
    );
}