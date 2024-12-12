import { getAuthData } from "@/lib/data/auth";
import QRScaner from "@/lib/components/QRScaner";
import ErrorDisplay from "@/lib/components/ErrorMessage";

export default async function Scan() {
  const data = await getAuthData();
  if (!data) {
    return <ErrorDisplay message="Event not found!" />;
  }
  const { websiteUrl, eventId } = data;

  return (
    <div className="flex items-center justify-center p-5">
      <QRScaner websiteUrl={websiteUrl} eventId={eventId} />
    </div>
  );
}
