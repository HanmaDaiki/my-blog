import { ISlug } from "./ISlug";

export interface IPost {
  mainTitle: string,
  description: string,
  publishedDate: string,
  _id: string,
  slug: ISlug
}