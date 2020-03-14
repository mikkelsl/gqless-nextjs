import React from 'react'

type Props = {
  display?: string
  flex?: number
  children?: React.ReactNode
}

export default function Box({ display, flex, children }: Props) {
  return <div style={{ display, flex }}>{children}</div>
}
