export type ContentsProps = {
  contents: ContentProps[];
  onClickDeleteButton: any;
  onClickEditButton: any;
  onClickCompleteButton: any;
  onEditText: any;
  editText: string;
};

export type ContentProps = {
  value: string;
  isEdit: boolean;
};