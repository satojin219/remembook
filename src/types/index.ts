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
