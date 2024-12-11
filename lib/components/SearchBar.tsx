"use client";

import { useState } from "react";
import { Input } from "@/lib/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="mb-4">
      <Input type="text" placeholder="Search tickets..." value={query} onChange={handleChange} className="w-full" />
    </div>
  );
}
