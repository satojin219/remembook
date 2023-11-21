import axios from "axios";
import useSWR from "swr";
import { Book, Note } from "@/types";

const fetcher = async (url: string): Promise<Note[]> => {
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};

export const useGetNotes = (userId: string, bookdId: string) => {
  return useSWR<Note[]>(`/api/notes?userId=${userId}&bookId=${bookdId}`, fetcher);
};
