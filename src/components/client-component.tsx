"use client";

import ClientComponentProps from "@/utils/type";
import { useState } from "react";

export default function ClientComponent({ children }: ClientComponentProps) {
  const [state, setState] = useState("");
  return (
    <>
      <h1>Client component</h1>
      {children}
    </>
  );
}
