import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/libs/firebase";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { userId: string };
  },
) {
  const userId = request.nextUrl.pathname.replace("/api/books/getBooks/", "");
  const ref = collection(db, "users", userId!, "books");
  const querySnapshot = await getDocs(ref);
  const data = querySnapshot.docs.map((doc) => doc.data());
  return NextResponse.json({
    data,
    status: 200,
  });
}
