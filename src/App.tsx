import React, { ChangeEvent, useState } from "react";
import { Header } from "./components/Header";
import { InputMemo } from "./components/InputMemo";
import { AddButton } from "./components/AddButton";
import { Contents } from "./components/Contents";

function App() {
  // textboxの内容を保持しておくためのState
  const [text, setText] = useState<string>("");
  // メモ一覧のState
  const [contents, setContents] = useState<Array<string>>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const onClickAddButton = (): void => {
    setContents([...contents, text]);
  };

  return (
    <div>
      <Header>簡単メモアプリ</Header>
      <InputMemo onChangeText={onChangeText}></InputMemo>
      <AddButton onClickAddButton={onClickAddButton}></AddButton>
      <Contents contents={contents}></Contents>
    </div>
  );
}

export default App;
