export interface IItem {
  id: number | null;
  text: string | null;
}

export interface ListItemProps {
  item: IItem;
  isEditing: boolean;
  editItemDetail: IItem;
  checkedItems: Array<IItem> | [];
  deleteItem: (id: number) => void;
  editItem: (id: number, text: string) => void;
  saveEditItem: (id: number) => void;
  handleEditChange: (text: string) => void;
  itemChecked: (id: number, text: string) => void;
}
