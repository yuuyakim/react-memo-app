import React, { ChangeEvent, useState } from 'react';
import { Header } from './components/Header';
import { InputMemo } from './components/InputMemo'
import { AddButton } from './components/AddButton';

function App() {
  // textboxの内容を保持しておくためのState
  const [text, setText] = useState<string>("")
  // メモ一覧のState
  const [contents, setContents] = useState<Array<string>>([])
  

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log(text)
  }

  const onClickAddButton = () => {
    setContents([...contents, text]);
    console.log(contents)
  }

  return (
    <div>
      <Header>簡単メモアプリ</Header>
      <InputMemo onChangeText={onChangeText}></InputMemo>
      <AddButton onClickAddButton={onClickAddButton}></AddButton>
    </div>
  );
}

export default App;
