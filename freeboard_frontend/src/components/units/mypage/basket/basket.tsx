import { useContext } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import { v4 as uuidv4 } from 'uuid'

export default function Basket() {
  const { baskets } = useContext(GlobalContext)

  return (
    <>
      {baskets.map((el) => (
        <div key={uuidv4()}>
          <div>{el.name}</div>
          <div>{el.remarks}</div>
          <div>{el.price}</div>
        </div>
      ))}
    </>
  )
}
