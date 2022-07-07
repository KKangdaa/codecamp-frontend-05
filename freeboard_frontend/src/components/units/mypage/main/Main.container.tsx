import { useMutation } from '@apollo/client'
import { useContext, useState } from 'react'
import { Modal, message } from 'antd'
import Head from 'next/head'
import { CREATE_POINT_TRANSACTION_OF_LOADING } from './Main.queries'
import MainUI from './Main.presenter'
import { GlobalContext } from '../../../../../pages/_app'

export default function Main() {
  const { userInfo } = useContext(GlobalContext)

  const [amount, setAmount] = useState(0)
  const [visible, setVisible] = useState(false)

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
        buyer_email: userInfo?.email,
        buyer_name: userInfo?.name,
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // console.log(rsp.imp_uid)
          point(rsp)

          message.success('결제가 완료되었습니다')
        } else {
          alert('결제 실패하였습니다.')
        }
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
      window.location.reload()
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }

  return (
    <MainUI
      Head={Head}
      userInfo={userInfo}
      visible={visible}
      setVisible={setVisible}
      onClickPayment={onClickPayment}
      onChangeAmount={onChangeAmount}
    />
  )
}
