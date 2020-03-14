import React from 'react'

type Props = {
  disabled?: boolean
  onClick: (event: any) => void
  children: React.ReactNode
}

export default function Button({ disabled, onClick, children }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: '15px 20px',
        borderRadius: 50,
        border: 0,
        outline: 0
      }}
    >
      {children}
    </button>
  )
}
