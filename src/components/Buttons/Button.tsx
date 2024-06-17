'use client'
import React from 'react'
import { LoaderCircle } from 'lucide-react'

type Props = {
  children: React.ReactNode
  variant:
    | 'primaryBlue'
    | 'primaryYellow'
    | 'primaryPink'
    | 'secondary'
    | 'outlinedWhite'
    | 'outlinedBlack'
  color?: string
  disabled?: boolean
  onClick?: any
  type?: 'button' | 'submit' | 'reset'
  full?: boolean
  isLoading?: boolean
}

export function Button({
  children,
  variant = 'primaryBlue',
  disabled = false,
  onClick,
  type = 'button',
  full = false,
  isLoading = false,
}: Props) {
  const primaryBlue = 'bg-brand-blue-800 text-white'
  const primaryYellow = 'bg-brand-yellow-600 text-white'
  const primaryPink = 'bg-brand-pink text-white'
  const outlinedWhite = 'bg-transparent border border-white text-white'
  const outlinedBlack = 'bg-transparent border border-black text-black'

  return (
    <button
      className={`poppins-semibold flex items-center justify-center gap-2 rounded p-3 text-sm transition-all hover:opacity-75 disabled:opacity-50 ${variant === 'primaryBlue' && primaryBlue} ${variant === 'primaryYellow' && primaryYellow} ${variant === 'primaryPink' && primaryPink} ${variant === 'outlinedWhite' && outlinedWhite} ${variant === 'outlinedBlack' && outlinedBlack} ${full ? 'w-full' : 'w-[240px]'} `}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={{
        whiteSpace: 'nowrap',
      }}
    >
      {isLoading ? (
        <LoaderCircle className="mx-4 size-5 animate-spin" />
      ) : (
        children
      )}
    </button>
  )
}
