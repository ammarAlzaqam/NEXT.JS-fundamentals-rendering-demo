// import { useState } from "react";

import { cookies } from "next/headers";

export default async function About() {
  const cookiesStore = await cookies();
  const theme = cookiesStore.get("theme");
  console.log(theme);
  console.log("About page: server component by default");
  //   const [input, setInput] = useState(""); //! This React hook only works in a client component
  return (
    <section>
      <h1>About Page. {new Date().toLocaleTimeString()}</h1>
    </section>
  );
}
