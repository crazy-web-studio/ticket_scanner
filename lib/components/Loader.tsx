import React from "react";
import { LoaderCircle } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full max-w-[500px] mx-auto" style={{ height: "calc(100vh - 125px)" }}>
      <LoaderCircle className="animate-spin size-12 text-foreground" />
    </div>
  );
}
