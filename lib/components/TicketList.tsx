"use client";
import SearchBar from "./SearchBar";
import { Ticket } from "@/lib/types/ticket";
import { Card, CardContent } from "@/lib/ui/card";
import { displayCheckedInStatus } from "@/lib/functions/checkin";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/lib/ui/dialog";
import { Separator } from "../ui/separator";

export default function TicketList({ ticketData }: { ticketData: Ticket[] }) {
  const ticketsWithoutPagination = ticketData.slice(0, -1);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>(ticketsWithoutPagination);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = ticketsWithoutPagination.filter(
      (ticket) =>
        ticket.data.buyer_first.toLowerCase().includes(lowercasedQuery) ||
        ticket.data.buyer_last.toLowerCase().includes(lowercasedQuery) ||
        ticket.data.transaction_id.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTickets(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="space-y-4">
        {filteredTickets.map((ticket) => (
          <Dialog key={ticket.data.transaction_id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">
                    {ticket.data.buyer_first} {ticket.data.buyer_last}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ID: {ticket.data.transaction_id} | Purchased: {ticket.data.payment_date}
                  </p>
                  <p className="text-sm mt-2">
                    Type : {ticket.data.custom_fields[0][1]} | Status: {displayCheckedInStatus(ticket.data.date_checked)}
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="mb-5">
                <DialogTitle className="text-xl">Attendee details</DialogTitle>
                <DialogDescription>Purchased: {ticket.data.payment_date}</DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <p className="flex justify-between items-center">
                  <span>Name:</span>
                  <span className="font-semibold">
                    {ticket.data.buyer_first} {ticket.data.buyer_last}
                  </span>
                </p>
                <Separator />
                <p className="flex justify-between items-center">
                  <span>ID:</span>
                  <span className="font-semibold">{ticket.data.transaction_id}</span>
                </p>
                <Separator />
                <p className="flex justify-between items-center">
                  <span>Event:</span>
                  <span className="font-semibold">{ticket.data.custom_fields[1][1]}</span>
                </p>
                <Separator />
                <p className="flex justify-between items-center">
                  <span>Ticket type:</span>
                  <span className="font-semibold text-end">{ticket.data.custom_fields[0][1]}</span>
                </p>
                <Separator />
                <p className="flex justify-between items-center">
                  <span>Email:</span>
                  <span className="font-semibold">{ticket.data.custom_fields[3][1]}</span>
                </p>
                <Separator />
                <p className="flex justify-between items-center">
                  <span>Status:</span>
                  <span className="font-semibold">{displayCheckedInStatus(ticket.data.date_checked)}</span>
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
