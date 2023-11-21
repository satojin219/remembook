import axios from "axios";
import useSWRMutation from "swr/mutation";
import { Note } from "@/types";

async function registerNote(url: string, { arg }: { arg: Note }) {
  return axios.post(url, {
    id: arg.id,
    note: arg.note,
    queue: arg.queue,
    answer: "",
  });
}

export const useRegisterNote = (userId: string, bookId: string) => {
  return useSWRMutation(`/api/notes/newNote?userId=${userId}&bookId=${bookId}`, registerNote);
};
