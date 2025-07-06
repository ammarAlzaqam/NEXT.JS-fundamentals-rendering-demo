import fs from "fs";

export default function ServerComponent() {
  fs.readFileSync("src/components/server-component.tsx", "utf-8");
  return (
    <>
      <h1>Server component</h1>
    </>
  );
}
