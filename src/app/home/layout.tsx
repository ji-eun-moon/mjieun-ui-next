"use client";
import { DialogProvider } from "@/hooks/useDialog";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DialogProvider>{children}</DialogProvider>;
}
