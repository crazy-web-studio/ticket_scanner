"use client";
import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { checkInTicket } from "@/lib/data/checkin";
import SacnnedTicket from "./ScannedTicket";
import { CheckInResponse } from "@/lib/types/ticket";
import Loader from "./Loader";
import { getAuthData } from "@/lib/data/auth";

export default function QRScaner() {
  const [ticketScanned, setTicketScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ticketResult, setTicketResult] = useState<CheckInResponse | null>(null);

  const handleScan = (result: IDetectedBarcode[]) => {
    setTicketResult(null);
    if (result.length !== 0 && result[0].rawValue !== "") {
      const processTicket = async () => {
        setIsLoading(true);
        try {
          const authData = await getAuthData();
          if (!authData) {
            throw new Error("Authentication failed");
          }
          const success = await checkInTicket(authData.websiteUrl, authData.eventId, result[0].rawValue);

          // Check if the response is a CheckInResponse or a string
          const checkResponse = (response: CheckInResponse | string | null) => {
            if (typeof response === "string" || response === null) {
              return false;
            } else {
              return true;
            }
          };

          if (checkResponse(success)) {
            setIsLoading(false);
            setTicketScanned(true);
            setTicketResult(success);
          } else {
            console.error("Check-in failed:", success);
            setIsLoading(false);
            setTicketScanned(true);
            setTicketResult(null);
          }
        } catch (error) {
          console.error("Error processing ticket:", error);
          setIsLoading(false);
          setTicketScanned(true);
          setTicketResult(null);
        }
      };

      processTicket();
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>{ticketScanned ? <SacnnedTicket ticketResult={ticketResult} setTicketScanned={setTicketScanned} /> : <Scanner onScan={handleScan} />}</>
      )}
    </>
  );
}
