'use client'

import { useState } from 'react'

export default function Counter({ inc, dec, double }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button
        id="inc"
        onClick={async () => {
          const newCount = await inc(count)
          setCount(newCount)
        }}
      >
        +1
      </button>
      {/* <button
        id="dec"
        onClick={async () => {
          const newCount = await dec(count)
          setCount(newCount)
        }}
      >
        -1
      </button> */}
      <button
        id="double"
        onClick={async () => {
          const newCount = await double(count)
          setCount(newCount)
        }}
      >
        *2 (use-server가 적용된 함수가 호출됨)
      </button>
    </div>
  )
}