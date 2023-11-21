"use client";
import { bookListContainer } from "./Books.css";
import { useAuth } from "@/components/Auth";
import { BookCard } from "@/components/BookCard";
import { NewBookCard } from "@/components/NewBookCard";
import { useGetBooks } from "@/hooks/useGetBooks";

export default function Books() {
  const user = useAuth();
  const { data: books } = useGetBooks(user?.id!);
  return (
    <main>
      <div className={bookListContainer}>
        <NewBookCard />
        {books?.map((book) => {
          return (
            <div key={book.id}>
              <BookCard id={book.id} name={book.title} url={book.url} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
