"use client";
import { useParams } from "next/navigation";
import ReactLoading from "react-loading";
import { container, noteContainer, queue, score } from "./answer.css";
import { useAuth } from "@/components/Auth";
import { useCompareSummary } from "@/hooks/useCompareSummary";
import { useGetNote } from "@/hooks/useGetNote";

export default function Note() {
  const params = useParams();
  const user = useAuth();
  const { data: note } = useGetNote(user?.id!, params.bookId as string, params.noteId as string);
  const { data, isLoading } = useCompareSummary(note?.note!, note?.summary!);
  return (
    <div>
      <h1 className={queue}>{note?.queue}</h1>
      <div className={container}>
        {isLoading && <ReactLoading type="spin" color="#8AD596" height={"20%"} width={"20%"} />}
        {data && data > 0 && (
          <div>
            <h1 className={score}>{data}</h1>
            {data > 80 && <h2>よくできました！</h2>}
            {79 >= data && data >= 41 && <h2>復習してもう一度挑戦しましょう！あとちょっとですよ</h2>}
            {data < 40 && <h2>もう少し頑張りましょう</h2>}

            <div className={noteContainer}>
              <div>
                <h3>ノート</h3>
                <p>{note?.note}</p>
              </div>
              <div>
                <h3>あなたの解答</h3>
                <p>{note?.summary}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
