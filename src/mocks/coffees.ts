import arabic from '@/assets/images/products/arabic.png';
import capuccino from '@/assets/images/products/capuccino.png';
import expressAmerican from '@/assets/images/products/coffee-express-american.png';
import expressCreamy from '@/assets/images/products/coffee-express-creamy.png';
import expressIceCold from '@/assets/images/products/coffee-express-ice.png';
import expressTraditional from '@/assets/images/products/coffee-express-traditional.png';
import coffeeWithMilk from '@/assets/images/products/coffee-with-milk.png';
import cuban from '@/assets/images/products/cuban.png';
import hawaiian from '@/assets/images/products/hawaiian.png';
import hotChocolate from '@/assets/images/products/hot-chocolate.png';
import irish from '@/assets/images/products/irish.png';
import coffeeLatte from '@/assets/images/products/latte.png';
import macchiato from '@/assets/images/products/macchiato.png';
import mocaccino from '@/assets/images/products/mocaccino.png';
import { TagsEnum } from '@/enums';
import { Coffee } from '@/models';

export const coffeesMock: Coffee[] = [
  {
    id: 'express-traditional',
    image: expressTraditional,
    title: 'Expresso Tradicional',
    info: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL],
  },
  {
    id: 'express-american',
    image: expressAmerican,
    title: 'Expresso Americano',
    info: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL],
  },
  {
    id: 'express-creamy',
    image: expressCreamy,
    title: 'Expresso Cremoso',
    info: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL],
  },
  {
    id: 'express-ice',
    image: expressIceCold,
    title: 'Expresso Gelado',
    info: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL, TagsEnum.ICE_COLD],
  },
  {
    id: 'coffee-with-milk',
    image: coffeeWithMilk,
    title: 'Café com Leite',
    info: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL, TagsEnum.WITH_MILK],
  },
  {
    id: 'coffee-latte',
    image: coffeeLatte,
    title: 'Latte',
    info: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL, TagsEnum.WITH_MILK],
  },
  {
    id: 'capuccino',
    image: capuccino,
    title: 'Capuccino',
    info: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL, TagsEnum.WITH_MILK],
  },
  {
    id: 'macchiato',
    image: macchiato,
    title: 'Macchiato',
    info: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL, TagsEnum.WITH_MILK],
  },
  {
    id: 'mocaccino',
    image: mocaccino,
    title: 'Mocaccino',
    info: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: [TagsEnum.TRADITIONAL, TagsEnum.WITH_MILK],
  },
  {
    id: 'hot-chocolate',
    image: hotChocolate,
    title: 'Chocolate Quente',
    info: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: [TagsEnum.SPECIAL, TagsEnum.WITH_MILK],
  },
  {
    id: 'cuban',
    image: cuban,
    title: 'Cubano',
    info: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: [TagsEnum.SPECIAL, TagsEnum.ALCOHOLIC, TagsEnum.ICE_COLD],
  },
  {
    id: 'hawaiian',
    image: hawaiian,
    title: 'Havaiano',
    info: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: [TagsEnum.SPECIAL],
  },
  {
    id: 'arabic',
    image: arabic,
    title: 'Árabe',
    info: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: [TagsEnum.SPECIAL],
  },
  {
    id: 'irish',
    image: irish,
    title: 'Irlandês',
    info: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: [TagsEnum.SPECIAL, TagsEnum.ALCOHOLIC],
  },
];
