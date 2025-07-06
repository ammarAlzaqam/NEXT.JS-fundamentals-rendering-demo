"use client";

import { ImageSlider } from "@/components/ImageSlider";
import { useTheme } from "@/components/theme-provider";
import clientSideFunction from "@/utils/client-utils";

// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoute() {
  //   const result = serverSideFunction();
  const result = clientSideFunction();
  const theme = useTheme();
  return (
    <section>
      <h1 style={{ color: theme.colors.secondary }}>client Route Page</h1>
      <p>{result}</p>
    </section>
  );
}
