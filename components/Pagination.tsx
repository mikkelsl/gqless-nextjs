import React from 'react'
import Button from './Button'

type Props = {
  page: number
  pages: number
  onPrevious?: () => void
  onNext?: () => void
}

export default function Pagination({ page, pages, onPrevious, onNext }: Props) {
  return (
    <div
      style={{
        display: 'inline-block',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 40
      }}
    >
      <Button disabled={!page || page === 1} onClick={onPrevious}>
        {'<'}
      </Button>
      <span
        style={{
          color: 'white',
          width: 175,
          display: 'inline-block',
          textAlign: 'center'
        }}
      >
        Page {page} of {pages}
      </span>
      <Button disabled={!page || !pages || page === pages} onClick={onNext}>
        {'>'}
      </Button>
    </div>
  )
}
