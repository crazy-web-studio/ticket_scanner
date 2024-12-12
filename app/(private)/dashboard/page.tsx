import { getAuthData } from "@/lib/data/auth";
import TicketList from "@/lib/components/TicketList";
import { getEventData } from "@/lib/data/event";
import { getTickets } from "@/lib/data/ticket";
import ErrorDisplay from "@/lib/components/ErrorMessage";

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
      <div className="flex gap-5 items-center mb-8">
        <div className="flex flex-col gap-2 border border-border rounded-xl py-3 px-5 grow">
          <h2 className="text-base ">Ticket sold</h2>
          <span className="text-xl font-bold">{eventData.sold_tickets}</span>
        </div>
        <div className="flex flex-col  gap-2 border border-border rounded-xl py-3 px-5 grow">
          <h2 className="text-base">Checked tickets</h2>
          <span className="text-xl font-bold">{eventData.checked_tickets}</span>
        </div>
        <div className="flex flex-col  gap-2 border border-border rounded-xl py-3 px-5 grow">
          <h2 className="text-base ">Ticket to check</h2>
          <span className="text-xl font-bold">{eventData.sold_tickets - eventData.checked_tickets}</span>
        </div>
      </div>
      <div className="">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Ticket List</h2>
          <TicketList ticketData={ticketsData} />
        </div>
      </div>
    </div>
  );
}
