export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthContextState = {
  currentUser: User | null | undefined;
};
export type ReactNodeProps = {
  children?: React.ReactNode;
};

export type Book = {
  id: string;
  title: string;
  url: string;
  author: string;
};

export type Note = {
  note: string;
  question: string;
};
