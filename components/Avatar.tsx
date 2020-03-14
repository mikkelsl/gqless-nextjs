import React from 'react'

type Props = {
  size: number
  source: string
}

export default function Avatar({ size, source }: Props) {
  return (
    <img
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        marginRight: 15
      }}
      src={source}
    />
  )
}
