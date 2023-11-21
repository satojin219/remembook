import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/libs/firebase";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  const bookId = searchParams.get("bookId");
  const noteId = searchParams.get("noteId");

  const ref = doc(db, "users", userId!, "books", bookId!, "notes", noteId!);
  const querySnapshot = await getDoc(ref);
  const data = querySnapshot.data();
  return NextResponse.json({
    data,
    status: 200,
  });
}
