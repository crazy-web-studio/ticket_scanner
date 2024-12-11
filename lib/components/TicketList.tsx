"use client";

import { useState } from "react";
import { Card, CardContent } from "@/lib/ui/card";
import SearchBar from "./SearchBar";

interface Ticket {
  id: string;
  attendeeName: string;
  attendeeSurname: string;
  ticketType: string;
  price: number;
  uniqueCode: string;
  purchaseDate: string; // Add this new field
}

interface TicketListProps {
  tickets: Ticket[];
}

export default function TicketList({ tickets }: TicketListProps) {
  const [filteredTickets, setFilteredTickets] = useState(tickets);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = tickets.filter(
      (ticket) =>
        ticket.attendeeName.toLowerCase().includes(lowercasedQuery) ||
        ticket.attendeeSurname.toLowerCase().includes(lowercasedQuery) ||
        ticket.uniqueCode.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTickets(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="space-y-4">
        {filteredTickets.map((ticket) => (
          <Card key={ticket.id} className="overflow-hidden">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">
                {ticket.attendeeName} {ticket.attendeeSurname}
              </h3>
              <p className="text-sm text-gray-500">
                ID: {ticket.uniqueCode} | Purchased: {ticket.purchaseDate}
              </p>
              <p className="text-sm mt-2">
                Type: {ticket.ticketType} | Price: ${ticket.price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
