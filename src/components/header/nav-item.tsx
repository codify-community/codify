import { Button } from "../ui/button";
import { motion } from "motion/react";

interface MenuItemProps  {
    title: string
    isSelected: boolean
    navigationFunction: () => void
}

export function NavItem({ title, isSelected = false, navigationFunction }: MenuItemProps) {
    return (
        <Button
          className="relative cursor-pointer"
          variant="ghost"
          onClick={() => navigationFunction()}
        >
          {title}
          {isSelected && (
            <motion.div
              layoutId="activeItem"
              className="absolute left-0 right-0 h-full rounded-md border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
            >
            </motion.div>
          )}
        </Button>
    )
}
