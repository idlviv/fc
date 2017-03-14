export class Slides {
  constructor (public title: string,
               public itemNumber: number,
               public collection: string,
               public design: string,
               public description: string,
               public regularPrice: number,
               public sale: boolean,
               public salePrice: number,
               public show: boolean,
               public active: boolean,
               public srcImgSmall: string,
               public srcImgBig: string,
               public srcImgBig2: string,
  ) {}
}
