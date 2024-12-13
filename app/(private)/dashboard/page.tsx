import { getAuthData } from "@/lib/data/auth";
import TicketList from "@/lib/components/TicketList";
import { getEventData } from "@/lib/data/event";
import { getTickets } from "@/lib/data/ticket";
import ErrorDisplay from "@/lib/components/ErrorMessage";
import EventInfo from "@/lib/components/EventInfo";

export default async function Dashboard() {
  const data = await getAuthData();
  if (!data) {
    return <ErrorDisplay message="Event not found!" />;
  }
  const { websiteUrl, eventId } = data;

  const eventData = await getEventData(websiteUrl, eventId);
  if (!eventData) {
    return <ErrorDisplay message="Unable to load event data!" />;
  }
  const ticketsData = await getTickets(websiteUrl, eventId);
  if (!ticketsData) {
    return <ErrorDisplay message="Unable to load tickets data!" />;
  }

  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Event : {eventData.event_name}</h2>
      </div>
      <EventInfo eventData={eventData} />
      <div className="">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Ticket List</h2>
          <TicketList ticketData={ticketsData} />
        </div>
      </div>
    </div>
  );
}
