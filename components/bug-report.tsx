/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4ba1UzADxSg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VideoIcon } from "lucide-react";
import Link from "next/link";

export function BugReport() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="flex flex-col min-h-screen gap-4 py-6">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 h-10" href="/Epic1min">
            <VideoIcon className="h-6 w-6" />
            <span className="font-semibold text-lg">Epic1min</span>
          </Link>
        </div>
        <div className="grid gap-2">
          <h2 className="text-lg font-medium">
            Report a Bug / Feature Suggest
          </h2>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
            Please fill in the blank below
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-1.5 items-center">
            <Label
              className="flex items-center gap-2 cursor-default"
              htmlFor="title-2"
            >
              <span>Title</span>
            </Label>
            <Input id="title-2" placeholder="Enter the title" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="expected-2">Expected Behavior</Label>
            <Textarea
              className="min-h-[100px]"
              id="actual-2"
              placeholder="Enter the expected behavior"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="actual-2">Current Behavior</Label>
            <Textarea
              className="min-h-[100px]"
              id="actual-2"
              placeholder="Enter the current behavior"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
