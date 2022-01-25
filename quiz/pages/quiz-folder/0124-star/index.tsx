import { Rate } from 'antd'
import { useState } from 'react'

export default function CountStar () {
  const [starValue, setStarValue] = useState(2.5)
  const handleChange = (value:any) => {
    setStarValue(value)
  }

  return <Rate allowHalf defaultValue={starValue} onChange={handleChange} />
}
