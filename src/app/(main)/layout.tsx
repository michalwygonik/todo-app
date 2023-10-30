"use client";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { Header } from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  const isMobile = useMediaQuery("(max-width:768px");

  if (isLoading)
    <div className="h-full flex items-center justify-center">
      <Spinner size="lg" />
    </div>;

  if (!isAuthenticated) redirect("/");

  return (
    <div className="h-full flex">
      <Navigation />

      <main
        className={cn(
          "flex-1  -ml-8 rounded-l-[32px] overflow-y-auto z-10",
          isMobile && "rounded-l-0 ml-0"
        )}
      >
        <Header />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
