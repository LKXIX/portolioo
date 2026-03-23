// Simple visitor counter using a JSON file in /tmp (resets on serverless cold start)
// For persistent counts, replace with a KV store (Vercel KV, Upstash, etc.)
import fs from "fs";
import path from "path";

const FILE = path.join("/tmp", "visitors.json");

function read() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    return { count: 10482 }; // start from a realistic seed
  }
}

function write(data) {
  try {
    fs.writeFileSync(FILE, JSON.stringify(data));
  } catch {}
}

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const data = read();
  if (req.method === "POST") {
    data.count += 1;
    write(data);
  }
  res.status(200).json({ count: data.count });
}
