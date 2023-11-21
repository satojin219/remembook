"use client";

import Image from "next/image";
import { button, container } from "./login.css";
import { login } from "@/libs/firebase";

export default function Login() {
  return (
    <main>
      <div className={container}>
        <Image src="/logo.svg" width={320} height={245} alt="ロゴ" />
        <button className={button} onClick={login}>ログイン</button>
      </div>
    </main>
  );
}
