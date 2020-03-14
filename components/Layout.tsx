import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div
      style={{
        height: '100%',
        padding: 25,
        backgroundColor: '#222'
      }}
    >
      {children}
    </div>
  )
}
