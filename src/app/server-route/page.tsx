import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
  const result = serverSideFunction();
  return <h1>Server Route Page: {result}</h1>;
}
