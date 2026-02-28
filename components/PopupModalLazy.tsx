"use client";

import dynamic from "next/dynamic";

const PopupModal = dynamic(() => import("./PopupModal"), { ssr: false });

export default function PopupModalLazy() {
  return <PopupModal />;
}
