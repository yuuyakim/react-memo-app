import React, { ChangeEvent, useState } from "react";
import { Header } from "./components/Header";
import { InputMemo } from "./components/InputMemo";
import { AddButton } from "./components/AddButton";
import { Contents } from "./components/Contents";
import { ContentProps } from "./type/contents";

const App = () => {
  // textboxの内容を保持しておくためのState
  const [text, setText] = useState<string>("");
  const [editText, setEditText] = useState<string>("");
  // メモ一覧のState
  const [contents, setContents] = useState<Array<ContentProps>>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const onEditText = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditText(e.target.value);
  };

  const onClickAddButton = (): void => {
    setContents([...contents, { id: contents.length, value: text, isEdit: false }]);
    setText('')
  };

  const onClickDeleteButton = (id: number): void => {
    setContents(contents.filter((content, index) => content.id !== id));
  };

  const onClickEditButton = (id: number): void => {
    setContents(
      contents.map(
        (content) =>
          (content.id === id ? { id: content.id, value: content.value, isEdit: true } : content)
      )
    );

    setEditText(contents[id].value)
  };

  const onClickCompleteButton = (id: number): void => {
    setContents(
      contents.map((content) =>
        content.id === id
          ? { id: content.id, value: editText, isEdit: false }
          : content
      )
    );
  };

  return (
    <div>
      <Header>簡単メモアプリ</Header>
      <InputMemo onChangeText={onChangeText}>{text}</InputMemo>
      <AddButton onClickAddButton={onClickAddButton}></AddButton>
      <Contents
        contents={contents}
        onClickDeleteButton={onClickDeleteButton}
        onClickEditButton={onClickEditButton}
        onClickCompleteButton={onClickCompleteButton}
        onEditText={onEditText}
        editText={editText}
      ></Contents>
    </div>
  );
}

export default App;
