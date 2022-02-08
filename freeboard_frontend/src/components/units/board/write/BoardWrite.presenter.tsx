/* eslint-disable react/react-in-jsx-scope */
import DaumPostcode from 'react-daum-postcode'
import { Modal } from 'antd'
import * as A from './BoardWrite.styled'
import { IBoardWriteUIProps } from './BoardWrite.types'

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  // console.log(props.data)

  return (
    <A.Wrapper>
      <A.Main>
        <A.Title>{props.isEdit ? '게시글 수정' : '게시글 등록'}</A.Title>

        <A.MainTitleBox
          type="text"
          placeholder="제목"
          style={{ border: props.titleError }}
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard?.title}
        />
        <A.Line></A.Line>
        <A.MainTextBox
          placeholder="내용을 작성해주세요"
          style={{ border: props.contentsError }}
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard?.contents}
        />

        <A.MainAddImg>
          <A.MainInnerTitle>사진첨부</A.MainInnerTitle>
          <A.AddImgs>
            <A.ImgsUp>
              +<br />
              Upload
            </A.ImgsUp>
            <A.ImgsUp>
              +<br />
              Upload
            </A.ImgsUp>
            <A.ImgsUp>
              +<br />
              Upload
            </A.ImgsUp>
          </A.AddImgs>
        </A.MainAddImg>

        <A.MainWriter>
          <A.MainInnerTitle>작성자</A.MainInnerTitle>
          <A.MainInnerBox>
            <A.InnerBoxInput
              type="text"
              placeholder="이름을 입력해주십시오"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard?.writer}
              readOnly={!!props.data?.fetchBoard?.writer}
              // !!이중부정 연산자 (true)
            />
            <A.ErrorRed>{props.writerError}</A.ErrorRed>
          </A.MainInnerBox>
        </A.MainWriter>

        <A.MainPasssword>
          <A.MainInnerTitle>비밀번호</A.MainInnerTitle>
          <A.MainInnerBox>
            <A.InnerBoxInput
              type="password"
              placeholder="비밀번호를 입력해주십시오"
              onChange={props.onChangePassword}
            />
            <A.ErrorRed>{props.passwordError}</A.ErrorRed>
          </A.MainInnerBox>
        </A.MainPasssword>

        <A.MainAddress>
          <A.MainInnerTitle>주소</A.MainInnerTitle>
          <A.Gruop>
            <A.AddressText>
              <A.TextNum
                type="text"
                placeholder="07250"
                value={
                  props.zipcode
                    ? props.zipcode
                    : props.data?.fetchBoard?.boardAddress?.zipcode
                }
                readOnly
              />
              <A.TextButton onClick={props.onToggleModal}>
                우편번호 검색
              </A.TextButton>
              {props.isModalVisible && (
                <Modal
                  title="주소검색"
                  visible={true}
                  onOk={props.onToggleModal}
                  onCancel={props.onToggleModal}
                >
                  <DaumPostcode onComplete={props.onCompleteDaumPostcode} />
                </Modal>
              )}
            </A.AddressText>
            <A.AddressInputBox>
              <A.BoxText
                type="text"
                // onChange={props.address}
                value={
                  props.address
                    ? props.address
                    : props.data?.fetchBoard?.boardAddress?.address
                }
                readOnly
              />
              <A.BoxText
                type="text"
                placeholder="상세주소 입력"
                onChange={props.addressDetailText}
                value={
                  props.addressDetail
                    ? props.addressDetail
                    : props.data?.fetchBoard?.boardAddress?.addressDetail
                }
              />
            </A.AddressInputBox>
          </A.Gruop>
        </A.MainAddress>

        <A.MainURL>
          <A.MainInnerTitle>유튜브</A.MainInnerTitle>
          <A.InnerBoxInput
            type="url"
            placeholder="링크를 복사해주세요"
            onChange={props.youtubeUrlText}
            defaultValue={props.data?.fetchBoard?.youtubeUrl}
          />
        </A.MainURL>

        <A.MainType>
          <A.MainInnerTitle>메인 설정</A.MainInnerTitle>
          <A.TypeInput>
            <A.InputRadio type="radio" name="setting" checked />
            <A.InputText>유튜브</A.InputText>
            <A.InputRadio type="radio" name="setting" />
            <A.InputText>사진</A.InputText>
          </A.TypeInput>
        </A.MainType>

        <A.RegisBtn
          onClick={props.isEdit ? props.UpdateButton : props.CreateButton}
          buttonActive={props.isEdit ? true : props.buttonActive}
        >
          {props.isEdit ? '수정' : '등록'}
        </A.RegisBtn>
      </A.Main>
    </A.Wrapper>
  )
}
