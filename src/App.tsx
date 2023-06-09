import React, { ChangeEvent, useEffect, useState } from "react";
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
    setContents([...contents, { value: text, isEdit: false }]);
    setText('')
    saveContents();
  };

  const onClickDeleteButton = (id: number): void => {
    setContents(contents.filter((content, index) => index !== id));
    saveContents();
  };

  const onClickEditButton = (id: number): void => {
    setContents(
      contents.map((content, index) =>
        index === id
          ? { value: content.value, isEdit: true }
          : content
      )
    );

    setEditText(contents[id].value)
  };

  const onClickCompleteButton = (id: number): void => {
    setContents(
      contents.map((content, index) =>
        index === id ? {value: editText, isEdit: false } : content
      )
    );
    saveContents()
  };

  const loadContents = () => {
    const getValue: string | null = window.localStorage.getItem("memoList")
    if (typeof getValue === 'string'){
      const getData = JSON.parse(getValue)
      console.log(getData)

      const loadContents: ContentProps[] = []

      for (let key in getData) {
        loadContents.push({
          value: getData[key],
          isEdit: false,
        });
      }

      setContents([...contents, ...loadContents]);
    }
  }

  const saveContents = () => {
    const localStorageObject: {} = {}
    contents.forEach((content, index) => {
      Object.assign(localStorageObject, { [index]: content.value });}
    )
    const key = 'memoList'
    const values = JSON.stringify(localStorageObject)
    window.localStorage.setItem(key, values)
  }

  useEffect(() => loadContents(), [])

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
