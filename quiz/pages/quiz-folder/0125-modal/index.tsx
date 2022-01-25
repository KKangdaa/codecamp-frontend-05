import { Modal, Button, Space } from "antd";

export default function warning() {
  const SuccessModal = () => {
    Modal.success({
      content: "게시물이 등록되었습니다.",
    });
  };
  return <Button onClick={SuccessModal}>모달열기</Button>;
}
