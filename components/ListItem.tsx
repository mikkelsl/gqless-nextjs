import React from 'react'

type Props = {
  height?: number
  children: React.ReactNode
}

export default function ListItem({ height, children }: Props) {
  return (
    <div
      style={{
        height,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {children}
    </div>
  )
}
