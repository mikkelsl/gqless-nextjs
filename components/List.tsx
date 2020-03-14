import React from 'react'

type Props = {
  height?: number
  children: React.ReactNode
}

export default function List({ height, children }: Props) {
  return <div style={{ height, margin: '15px 0px' }}>{children}</div>
}
