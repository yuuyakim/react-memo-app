import React, { ChangeEvent, useState } from "react";
import { Header } from "./components/Header";
import { InputMemo } from "./components/InputMemo";
import { AddButton } from "./components/AddButton";
import { Contents } from "./components/Contents";

const App = () => {
  // textboxの内容を保持しておくためのState
  const [text, setText] = useState<string>("");
  const [editText, setEditText] = useState<string>("");
  // メモ一覧のState
  const [contents, setContents] = useState<Array<string>>([]);
  // メモ編集中かどうかのフラグ
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const onChangeText = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
    console.log(text)
  };

  const onEditText = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditText(e.target.value);
    console.log(editText);
  };

  const onClickAddButton = (): void => {
    setContents([...contents, text]);
    setText('')
  };

  const onClickDeleteButton = (id: number): void => {
    setContents(
      contents.filter((content, index) => (index !== id))
    );
  };

  const onClickEditButton = (id: number): void => {
    setIsEdit(true)
  }

  const onClickCompleteButton = (id: number): void => {
    setContents(contents.filter((content, index) => index === id ? '' : 'a'));
  }

  return (
    <div>
      <Header>簡単メモアプリ</Header>
      <InputMemo onChangeText={onChangeText}>{text}</InputMemo>
      <AddButton onClickAddButton={onClickAddButton}></AddButton>
      <Contents
        contents={contents}
        onClickDeleteButton={onClickDeleteButton}
        onClickEditButton={onClickEditButton}
      ></Contents>
      {isEdit ? (
        <>
          <InputMemo onChangeText={onEditText}>{editText}</InputMemo>
          <button onClick={() => onClickCompleteButton(1)}>完了</button>
        </>
      ) : null}
    </div>
  );
}

export default App;
