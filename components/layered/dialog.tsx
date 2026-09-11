"use client"

import * as React from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

function LayeredDialog({
  ...props
}: React.ComponentProps<typeof Dialog>) {
  return <Dialog {...props} />
}

function LayeredDialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogTrigger>) {
  return <DialogTrigger {...props} />
}

function LayeredDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogContent>) {
  return (
    <DialogContent
      className={cn(
        "rounded-3xl border border-border/50 bg-background/95 backdrop-blur-md shadow-2xl p-6 sm:p-8 max-w-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </DialogContent>
  )
}

function LayeredDialogHeader({
  className,
  ...props
}: React.ComponentProps<typeof DialogHeader>) {
  return (
    <DialogHeader
      className={cn("space-y-2 text-left", className)}
      {...props}
    />
  )
}

function LayeredDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogTitle>) {
  return (
    <DialogTitle
      className={cn("text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function LayeredDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogDescription>) {
  return (
    <DialogDescription
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  )
}

function LayeredDialogFooter({
  className,
  ...props
}: React.ComponentProps<typeof DialogFooter>) {
  return (
    <DialogFooter
      className={cn("flex-row justify-end gap-3 pt-4 sm:space-x-0", className)}
      {...props}
    />
  )
}

export {
  LayeredDialog,
  LayeredDialogTrigger,
  LayeredDialogContent,
  LayeredDialogHeader,
  LayeredDialogTitle,
  LayeredDialogDescription,
  LayeredDialogFooter,
  DialogClose as LayeredDialogClose,
}
