"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { button, container } from "./newNote.css";
import { useAuth } from "@/components/Auth";
import { NewNoteForm } from "@/components/NewNoteForm";
import { useRegisterNote } from "@/hooks/useRegisterNote";

export default function NewNote() {
  const [note, setNote] = useState<string>("");
  const [queue, setQueue] = useState<string>("");

  const params = useParams();
  const user = useAuth();

  const { trigger } = useRegisterNote(user?.id as string, params.bookId as string);
  return (
    <div className={container}>
      <NewNoteForm title="ノート" description="本を読まずに学んだことを思い出しながら書こう" onChange={setNote} />
      <NewNoteForm title="キュー" description="ノートの内容が答えになるような質問を書こう" onChange={setQueue} />
      <button
        className={button}
        onClick={() => {
          trigger({ id: uuidv4(), note, queue, summary: "" });
        }}
      >
        保存する
      </button>
    </div>
  );
}
