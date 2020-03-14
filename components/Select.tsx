import React from 'react'

type Props = {
  type?: string
  value: string | number
  onChange: (event: any) => void
  children: React.ReactNode
}

export default function Select({ type, value, onChange, children }: Props) {
  function handleChange(event) {
    const value = event.target.value
    if (type === 'number') {
      onChange(parseInt(value, 10))
    } else {
      onChange(value)
    }
  }
  return (
    <select
      value={value}
      onChange={handleChange}
      style={{
        padding: '15px 20px',
        margin: '0px 15px',
        borderRadius: 50,
        border: 0,
        outline: 0
      }}
    >
      {children}
    </select>
  )
}
