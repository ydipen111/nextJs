import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  // headers
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();


  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  // cookies
  cookies().set("resultPerPage", "20");
  const theme = request.cookies.get("theme")
  console.log(theme);
  console.log(cookies().get("resultsPage"));





  return new Response("<h1> Profile api data </h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  });
}