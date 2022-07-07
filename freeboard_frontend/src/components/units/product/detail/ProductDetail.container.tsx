import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import ProductDetailUI from './ProductDetail.presenter'
import { Modal, message } from 'antd'
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEM_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
} from './ProductDetail.queries'
import { GlobalContext } from '../../../../../pages/_app'

export default function ProductDetail() {
  const router = useRouter()
  const { setBaskets, userInfo } = useContext(GlobalContext)

  const { data: itemData, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productid },
  })
  const { data: pickData } = useQuery(FETCH_USED_ITEM_I_PICKED, {
    variables: { search: '' },
  })

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK)
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM)
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  )

  const [heart, setHeart] = useState(false)
  const [isModal, setIsModalOpen] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleButton = () => {
    setIsModalVisible((prev) => !prev)
  }
  const toggleButton2 = () => {
    setIsModalOpen((prev) => !prev)
  }

  const onClickDelete = async () => {
    setIsModalVisible((prev) => !prev)

    try {
      await deleteUseditem({
        variables: { useditemId: router.query.productid },
      })
      router.push('/product')
      message.success({ content: '삭제되었습니다.' })
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.productid },
      })
      if (heart === false) {
        setHeart(true)
      } else {
        setHeart(false)
      }

      refetch()
    } catch (error) {
      console.log(error.message)
    }
  }

  const onClickBasket = () => {
    const item = JSON.parse(localStorage.getItem('basket') || '[]')
    const temp = item.filter(
      (filterEl) => filterEl._id !== itemData?.fetchUseditem._id
    )

    const { __typename, ...plus } = itemData?.fetchUseditem
    temp.push(plus)
    localStorage.setItem('basket', JSON.stringify(temp))
    setBaskets(temp)
    // message.success('장바구니에 추가되었습니다.')
  }

  const onClickUsePoint = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.productid },
      })
      Modal.success({ content: '구매가 완료 되었습니다.' })
      router.push(`/product`)
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickMoveToEdit = () => {
    router.push(`/product/${router.query.productid}/edit`)
  }
  const onClickMoveToList = () => {
    router.push('/product')
  }

  const result = pickData?.fetchUseditemsIPicked
    .map((el) => el._id)
    .filter((filterEl) => filterEl === itemData?.fetchUseditem._id)
    .join('')

  useEffect(() => {
    if (result === itemData?.fetchUseditem._id) {
      setHeart(true)
    } else {
      setHeart(false)
    }
  }, [pickData])

  return (
    <ProductDetailUI
      address={itemData?.fetchUseditem?.useditemAddress?.address}
      itemData={itemData}
      userInfo={userInfo}
      pickData={pickData}
      isModal={isModal}
      heart={heart}
      onClickPick={onClickPick}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      isModalVisible={isModalVisible}
      toggleButton={toggleButton}
      toggleButton2={toggleButton2}
      onClickUsePoint={onClickUsePoint}
      onClickBasket={onClickBasket}
    />
  )
}
