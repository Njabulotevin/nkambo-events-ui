"use client";

import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { deleteCookie } from "cookies-next/client";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/" },
  //   { icon: Ticket, label: "Tickets", href: "/dashboard/tickets" },
  { icon: Calendar, label: "Events", href: "/dashboard/event" },
  { icon: Users, label: "Attendees", href: "/dashboard/users" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="min-h-screen bg-white flex"><aside className="w-64 bg-[#0A0B2E]">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-center h-16 bg-[#E31B54] text-white">
                <h1 className="text-xl font-bold">Admin Panel</h1>
              </div>
              <nav className="flex-1 overflow-y-auto">
                <ul className="p-4 space-y-2">
                  {sidebarItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center p-2 text-gray-200 rounded hover:text-[#0A0B2E] hover:bg-gray-100"
                      >
                        <item.icon className="w-5 h-5 mr-3 text-[#E31B54]" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start text-[#0A0B2E]"
                >
                  <Button
                    onClick={() => {
                      deleteCookie("admin");
                      window.location.reload();
                    }}
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </Button>
                </Button>
              </div>
            </div>
          </aside>

          <main className="flex-1 overflow-y-auto">
            <div className="p-8">{children}</div>
          </main>
        </div>
  );
}
