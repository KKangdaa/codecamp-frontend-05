import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import DynamicRoutedUI from './DynamicRouted.presenter'
import { FETCH_BOARD } from './DynamicRouted.queries'

export default function DynamicRouted() {

  const router = useRouter()

  const {data} = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.aaa) }

  }) 

  console.log(data) 


  return(
    <DynamicRoutedUI 
    data={data}
    router={router}
    />
  )

}