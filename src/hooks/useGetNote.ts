import axios from "axios";
import useSWR from "swr";
import { Book, Note } from "@/types";

const fetcher = async (url: string): Promise<Note> => {
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};

export const useGetNote = (userId: string, bookId: string, noteId: string) => {
  return useSWR<Note>(`/api/note?userId=${userId}&bookId=${bookId}&noteId=${noteId}`, fetcher);
};
