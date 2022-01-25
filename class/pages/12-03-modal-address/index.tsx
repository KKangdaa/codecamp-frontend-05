import { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function ModalCustomPage () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setAddress] = useState("")
  const [, setZonecode] = useState("")

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
    // console.log(data)
    setAddress(data.address)
    setZonecode(data.zonecode)
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>우편번호 검색</Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcode onComplete={onCompleteDaumPostcode} />
      </Modal>
    </>
  );
};

