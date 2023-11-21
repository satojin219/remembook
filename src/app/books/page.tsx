import Image from "next/image";
import { BookCard } from "@/components/BookCard";
import { login } from "@/libs/firebase";
import { NewBookCard } from "@/components/NewBook";
import { bookListContainer } from "./Books.css";

export default function Books() {
  const books = [
    {
      id: "1234",
      name: "フロントエンド開発のためのテスト入門 今からでもフロントエンド開発のためのテスト入門 今からでもフロントエンド開発のためのテスト入門 今からでも",
      url: "",
    },
  ];
  return (
    <main>
      <div className={bookListContainer}>
        <NewBookCard />
        {books.map((book) => {
          return (
            <div key={book.id}>
              <BookCard id={book.id} name={book.name} url={book.url} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
