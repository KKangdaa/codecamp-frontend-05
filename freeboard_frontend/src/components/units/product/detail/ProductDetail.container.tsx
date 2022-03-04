import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ProductDetailUI from './ProductDetail.presenter'
// import { Modal } from 'antd'
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
} from './ProductDetail.queries'

export default function ProductDetail() {
  const router = useRouter()

  const { data: itemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productid },
  })
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN)
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM)
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  )

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.productid },
      })
      alert('성공')
      router.push('/product')
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

  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleButton = () => {
    setIsModalVisible((prev) => !prev)
  }

  const onClickUsePoint = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.productid },
      })
      router.push(`/product`)
      // Modal.success( content: data?.createPointTransactionOfBuyingAndSelling.name )s
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ProductDetailUI
      lat={itemData?.fetchUseditem?.useditemAddress?.lat}
      lng={itemData?.fetchUseditem?.useditemAddress?.lng}
      address={itemData?.fetchUseditem?.useditemAddress?.address}
      itemData={itemData}
      userData={userData}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      isModalVisible={isModalVisible}
      toggleButton={toggleButton}
      onClickUsePoint={onClickUsePoint}
    />
  )
}
