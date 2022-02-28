import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { Modal } from 'antd'
import Head from 'next/head'

import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_POINT_TRANSACTIONS,
} from './Main.queries'
import MainUI from './Main.presenter'

export default function Main() {
  const [amount, setAmount] = useState(0)
  const [visible, setVisible] = useState(false)

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN)
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1 },
  })
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)

  const onChangeAmount = (e) => {
    setAmount(Number(e.target.value))
  }

  const onClickPayment = async () => {
    const IMP = window.IMP
    IMP.init('imp49910675')
    setVisible(false)
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        name: '(주)강낭콩',
        amount: amount,
        buyer_email: userData?.fetchUserLoggedIn.email,
        buyer_name: userData?.fetchUserLoggedIn.name,
        /* buyer_tel: '010-1111-2222',
        buyer_addr: '서울특별시 구로구 디지털로 300',
        buyer_postcode: '08379', */
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // console.log(rsp.imp_uid)
          point(rsp)
        } /* else {
          
        } */
      }
    )
  }

  const point = async (rsp) => {
    console.log(rsp.imp_uid)
    try {
      await createPoint({
        variables: {
          impUid: rsp.imp_uid,
        },
      })
      alert('성공')
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }
  /* console.log(pointData?.fetchPointTransactions.balance)
  console.log(pointData?.fetchPointTransactions.amount)
  console.log(pointData?.fetchPointTransactions.status)
  console.log(pointData?.fetchPointTransactions._id) */

  return (
    <MainUI
      Head={Head}
      userData={userData}
      pointData={pointData}
      visible={visible}
      setVisible={setVisible}
      onClickPayment={onClickPayment}
      onChangeAmount={onChangeAmount}
    />
  )
}
