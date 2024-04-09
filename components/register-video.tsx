/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NEcsYa0qE7X
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VideoIcon } from "lucide-react";
import Link from "next/link";

export function RegisterVideo() {
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
          <h2 className="text-lg font-medium">Register new video</h2>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
            The video must meet these criteria: 10M+ view, ≤1 minute
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-1.5 items-center">
            <Label htmlFor="url">
              <span>Video URL</span>
            </Label>
            <Input
              id="url"
              placeholder="https://youtube.com/watch?v=example"
              required
            />
          </div>
          <div className="flex items-start space-x-4 justify-center">
            <img
              alt="Thumbnail"
              className="aspect-square border"
              height={160}
              src="/placeholder.svg"
              width={160}
            />
          </div>
          <Button className="h-10" size="lg" type="submit">
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}
