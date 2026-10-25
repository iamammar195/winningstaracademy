import { Root } from "@radix-ui/react-label"
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react"

import { cn } from "@/lib/utils"

const Label = forwardRef<
  ComponentRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
))
Label.displayName = Root.displayName

export { Label }
