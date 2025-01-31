"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function AppSidebar({
  items,
  onNavigate,
}: {
  items: {
    title: string;
    url?: string;
    component?: React.ReactNode;
    iconClass: string;
  }[];
  onNavigate: (item: unknown) => void;
}) {
  return (
    <Sidebar collapsible="icon" className="cpm-sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => onNavigate(item)}
                  >
                    <button className="flex items-center space-x-2">
                      <i className={item.iconClass}></i>
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
