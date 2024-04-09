"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8xuL0PEABA1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  BugIcon,
  Clock10Icon,
  EyeIcon,
  HeartIcon,
  ListPlusIcon,
  SearchIcon,
  SettingsIcon,
  SortAscIcon,
  SortDescIcon,
  StarIcon,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function VideoList() {
  const [sortBy, setSortBy] = useState("impact");
  const [sortDir, setSortOrder] = useState("most");
  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="flex flex-col min-h-screen gap-4 py-6">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="#">
            <VideoIcon className="h-6 w-6" />
            <span className="font-semibold text-lg">Epic1min</span>
          </Link>
          <form className="flex-1">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-gray-300 dark:text-gray-700" />
              <Input
                className="pl-8 w-full"
                placeholder="Search by name..."
                type="search"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="h-10 w-10 shrink-0 flex items-center gap-2"
                size="sm"
                variant="outline"
              >
                <SettingsIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* Sort by */}
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuRadioItem value="impact">
                  <StarIcon className="mr-2 h-4 w-4" />
                  View per time
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="view">
                  <EyeIcon className="mr-2 h-4 w-4" />
                  View
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="time">
                  <Clock10Icon className="mr-2 h-4 w-4" />
                  Time
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="heart">
                  <HeartIcon className="mr-2 h-4 w-4" />
                  Favorite
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              {/* Sort direction */}
              <DropdownMenuRadioGroup
                value={sortDir}
                onValueChange={setSortOrder}
              >
                <DropdownMenuLabel>Sort direction</DropdownMenuLabel>
                <DropdownMenuRadioItem value="most">
                  <SortDescIcon className="mr-2 h-4 w-4" />
                  Most
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="least">
                  <SortAscIcon className="mr-2 h-4 w-4" />
                  Least
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              {/* Settings */}
              <DropdownMenuGroup>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuItem>
                  <ListPlusIcon className="mr-2 h-4 w-4" />
                  <Link href="Epic1min/register">Register new video</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BugIcon className="mr-2 h-4 w-4" />
                  <Link href="Epic1min/report">Report bug/feature</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168}
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">
                Introducing v0: Generative UI
              </div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                Vercel
              </div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                300K views · 5 days ago
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168}
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">
                Introducing the frontend cloud
              </div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                Vercel
              </div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                1.2M views · 2 months ago
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168}
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">
                Using Vercel KV with Svelte
              </div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                Lee Robinson
              </div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                21K views · 1 week ago
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168}
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">
                Loading UI with Next.js 13
              </div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                Delba
              </div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                12K views · 10 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
