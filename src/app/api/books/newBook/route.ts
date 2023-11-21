import { collection, doc, setDoc } from "firebase/firestore";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/components/Auth";
import { db } from "@/libs/firebase";
import { Book } from "@/types";

type RequestBodyType = {
  id: string;
  title: string;
  url: string;
  author: string;
  userId: string;
};

export async function POST(request: Request) {
  const { id, title, author, url, userId } = (await request.json()) as RequestBodyType;
  const ref = doc(db, "users", userId, "books", id);
  const book: Book = {
    id,
    title,
    author,
    url,
  };
  setDoc(ref, book).then((res) => console.log(res));
  return NextResponse.json({
    status: 200,
  });
}
