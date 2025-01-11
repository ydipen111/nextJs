import { redirect } from "next/navigation";
import { good } from "../product";

export async function GET(request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > good.length) {
    redirect("/good");
  }
  const goods = good.find(
    (good) => good.id === parseInt(params.id)
  );
  return Response.json(goods);

}


export async function PATCH(request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { title, quality } = body;
  const index = good.findIndex(
    (good) => good.id === parseInt(params.id)
  );
  good[index].title = title;
  good[index].quality = quality
  return Response.json(good[index]);
}

export async function DELETE(request: Request,
  { params }: { params: { id: string } }
) {
  const index = good.findIndex(
    (goods) => goods.id === parseInt(params.id)
  );
  const deleteComent = good[index];
  good.splice(index, 1);
  return Response.json(deleteComent)
}