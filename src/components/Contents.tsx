import { ContentsProps } from "../type/contents";
import { InputMemo } from "./InputMemo";

export const Contents: React.FC<ContentsProps> = ({
  contents,
  onClickDeleteButton,
  onClickEditButton,
  onClickCompleteButton,
  onEditText,
  editText,
}) => {
  return (
    <div>
      <ul>
        {contents.map((content, index) => (
          <li key={index}>
            {content.isEdit ? (
              <InputMemo onChangeText={onEditText}>{editText}</InputMemo>
            ) : (
              <>{content.value}</>
            )}
            <button onClick={() => onClickDeleteButton(index)}>削除</button>
            {content.isEdit ? (
              <button onClick={() => onClickCompleteButton(index)}>完了</button>
            ) : (
              <button onClick={() => onClickEditButton(index)}>編集</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};