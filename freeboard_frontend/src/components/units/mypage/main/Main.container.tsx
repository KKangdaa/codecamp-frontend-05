import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { Modal } from 'antd'
import * as A from './Main.styled'
import Head from 'next/head'
import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_POINT_TRANSACTIONS,
} from './Main.queries'

export default function Main() {
  const [amount, setAmount] = useState(0)

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN)
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS)
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)

  const [visible, setVisible] = useState(false)

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
      console.log('성공')
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }
  console.log(pointData?.fetchPointTransactions.balance)

  console.log(pointData?.fetchPointTransactions.amount)
  console.log(pointData?.fetchPointTransactions.status)
  console.log(pointData?.fetchPointTransactions._id)

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <A.MyPageWrapper>
        <p>마이페이지</p>
        <A.UserContainer>
          <A.UserImg>
            <img src="/images/logo-icon.png" />
          </A.UserImg>
          <A.UserName>
            <div>
              <span>{userData?.fetchUserLoggedIn.name}</span>님
            </div>
            <div>[ {userData?.fetchUserLoggedIn.email} ]</div>
          </A.UserName>
          <A.BookScrap>
            <A.BookList />
            <div>스크랩</div>
          </A.BookScrap>
          <A.UserOrder>
            <div>주문정보</div>
            <div>구매 내역</div>
            <div>판매 내역</div>
          </A.UserOrder>
          <A.UserPoint>
            {/* <div>전체 주문 내역</div> */}
            <A.PointButton onClick={() => setVisible(true)}>
              포인트충전
            </A.PointButton>
            <A.PointModal
              // title="Modal 1000px width"
              // centered
              visible={visible}
              onOk={onClickPayment}
              onCancel={() => setVisible(false)}
              width={'500px'}
            >
              <input type="text" onChange={onChangeAmount} />
              {/* <select name="price" onChange={onChangeAmount}>
                <option value="1000">1000 point</option>
                <option value="2000">2000 point</option>
                <option value="3000">3000 point</option>
                <option value="4000">4000 point</option>
                <option value="5000">5000 point</option>
              </select> */}
            </A.PointModal>
          </A.UserPoint>
        </A.UserContainer>
      </A.MyPageWrapper>
    </>
  )
}
