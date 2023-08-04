import { readFile, writeFile } from "fs/promises";

const filePath = new URL("./index.html", import.meta.url);
let data = await readFile(filePath, { encoding: "utf-8" });

console.log(data);
const write = {
  title: "This title",
  body: "This body",
};

for (const [key, value] of Object.entries(write)) {
  data = data.replace(`{${key}}`, value);
}

await writeFile(new URL("./index.html", import.meta.url), data);
