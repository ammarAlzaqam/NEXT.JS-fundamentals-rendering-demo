import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
  const result = serverSideFunction();
  return (
    <section>
      <h1>Server Route Page: {result}</h1>;
      <ImageSlider />
    </section>
  );
}
