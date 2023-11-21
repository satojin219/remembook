"use client";

import Image from "next/image";
import { button, container } from "./page.css";

export default function Login() {
  return (
    <main>
      <div className={container}>
        <Image src="/logo.svg" width={320} height={245} alt="ロゴ" />
        <button className={button}>ログイン</button>
      </div>
    </main>
  );
}
