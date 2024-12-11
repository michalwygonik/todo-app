"use client";

import {
  BarChart3Icon,
  ChevronsLeft,
  FoldersIcon,
  ListTodoIcon,
  MenuIcon,
  StickyNoteIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "160px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 160px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "160px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      sidebarRef.current.style.paddingRight = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-olive overflow-y-auto pr-12 relative w-40 ",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        {isMobile && (
          <div
            onClick={collapse}
            role="button"
            className={cn(
              "h-6 w-6 text-white rounded-sm hover:bg-neutral-500 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
              isMobile && "opacity-100"
            )}
          >
            {" "}
            <ChevronsLeft className="h-6 w-6" />
          </div>
        )}

        <div className="flex mx-auto mt-5 w-16 h-16 p-3 rounded-full bg-background justify-center ">
          <Link href="/dashboard">
            <Image src="/logo.png" width="100" height="100" alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center my-24 lg:my-32 gap-6 lg:gap-12">
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:scale-105 transition-all duration-200 lg:hover:scale-110"
          >
            <Link
              href="/tasks"
              className="flex justify-center items-center text-white text-2xl"
            >
              <ListTodoIcon size={35} className="mx-4" />
              {isMobile && <span>Recent Tasks</span>}
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:scale-105 transition-all duration-200 lg:hover:scale-110"
          >
            <Link
              href="/notes"
              className="flex  items-center text-white text-2xl"
            >
              <StickyNoteIcon size={35} className="mx-4" />
              {isMobile && <span>Notes</span>}
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:scale-105 transition-all duration-200 lg:hover:scale-110"
          >
            <Link
              href="/folders"
              className="flex  items-center text-white text-2xl"
            >
              <FoldersIcon size={35} className="mx-4" />
              {isMobile && <span>Folders</span>}
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:scale-105 transition-all duration-200 lg:hover:scale-110"
          >
            <Link
              href="/statistic"
              className="flex  items-center text-white text-2xl"
            >
              <BarChart3Icon size={35} className="mx-4" />
              {isMobile && <span>Statistic</span>}
            </Link>
          </Button>
        </div>
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-40 w-[calc(100%-160px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full">
          {isCollapsed && (
            <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6" />
          )}
        </nav>
      </div>
    </>
  );
};
export default Navigation;
