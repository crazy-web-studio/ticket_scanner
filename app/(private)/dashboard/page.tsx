import TicketList from "@/lib/components/TicketList";
import { getTickets } from "@/lib/data/ticket";

export default async function Dashboard() {
  const tickets = await getTickets();

  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Event : Don Diablo</h2>
      </div>
      <div className="flex gap-5 items-center mb-8">
        <div className="flex flex-col gap-2 border border-border rounded-xl py-3 px-5 grow">
          <h2 className="text-base ">Ticket Sold</h2>
          <span className="text-xl font-bold">24</span>
        </div>
        <div className="flex flex-col  gap-2 border border-border rounded-xl py-3 px-5 grow">
          <h2 className="text-base">Checked In</h2>
          <span className="text-xl font-bold">4</span>
        </div>
        <div className="flex flex-col  gap-2 border border-border rounded-xl py-3 px-5 grow">
          <h2 className="text-base ">To Check in</h2>
          <span className="text-xl font-bold">20</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Ticket List</h2>
          <TicketList tickets={tickets} />
        </div>
      </div>
    </div>
  );
}
