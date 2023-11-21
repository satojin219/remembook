import axios from "axios";
import useSWR from "swr";

const fetcher = async (url: string): Promise<number> => {
  return axios.get(url).then((res) => {
    console.log(res);
    return res.data.data;
  });
};

export const useCompareSummary = (correctSummary: string, answerSummary: string) => {
  return useSWR<number>(`/api/answer?correctSummary=${correctSummary}&answerSummary=${answerSummary}}`, fetcher);
};
