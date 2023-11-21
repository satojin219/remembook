import { collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/libs/firebase";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  const bookId = searchParams.get("bookId");

  const ref = collection(db, "users", userId!, "books", bookId!, "notes");
  const querySnapshot = await getDocs(ref);
  const data = querySnapshot.docs.map((doc) => doc.data());
  return NextResponse.json({
    data,
    status: 200,
  });
}
