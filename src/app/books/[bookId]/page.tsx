"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { button, noteContainer, noteStyle } from "./book.css";
import { useAuth } from "@/components/Auth";
import { useGetBook } from "@/hooks/useGetBook";
import { useGetNotes } from "@/hooks/useGetNotes";

export default function Books() {
  const user = useAuth();
  const params = useParams();
  const { data: notes } = useGetNotes(user?.id!, params.bookId as string);
  const { data: book } = useGetBook(user?.id!, params.bookId as string);
  return (
    <main>
      <div>
        <h2>タイトル</h2>
        <p>{book?.title!}</p>
        <h2>著者名</h2>
        <p>{book?.author!}</p>
        <Link className={button} href={`/books/${book?.id}/newNote`}>
          ノートを書く
        </Link>
        <div>
          <div className={noteContainer}>
            {notes?.map((note, index) => (
              <Link className={noteStyle} key={note.id} href={`/books/${book?.id}/${note.id}`}>
                {index + 1 + ". " + note.note}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
