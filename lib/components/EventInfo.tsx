"use client";
import { EventData } from "@/lib/types/event";
import { useGlobalStore } from "@/lib/store/globalStore";

export default function EventInfo({ eventData }: { eventData: EventData }) {
  const { setSelectedTicketCategory, selectedTicketCategory } = useGlobalStore();
  return (
    <div className="flex gap-5 items-center mb-8">
      <div
        className={`flex flex-col gap-2 border border-border rounded-xl py-3 px-5 grow cursor-pointer hover:border-foreground ${
          selectedTicketCategory === "sold" ? "border-foreground" : ""
        }`}
        onClick={() => setSelectedTicketCategory("sold")}
      >
        <h2 className="text-base text-center sm:text-left">Ticket sold</h2>
        <span className="text-xl font-bold text-center sm:text-left">{eventData.sold_tickets}</span>
      </div>
      <div
        className={`flex flex-col gap-2 border border-border rounded-xl py-3 px-5 grow cursor-pointer hover:border-foreground ${
          selectedTicketCategory === "checked" ? "border-foreground" : ""
        }`}
        onClick={() => setSelectedTicketCategory("checked")}
      >
        <h2 className="text-base text-center sm:text-left">Checked tickets</h2>
        <span className="text-xl font-bold text-center sm:text-left">{eventData.checked_tickets}</span>
      </div>
      <div
        className={`flex flex-col gap-2 border border-border rounded-xl py-3 px-5 grow cursor-pointer hover:border-foreground ${
          selectedTicketCategory === "to_check" ? "border-foreground" : ""
        }`}
        onClick={() => setSelectedTicketCategory("to_check")}
      >
        <h2 className="text-base text-center sm:text-left">Ticket to check</h2>
        <span className="text-xl font-bold text-center sm:text-left">{eventData.sold_tickets - eventData.checked_tickets}</span>
      </div>
    </div>
  );
}
