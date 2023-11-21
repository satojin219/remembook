"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { button, queue } from "./note.css";
import { useAuth } from "@/components/Auth";
import { NewNoteForm } from "@/components/NewNoteForm";
import { useGetNote } from "@/hooks/useGetNote";
import { useUpdateNote } from "@/hooks/useUpdateNote";

export default function Note() {
  const params = useParams();
  const user = useAuth();
  const { data: note } = useGetNote(user?.id!, params.bookId as string, params.noteId as string);
  const [summary, setSummary] = useState<string>("");
  const { trigger } = useUpdateNote(user?.id as string, params.bookId as string, params.noteId as string);
  return (
    <div>
      <h1 className={queue}>{note?.queue}</h1>
      <NewNoteForm title="サマリー" description="本を読まずに学んだことを思い出しながら書こう" onChange={setSummary} />
      <button
        className={button}
        onClick={() => {
          trigger({ id: note?.id!, note: note?.note!, queue: note?.queue!, summary });
        }}
      >
        解答する
      </button>
    </div>
  );
}
