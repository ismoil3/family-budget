"use client"

import * as React from "react"
import {
  IconCamera,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react"

import { NavDocuments } from "@/shared/nav-documents"
import { NavMain } from "@/shared/nav-main"
import { NavSecondary } from "@/shared/nav-secondary"
import { NavUser } from "@/shared/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar"
import { BanknoteArrowDown, BanknoteArrowUp, LayoutDashboard, Settings, Target, Users } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Главный",
      url: "dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Доходы",
      url: "incomes",
      icon: BanknoteArrowUp,
    },
    {
      title: "Расходы",
      url: "expenses",
      icon: BanknoteArrowDown,
    },
    {
      title: "Моя семья",
      url: "my-family",
      icon: Users,
    },
    {
      title: "Целы",
      url: "targets",
      icon: Target,
    },
     {
      title: "Настройки",
      url: "settings",
      icon: Settings,
    },
  
  ],
  
  
  

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">FamilyBudget</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
