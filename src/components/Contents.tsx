type ContentsProps = {
  contents: string[];
  onClickDeleteButton: any;
  onClickEditButton: any;
};

export const Contents: React.FC<ContentsProps> = ({
  contents,
  onClickDeleteButton,
  onClickEditButton,
}) => {
  return (
    <div>
      <ul>
        {contents.map((content, index) => (
          <li key={index}>
            {content}
            <button onClick={() => onClickDeleteButton(index)}>削除</button>
            <button onClick={() => onClickEditButton(index)}>編集</button>
          </li>
        ))}
      </ul>
    </div>
  );
};