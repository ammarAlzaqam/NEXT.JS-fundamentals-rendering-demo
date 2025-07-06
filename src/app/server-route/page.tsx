import { ImageSlider } from "@/components/ImageSlider";
// import clientSideFunction from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction();
  return (
    <section>
      <h1>Server Route Page: {result}</h1>
      {/* <p>{clientResult}</p> */}
      <ImageSlider />
    </section>
  );
}
