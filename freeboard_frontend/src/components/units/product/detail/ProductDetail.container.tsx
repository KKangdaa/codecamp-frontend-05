import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProductDetailUI from './ProductDetail.presenter'
import { Modal, message } from 'antd'
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEM_I_PICKED,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USED_ITEM_PICK,
} from './ProductDetail.queries'

export default function ProductDetail() {
  const router = useRouter()

  const { data: itemData, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productid },
  })
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN)
  const { data: pickData } = useQuery(FETCH_USED_ITEM_I_PICKED, {
    variables: { search: '', page: 1 },
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
    setIsModalOpen((prev) => !prev)
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
      console.log(error.message)
    }
  }
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.productid },
      })
      refetch()
      setHeart((prev) => !prev)
    } catch (error) {
      console.log(error.message)
    }
  }

  const onClickMoveToEdit = () => {
    router.push(`/product/${router.query.productid}/edit`)
  }
  const onClickMoveToList = () => {
    router.push('/product')
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

  return (
    <ProductDetailUI
      address={itemData?.fetchUseditem?.useditemAddress?.address}
      itemData={itemData}
      userData={userData}
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
    />
  )
}
