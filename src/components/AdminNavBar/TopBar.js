import { Bell, LogOut, Settings, User } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { format } from "date-fns";

export default function TopBar() {
  return (
    <div className="border-b bg-gradient-to-r from-white via-yellow-200 to-orange-500 shadow-lg z-20 fixed top-0 left-0 right-0">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="text-lg font-bold text-black"></div>

        <div className="flex items-center space-x-6">
          <div className="text-sm font-medium text-yellow-900">
            <div className="flex items-center space-x-2">
              <span>
                Welcome, <span className="font-bold text-black">Mr. Metro</span>
              </span>
              <span
                className="inline-block animate-waving-hand text-yellow-800"
                role="img"
                aria-label="waving hand"
              >
                👋
              </span>
            </div>
            <div className="text-xs text-yellow-600">
              Today is {format(new Date(), "EEEE, do MMMM yyyy")}
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <Bell className="h-6 w-6 text-orange-400 hover:bg-slate-500 transition-all duration-200" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full border-2 border-yellow-400 hover:border-orange-500 transition-all"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="Admin" />
                  <AvatarFallback className="bg-yellow-500 text-black">
                    MA
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-white shadow-lg rounded-lg text-black"
              align="end"
              forceMount
            >
              <DropdownMenuItem className="flex items-center hover:bg-yellow-100">
                <User className="mr-2 h-4 w-4 text-yellow-500" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center hover:bg-yellow-100">
                <Settings className="mr-2 h-4 w-4 text-yellow-500" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center hover:bg-yellow-100">
                <LogOut className="mr-2 h-4 w-4 text-yellow-500" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
