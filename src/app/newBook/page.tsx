"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { button, inputContainer } from "./newBook.css";
import { useAuth } from "@/components/Auth";

const NewBook = () => {
  const [title, setTitle] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const user = useAuth();
  const router = useRouter();

  const onClick = () => {
    fetch(`/api/books/newBook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        title,
        author,
        url: "",
        userId: user?.id,
      }),
    }).then(() => router.push("/books"));
  };
  return (
    <main>
      <div>
        <div className={inputContainer}>
          <label htmlFor="">タイトル</label>
          <input type="text" onBlur={(e) => setTitle(e.currentTarget.value)} />
        </div>
        <div className={inputContainer}>
          <label htmlFor="">著者</label>
          <input type="text" onBlur={(e) => setAuthor(e.currentTarget.value)} />
        </div>
        <div className={inputContainer}>
          <label htmlFor="">画像</label>
          <input type="image" />
        </div>
        <button className={button} onClick={onClick}>
          登録する
        </button>
      </div>
    </main>
  );
};
export default NewBook;
