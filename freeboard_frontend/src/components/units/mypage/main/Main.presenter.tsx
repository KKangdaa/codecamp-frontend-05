import { withAuth } from '../../../commons/hocs/withAuth'
import * as A from './Main.styled'

const MainUI = (props) => {
  return (
    <>
      <props.Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </props.Head>
      <A.MyPageWrapper>
        <p>마이페이지</p>
        <A.UserContainer>
          <A.UserImg>
            <img src="/images/logo-icon.png" />
          </A.UserImg>
          <A.UserName>
            <div>
              <span>{props.userData?.fetchUserLoggedIn.name}</span>님
            </div>
            <div>[ {props.userData?.fetchUserLoggedIn.email} ]</div>
            <div>
              {props.pointData?.fetchPointTransactions.amount}안녕하세요
            </div>
            <div>
              {props.pointData?.fetchPointTransactions.balance}안녕하세요
            </div>
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
            <A.PointButton onClick={() => props.setVisible(true)}>
              포인트충전
            </A.PointButton>
            <A.PointModal
              centered
              visible={props.visible}
              onOk={props.onClickPayment}
              onCancel={() => props.setVisible(false)}
              width={'500px'}
            >
              <input type="text" onChange={props.onChangeAmount} />
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

export default withAuth(MainUI)
