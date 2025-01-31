"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils"; // Utility for conditional classes if using shadcn

export function OffCanvas({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-white/10 backdrop-blur-sm z-10"
        />
        <Dialog.Content
          className={cn(
            "fixed top-0 right-0 z-50 h-full w-4/5 bg-white shadow-lg",
            "transition-transform transform-gpu",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-4 flex items-center justify-between border-b">
            {title && <h2 className="text-lg font-semibold"><i className="icon-ic_org_user user"></i> {title}</h2>}
            <div>
            <button type="submit" className="btn btn-primary mx-2">
                  Save & Add
            </button>
            <button type="submit" className="btn btn-primary mx-2">
                  Save 
            </button>
            <button type="button" className="btn btn-link"
                  onClick={onClose}
                  >
                    Cancel
                </button>
            </div>
 
          </div>
          <div className="p-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
