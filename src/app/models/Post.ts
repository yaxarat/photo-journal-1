export interface Post {
  id?: string;
  image?: string;
  writerImage?: string;
  writer: string;
  title: string;
  timestamp: string;
  abstract: string;
  body: string;
  like: number;
  comment?: string[];
  commenter?: string[];
}
