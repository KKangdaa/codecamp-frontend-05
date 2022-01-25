import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setAddress] = useState("");
  const [, setZonecode] = useState("");
  /* 
  const showModal = () => {
    setIsModalVisible(prev => !prev);
  };

  const handleOk = () => {
    setIsModalVisible(prev => !prev);
  };

  const handleCancel = () => {
    setIsModalVisible(prev => !prev);
  };
 */
  const onTogglemodal = () => {
    setIsModalVisible((prev) => !prev);
  };
  // 리팩토링 => 파라미터 값이 동일하기 때문에 여러 코드를 사용하지 않고 하나의 값으로 변경해서 사용가능
  // (prev => !prev) => 잘 이해안됨...;;

  const onCompleteDaumPostcode = (data: any) => {
    // console.log(data)
    setAddress(data.address);
    setZonecode(data.zonecode);
    onTogglemodal();
  };

  return (
    <>
      {" "}
      {/* fragment : 비어있는 태그..? */}
      <Button onClick={onTogglemodal}>우편번호 검색</Button>
      {isModalVisible && (
        <Modal visible={true} onOk={onTogglemodal} onCancel={onTogglemodal}>
          <DaumPostcode onComplete={onCompleteDaumPostcode} />
        </Modal>
        // 취소 또는 확인 버튼을 눌렀을 때 모달 내용이 초기화 됨
      )}
    </>
  );
}
