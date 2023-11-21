"use client";
import Image from "next/image";
import Link from "next/link";
import { container, title } from "./newBookCard.css";

export const NewBookCard: React.FC = () => {
  return (
    <Link className={container} href={`books/newBook`}>
      <Image src={"/Book.svg"} alt="表紙の画像" width={140} height={140}></Image>
      <p className={title}>本を追加する</p>
    </Link>
  );
};
