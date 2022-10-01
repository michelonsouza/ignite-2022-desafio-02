import { TagsEnum } from '@/enums';

export interface Coffee {
  id: string;
  tags: TagsEnum[];
  image: string;
  price: number;
  title: string;
  info: string;
}
