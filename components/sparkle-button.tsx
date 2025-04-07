"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SparkleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  sparkleColor?: string
}

export function SparkleButton({
  className,
  variant = "default",
  size = "default",
  children,
  sparkleColor = "rgba(255, 255, 255, 0.8)",
  ...props
}: SparkleButtonProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get button dimensions and position
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()

    // Create 8 sparkles at random positions
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      size: Math.random() * 6 + 2, // Random size between 2-8px
    }))

    setSparkles(newSparkles)

    // Remove sparkles after animation
    setTimeout(() => {
      setSparkles([])
    }, 700)

    // Call the original onClick if provided
    props.onClick?.(e)
  }

  return (
    <Button
      className={cn("relative overflow-hidden", className)}
      variant={variant}
      size={size}
      {...props}
      onClick={handleClick}
    >
      {children}

      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute pointer-events-none animate-sparkle-fade"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkleColor,
            borderRadius: "50%",
          }}
        />
      ))}
    </Button>
  )
}

