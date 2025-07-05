// import { useState } from "react";

export default function About() {
  console.log("About page: server component by default");
  //   const [input, setInput] = useState(""); //! This React hook only works in a client component
  return (
    <section>
      <h1>About Page. {new Date().toLocaleTimeString()}</h1>
    </section>
  );
}
