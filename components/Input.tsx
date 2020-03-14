import React from 'react'

type Props = {
  placeholder?: string
  type?: string
  value: string | number
  onChange: (event: any) => void
}

export default function Input({ placeholder, type, value, onChange }: Props) {
  function handleChange(event) {
    const value = event.target.value
    if (type === 'number') {
      onChange(parseInt(value, 10))
    } else {
      onChange(value)
    }
  }
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      style={{
        backgroundColor: 'white',
        padding: '15px 20px',
        borderRadius: 50,
        border: 0,
        outline: 0
      }}
    />
  )
}
