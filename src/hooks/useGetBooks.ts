import axios from "axios";
import useSWR from "swr";
import { Book } from "@/types";

const fetcher = async (url: string): Promise<Book[]> => {
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};

export const useGetBooks = (userId: string) => {
  return useSWR<Book[]>(`/api/books?userId=${userId}`, fetcher);
};
