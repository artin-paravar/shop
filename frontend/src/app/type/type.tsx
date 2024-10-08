export type Products =
  | {
      _id?: string | number;
      title?: string;
      price?: number;
      description?: string;
      category?: string;
      image?: any;
    }
  | any;

export type IMG = {
  id: number;
  image: string;
  text?: string;
  link?: any;
};

export type footer = {
  id: number;
  text: string;
};
export type OPEN = {
  open: boolean;
};
export type ITEM = {
  item?: any;
  selectCategory?: any;
  selectBrand?: any;
  setSelectCategory?: React.Dispatch<any>;
  setSelectBrand?: React.Dispatch<any>;
};
