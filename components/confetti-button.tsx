"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  confettiColors?: string[]
}

interface Confetti {
  id: number
  x: number
  y: number
  size: number
  color: string
  rotation: number
  xVelocity: number
  yVelocity: number
}

export function ConfettiButton({
  className,
  variant = "default",
  size = "default",
  children,
  confettiColors = ["#FF5252", "#FFD740", "#40C4FF", "#69F0AE", "#FF4081"],
  ...props
}: ConfettiButtonProps) {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    if (confetti.length > 0) {
      const timer = setTimeout(() => {
        setConfetti([])
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [confetti])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get button dimensions and position
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()

    // Create confetti pieces
    const newConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.width / 2,
      y: rect.height / 2,
      size: Math.random() * 8 + 4,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      rotation: Math.random() * 360,
      xVelocity: (Math.random() - 0.5) * 10,
      yVelocity: (Math.random() - 0.5) * 10 - 3,
    }))

    setConfetti(newConfetti)

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

      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((piece) => (
          <span
            key={piece.id}
            className="absolute animate-confetti"
            style={
              {
                left: `${piece.x}px`,
                top: `${piece.y}px`,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                transform: `rotate(${piece.rotation}deg)`,
                "--x-velocity": `${piece.xVelocity}px`,
                "--y-velocity": `${piece.yVelocity}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </Button>
  )
}

