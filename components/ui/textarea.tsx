import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-purple-500/30 bg-slate-900/80 px-4 py-3 text-base text-gray-100 ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:border-purple-400 focus-visible:shadow-[0_0_20px_rgba(139,92,246,0.2)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 backdrop-blur-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
