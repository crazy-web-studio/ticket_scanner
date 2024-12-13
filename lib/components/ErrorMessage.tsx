import { AlertTriangle } from "lucide-react";

export default function ErrorDisplay({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center p-8 bg-[rgba(239, 68, 68, 0.05)]">
      <div className="text-center">
        <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
        <p className="text-lg text-red-700">{message}</p>
        <p className="text-sm text-gray-600 mt-2">Please reload the page or contact support if the issue persists.</p>
      </div>
    </div>
  );
}
