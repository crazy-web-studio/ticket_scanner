"use client";
import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { checkInTicket } from "@/lib/data/checkin";
import SacnnedTicket from "./ScannedTicket";
import { CheckInResponse } from "@/lib/types/ticket";

export default function QRScaner({ websiteUrl, eventId }: { websiteUrl: string; eventId: string }) {
  const [ticketScanned, setTicketScanned] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [ticketResult, setTicketResult] = useState<CheckInResponse | null>(null);

  const handleScan = (result: IDetectedBarcode[]) => {
    if (result.length !== 0 && result[0].rawValue !== "") {
      setTicketId(result[0].rawValue);
      setTicketResult(null);
      setTicketScanned(true);

      const processTicket = async () => {
        try {
          const success = await checkInTicket(websiteUrl, eventId, result[0].rawValue);

          // Type guard to check if the result is a CheckInResponse
          const isCheckInResponse = (obj: any): obj is CheckInResponse => {
            return obj !== null && typeof obj === "object" && "status" in obj && "name" in obj && "payment_date" in obj;
          };

          if (isCheckInResponse(success)) {
            setTicketResult(success);
            setTicketScanned(true);
          } else {
            // Handle non-CheckInResponse result (e.g., error string)
            console.error("Check-in failed:", success);
            setTicketResult(null);
            setTicketScanned(false);
          }
        } catch (error) {
          console.error("Error processing ticket:", error);
          setTicketResult(null);
          setTicketScanned(false);
        }
      };

      processTicket();
    }
  };

  return <>{ticketScanned ? <SacnnedTicket ticketResult={ticketResult} setTicketScanned={setTicketScanned} /> : <Scanner onScan={handleScan} />}</>;
}
