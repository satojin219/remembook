import { doc, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/libs/firebase";
import { Note } from "@/types";

type RequestBodyType = {
  id: string;
  note: string;
  queue: string;
  summary: string;
};

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  const bookId = searchParams.get("bookId");
  const { id, note, queue, summary } = (await request.json()) as RequestBodyType;
  console.log("summary: ", summary);
  const ref = doc(db, "users", userId!, "books", bookId!, "notes", id);

  const book: Note = {
    id,
    note,
    queue,
    summary,
  };
  setDoc(ref, book).then((res) => console.log(res));
  return NextResponse.json({
    status: 200,
  });
}
