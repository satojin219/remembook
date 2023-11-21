import axios from "axios";
import { useRouter } from "next/navigation";
import { Note } from "@/types";
import useSWRMutation from "swr/mutation";

async function updateNote(url: string, { arg }: { arg: Note }) {
  return axios.post(url, {
    id: arg.id,
    note: arg.note,
    queue: arg.queue,
    summary: arg.summary,
  });
}

export const useUpdateNote = (userId: string, bookId: string, noteId: string) => {
  const router = useRouter()
  return useSWRMutation(`/api/notes/updateNote?userId=${userId}&bookId=${bookId}&noteId=${noteId}`, updateNote,{onSuccess:()=>router.push(`/books/${bookId}/notes/${noteId}/result`)});
};
