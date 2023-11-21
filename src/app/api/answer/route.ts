import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const correctSummary = searchParams.get("correctSummary");
  const answerSummary = searchParams.get("answerSummary");

  const completion = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      {
        role: "user",
        content: `昨日のメモ: ${correctSummary}\n今日のメモ: ${answerSummary}\nこれらの文章の類似度をWord Embeddingsを用いて0~100のスコアに変換してスコアだけをJSON形式で返して、説明文は不要です。`,
      },
    ],
    response_format: {
      type: "json_object", // json_objectを指定
    },
  });

  const similarityScore = completion.choices[0]?.message?.content;
  console.log(completion.choices[0]?.message);
  const data = JSON.parse(similarityScore!)["similarity_score"];
  return NextResponse.json({
    data,
    status: 200,
  });
}
