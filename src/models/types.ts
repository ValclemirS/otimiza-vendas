export interface Planilha {
  id: string;
  tag: string;
  name: string;
  desc: string;
  images: string[];
}

export interface Ebook {
  name: string;
  sub: string;
  value: string;
  desc: string;
  image: string;
}

export interface StackItem {
  label: string;
  value: string;
  bonus?: boolean;
  incluso?: boolean;
}

export interface Depoimento {
  text: string;
  author: string;
  role: string;
}

export interface Faq {
  q: string;
  a: string;
}
