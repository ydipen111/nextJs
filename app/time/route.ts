export const dynamic = "force-dynamic"
export async function GET() {
  return Response.json({
    Time: new Date().toLocaleTimeString(),
    Date: new Date().toLocaleDateString(),
  });
}