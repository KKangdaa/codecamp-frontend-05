import { DatePicker, Space } from 'antd'
import { useState } from 'react'

export default function CalendarChange () {

  const [date, setDate] = useState('')

  function onChange (date, dateString) {
    setDate(dateString)
  }
  
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <div>{date}</div>
    </Space>
  )
}
