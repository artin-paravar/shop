export type Products =
  | {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: any;
      rating: Rating;
    }
  | any;

interface Rating {
  rate: number;
  count: number;
}
