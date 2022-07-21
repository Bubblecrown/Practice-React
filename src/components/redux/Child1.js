import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
export default function Child1() {
  const appReducer = useSelector(({appReducer})=>appReducer)
  return (
    <div>child1: {appReducer.count}</div>
  )
}
