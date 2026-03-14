export const runtime = "edge";

export async function GET(req) {

const { searchParams } = new URL(req.url);
const target = searchParams.get("url");

if(!target){
return new Response("missing url",{status:400});
}

const resp = await fetch(target,{
headers:{
"User-Agent":"Mozilla/5.0"
}
});

const headers = new Headers(resp.headers);

headers.set("Access-Control-Allow-Origin","*");
headers.set("Access-Control-Allow-Methods","GET,HEAD,OPTIONS");
headers.set("Access-Control-Allow-Headers","*");

return new Response(resp.body,{
status:resp.status,
headers
});

}
