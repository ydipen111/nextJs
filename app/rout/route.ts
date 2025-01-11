import { headers } from "next/headers";
import { good } from "./product";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("search");
  const filterComments = query ?
    good.filter((item) => item.title.includes(query))
    : good;
  return Response.json(filterComments);
}

export async function POST(request: Request) {
  const goods = await request.json();
  const newGoods = {
    id: good.length + 1,
    title: goods.title,
    quality: goods.quality
  };
  good.push(newGoods);
  return new Response(JSON.stringify(newGoods), {
    headers: {
      "Content-type": "application/json"
    },
    status: 201
  })
}