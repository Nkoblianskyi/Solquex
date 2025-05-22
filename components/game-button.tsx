"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import GameDisclaimerModal from "./game-disclaimer-modal"
import type { ButtonProps } from "@/components/ui/button"

interface GameButtonProps extends ButtonProps {
  children: React.ReactNode
}

export default function GameButton({ children, ...props }: GameButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("game-disclaimer-accepted")

    if (hasAccepted === "true") {
      // If already accepted, redirect directly
      window.location.href = "/game"
    } else {
      // Otherwise show the modal
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <Button {...props} onClick={handleClick}>
        {children}
      </Button>

      <GameDisclaimerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
