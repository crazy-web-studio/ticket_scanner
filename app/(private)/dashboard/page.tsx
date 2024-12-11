import { getAuthData } from "@/lib/data/auth";
import TicketList from "@/lib/components/TicketList";
import QRScanner from "@/lib/components/QRScanner";
import LogoutButton from "@/lib/components/LogoutButton";
import { getTickets } from "@/lib/data/ticket";

export default async function Dashboard() {
  //const { websiteUrl, eventId } = await getAuthData();
  const tickets = await getTickets();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Event Dashboard</h1>
        <LogoutButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Ticket List</h2>
          <TicketList tickets={tickets} />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">QR Code Scanner</h2>
          <QRScanner />
        </div>
      </div>
    </div>
  );
}
