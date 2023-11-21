import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { container, title } from "./bookCard.css";

type Props = {
  id: string;
  name: string;
  url?: string;
};
export const BookCard: React.FC<Props> = (props) => {
  return (
    <Link className={container} href={`books/${props.id}`}>
      {props.url ? (
        <Image src={props.url} alt="表紙の画像" width={140} height={140}></Image>
      ) : (
        <Image src={"/NoImage.svg"} alt="表紙の画像" width={140} height={140}></Image>
      )}
      <p className={title}>{props.name}</p>
    </Link>
  );
};
