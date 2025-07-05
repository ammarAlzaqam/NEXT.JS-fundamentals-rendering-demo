"use client"; //* To use client component mark the file (or its parent) with the "use client directive"

import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  return (
    <section>
      <h1>Dashboard Page</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Hello: {name}!</p>
    </section>
  );
}
