"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { bookListContainer } from "./Books.css";
import { useAuth } from "@/components/Auth";
import { BookCard } from "@/components/BookCard";
import { NewBookCard } from "@/components/NewBookCard";
import { auth } from "@/libs/firebase";
import { Book } from "@/types";

const fetcher = async (url: string): Promise<Book[]> => {
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};
export default function Books() {
  const user = useAuth();
  const { data: books } = useSWR<Book[]>(`/api/books/getBooks/${user?.id}`, fetcher);

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
