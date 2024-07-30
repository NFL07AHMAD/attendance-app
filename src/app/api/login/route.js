import { JSONFileSyncPreset } from "lowdb/node";

const defaultData = {
  users: [],
};

const db = await JSONFileSyncPreset("src/app/data/db.json", defaultData);

export async function GET() {
  return new Response(JSON.stringify(db.data));
}

export async function POST(req) {
  const formData = await req.formData()
  const username = formData.get("username");
  const password = formData.get("password");
  for (let i = 0; i < db.data.users.length; i++) {
    const element = db.data.users[i];
    if (username == element.name && password == element.pass) {
      return new Response("valid-success");
    }
  }
  return new Response("valid-error")
}
