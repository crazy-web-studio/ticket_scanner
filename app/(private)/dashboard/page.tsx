import { getAuthData } from "@/lib/data/auth";
import TicketList from "@/lib/components/TicketList";
import { getEventData } from "@/lib/data/event";
import { getTickets } from "@/lib/data/ticket";
import { AlertTriangle } from "lucide-react";

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
  console.log(ticketsData[1].data.custom_fields);

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

function ErrorDisplay({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center p-8 bg-red-50">
      <div className="text-center">
        <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
        <p className="text-lg text-red-700">{message}</p>
        <p className="text-sm text-gray-600 mt-2">Please reload the page or contact support if the issue persists.</p>
      </div>
    </div>
  );
}
