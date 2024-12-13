"use client";

import { getAuthData } from "@/lib/data/auth";
import TicketList from "@/lib/components/TicketList";
import { getEventData } from "@/lib/data/event";
import { getTickets } from "@/lib/data/ticket";
import ErrorDisplay from "@/lib/components/ErrorMessage";
import EventInfo from "@/lib/components/EventInfo";
import { useEffect, useState } from "react";
import { EventData } from "@/lib/types/event";
import { Ticket } from "@/lib/types/ticket";
import Loader from "@/lib/components/Loader";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [ticketsData, setTicketsData] = useState<Ticket[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const authData = await getAuthData();
        if (!authData) {
          throw new Error("Authentication failed");
        }

        const [eventResult, ticketsResult] = await Promise.all([
          getEventData(authData.websiteUrl, authData.eventId),
          getTickets(authData.websiteUrl, authData.eventId),
        ]);

        if (!eventResult || !ticketsResult) {
          throw new Error("Failed to load event or ticket data");
        }

        setEventData(eventResult);
        setTicketsData(ticketsResult);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
        setEventData(null);
        setTicketsData(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !eventData || !ticketsData) {
    return <ErrorDisplay message={error || "Failed to load event data!"} />;
  }

  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Event: {eventData.event_name}</h2>
      </div>
      <EventInfo eventData={eventData} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Ticket List</h2>
        <TicketList ticketData={ticketsData} />
      </div>
    </div>
  );
}
