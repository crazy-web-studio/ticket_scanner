"use client";
import QRScaner from "@/lib/components/QRScaner";

export default function Scan() {
  return (
    <div className="flex items-center justify-center p-5">
      <QRScaner />
    </div>
  );
}
