import { useRouter } from 'next/router'
import DynamicRoutingUI from './DynamicRouting.presenter'

export default function DynamicRouting(props) {


  const router = useRouter()


  const onClickMove1 = () => {

    const result = createProduct
    console.log(result)


    router.push("/05-06-dynamic-routed-board/1")
  }
  const onClickMove2 = () => {
    router.push("/05-06-dynamic-routed-board/2")
  }
  const onClickMove3 = () => {
    router.push("/05-06-dynamic-routed-board/3")
  }
  const onClickMove100 = () => {
    router.push("/05-06-dynamic-routed-board/100")
  }


  return(
    <DynamicRoutingUI
      onClickMove1={onClickMove1}
      onClickMove2={onClickMove2}
      onClickMove3={onClickMove3}
      onClickMove100={onClickMove100}
      router={router}
    />
  )

}