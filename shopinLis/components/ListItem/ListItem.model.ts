export interface ListItemProps {
  item: {
    id: number;
    text: string;
  };
  deleteItem: (id: number) => void;
}
