import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function AddressApp() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompleteDaumPostcode = (data: any) => {
    setAddress(data.address);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달열기</Button>
      {isModalVisible && (
        <Modal
          title="주소검색"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={onCompleteDaumPostcode} />
        </Modal>
      )}
      <div>{address}</div>
    </>
  );
}
