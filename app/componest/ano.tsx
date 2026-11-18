"use client";

import { useEffect, useState } from "react";

export default function Ano() {
  const [ano, setAno] = useState(2026);

  useEffect(() => {
    setAno(new Date().getFullYear());
  }, []);

  return <>{ano}</>;
}