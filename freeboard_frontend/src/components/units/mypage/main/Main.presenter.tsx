import { withAuth } from '../../../commons/hocs/withAuth'
import * as A from './Main.styles'

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
        {/* <p>마이페이지</p> */}
        <div id="contents">
          <div className="titleArea">
            <h2>MY PAGE</h2>
          </div>

          <div className="w">
            <div>
              <div className="orderstate">
                <div className="title">
                  <h3>
                    ORDER STATUS <span className="desc">최근 3개월</span>
                  </h3>
                </div>
                <div className="state">
                  <ul className="order">
                    <li>
                      <strong>입금전</strong>
                      <span id="orderstate_shppied_before_count">0</span>
                    </li>
                    <li>
                      <strong>배송준비중</strong>
                      <span id="orderstate_shppied_standby_count">0</span>
                    </li>
                    <li>
                      <strong>배송중</strong>
                      <span id="orderstate_shppied_begin_count">0</span>
                    </li>
                    <li>
                      <strong>배송완료</strong>
                      <span id="orderstate_shppied_complate_count">0</span>
                    </li>
                  </ul>
                  <ul className="cs">
                    <li>
                      <strong>취소</strong>
                      <span id="orderstate_order_cancel_count">0</span>
                    </li>
                    <li>
                      <strong>교환</strong>
                      <span id="orderstate_order_exchange_count">0</span>
                    </li>
                    <li>
                      <strong>반품</strong>
                      <span id="orderstate_order_return_count">0</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="asyncbankbook">
                <ul>
                  <li>
                    <strong className="title">총적립금</strong>
                    <strong className="data">
                      <span id="bankbook_total_mileage">
                        {props.userInfo?.userPoint?.amount}
                      </span>
                    </strong>
                  </li>
                  <li>
                    <strong className="title">사용적립금</strong>
                    <strong className="data">
                      <span id="bankbook_used_mileage"></span>
                    </strong>
                  </li>
                  <li>
                    <strong className="title">총주문</strong>
                    <strong className="data">
                      <span id="bankbook_order_price"></span> (
                      <span id="bankbook_order_count"></span>회)
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
            <div id="myshopMain" className="main">
              <ul>
                <li className="shopMain order">
                  <h3>
                    <strong>Order</strong>
                    <span>주문내역 조회</span>
                  </h3>
                  <p>
                    고객님께서 주문하신 상품의
                    <br />
                    주문내역을 확인하실 수 있습니다.
                  </p>
                </li>
                <li className="shopMain profile">
                  <h3>
                    <strong>Profile</strong>
                    <span>회원 정보</span>
                  </h3>
                  <p>
                    회원이신 고객님의
                    <br />
                    개인정보를 관리하는 공간입니다.
                  </p>
                </li>
                <li className="shopMain wishlist">
                  <h3>
                    <strong>Wishlist</strong>
                    <span>관심 상품</span>
                  </h3>
                  <p>
                    관심상품으로 등록하신
                    <br />
                    상품의 목록을 보여드립니다.
                  </p>
                </li>
                <li className="shopMain likeIt displaynone ">
                  <h3>
                    <strong>Like it</strong>
                    <span>좋아요</span>
                  </h3>
                  <p>
                    좋아요를 선택한 상품과
                    <br />
                    상품분류 목록을 보여드립니다.
                  </p>
                </li>
                <li
                  className="shopMain mileage "
                  onClick={() => props.setVisible(true)}
                >
                  <h3 className="txtTitle16B">
                    <strong>Point</strong>
                    <span>적립금</span>
                  </h3>
                  <p className="txtSub11">
                    적립금은 상품 구매 시 사용하실 수 있습니다.
                  </p>
                </li>
                <li className="shopMain board ">
                  <h3>
                    <strong>Board</strong>
                    <span>게시물 관리</span>
                  </h3>
                  <p>
                    고객님께서 작성하신 게시물을
                    <br />
                    관리하는 공간입니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <A.PointModal
          centered
          visible={props.visible}
          onOk={props.onClickPayment}
          onCancel={() => props.setVisible(false)}
          okText="충전하기"
          cancelText="취소하기"
          width={'350px'}
        >
          <select name="price" onChange={props.onChangeAmount}>
            <option selected disabled>
              충전금액을 선택해주세요
            </option>
            <option value="1000">1000 포인트</option>
            <option value="2000">2000 포인트</option>
            <option value="3000">3000 포인트</option>
            <option value="4000">4000 포인트</option>
            <option value="5000">5000 포인트</option>
          </select>
        </A.PointModal>
      </A.MyPageWrapper>
    </>
  )
}

export default withAuth(MainUI)
