import { Modal } from 'antd';

export default function ModalAlertPage () {

  const onClickSuccessButton = () => {
    Modal.success({
      content: '게시물 등록에 성공했음'
    })
  }
  const onClickFailButton = () => {
    Modal.error({
      content: '비밀번호가 틀림'
    })
  }

  return (
    <>
      <button onClick={onClickSuccessButton}>알림창(성공!!!)</button>
      <button onClick={onClickFailButton}>알림창(실패...)</button>
    </>
  )
}