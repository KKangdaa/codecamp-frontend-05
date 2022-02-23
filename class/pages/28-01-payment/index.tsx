import Head from "next/head";
import { useState } from "react";

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);

  const onChangeAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // imp49910675

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // id는 중복되면 안되며, merchant_uid를 뺄 경우 자동으로 랜덤 생성된다
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: 모바일 결제시 돌아갈 주소!!
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 포인트로 만들어 결제하기
          // 백엔드에 결제관련 데이터 넘겨주기
          // => 즉, 뮤테이션 실행하기 (createPointTransactionOfLoading)
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js 최신버전으로 사용해야함 */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액:{" "}
      <input
        type="text"
        placeholder="100원 이상 결제 가능"
        onChange={onChangeAmount}
      />
      <button onClick={onClickPayment}>결제</button>
    </div>
  );
}
