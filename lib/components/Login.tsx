"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { login } from "@/lib/data/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/ui/card";
import { useToast } from "@/lib/hooks/use-toast";

export default function LoginForm() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [eventId, setEventId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!websiteUrl || !eventId) {
      toast({
        variant: "destructive",
        title: "Please enter both website URL and event ID.",
      });
      return;
    }
    setIsLoading(true);
    try {
      const success = await login(websiteUrl, eventId);
      if (success.status) {
        router.push("/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: `Login failed. ${success.message}`,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: `Login failed. Please try again later.`,
      });
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">URL</Label>
            <Input
              id="websiteUrl"
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              required
              placeholder="https://example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Event ID</Label>
            <Input id="eventId" type="text" value={eventId} onChange={(e) => setEventId(e.target.value)} required placeholder="Enter event ID" />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading} onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
