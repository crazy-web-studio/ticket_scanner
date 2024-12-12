"use client";
import { Card, CardContent } from "@/lib/ui/card";
import { CheckInResponse } from "../types/ticket";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function ScannedTicket({
  ticketResult,
  setTicketScanned,
}: {
  ticketResult: CheckInResponse | null;
  setTicketScanned: (value: boolean) => void;
}) {
  if (!ticketResult) {
    return <p>Loading...</p>;
  }
  const ticketApprouved = (dateChecked: number) => {
    if (dateChecked !== 1) {
      return false;
    } else {
      return true;
    }
  };

  console.log(ticketResult);

  return (
    <Card className="overflow-hidden w-full">
      <CardContent className="p-4">
        <div
          className="p-4 w-full border rounded-lg mb-5"
          style={{
            backgroundColor: ticketApprouved(ticketResult.status) ? "#f0fdf4" : "#fef2f2",
            borderColor: ticketApprouved(ticketResult.status) ? "#15803d" : "#b91c1c",
          }}
        >
          <h3 className="text-lg font-bold uppercase text-center" style={{ color: ticketApprouved(ticketResult.status) ? "#15803d" : "##b91c1c" }}>
            {ticketApprouved(ticketResult.status) ? "Approved" : "Rejected"}
          </h3>
        </div>
        <div className="space-y-3">
          <p className="flex justify-between items-center">
            <span>Name:</span>
            <span className="font-semibold">{ticketResult.name}</span>
          </p>
          <Separator />
          <p className="flex justify-between items-center">
            <span>ID:</span>
            <span className="font-semibold">{ticketResult.checksum}</span>
          </p>
        </div>
        <div className="flex justify-center items-center mt-8">
          <Button variant="outline" size="auto" className="w-full text-base font-medium py-3" onClick={() => setTicketScanned(false)}>
            Scan another ticket
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
