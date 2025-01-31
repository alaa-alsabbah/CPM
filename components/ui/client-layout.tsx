"use client";

import React, { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/ui/header";
import OrgStructure from "@/app/org-structure";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
const items = [
  {
    title: "Home page",
    url: "#",
    iconClass: "icon-ic_sdaia",
  },
  {
    title: "Virtual machine",
    url: "#",
    iconClass: "icon-ic_machine",
  },
  {
    title: "Load balancers",
    url: "#",
    iconClass: "icon-ic_balancers",
  },
  {
    title: "Firewalls",
    url: "#",
    iconClass: "icon-ic_firewalls",
  },
  {
    title: "Organizational structure",
    component: <OrgStructure />,
    iconClass: "icon-ic_org",
  },
  {
    title: "Reports",
    url: "#",
    iconClass: "icon-ic_report",
  },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(null);

  const handleNavigation = (item: typeof items[0]) => {
    if (item.component) {
      setActiveComponent(item.component);
    } else if (item.url) {
      window.location.href = item.url;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar onNavigate={handleNavigation} items={items} />
        <main className="w-full">
          <header className="bg-primary text-primary-foreground shadow-md flex items-center cpm-header-container">
            <SidebarTrigger />
            <Header />
          </header>
          <div className="p-5">
            <div className="cpm-breadcrumb mb-3">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {activeComponent || <>{children}</>}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
