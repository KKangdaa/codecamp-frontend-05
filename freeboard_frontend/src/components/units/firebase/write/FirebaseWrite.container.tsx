import { useState, ChangeEvent, useRef } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './FirebaseWrite.presenter'
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  UPLOAD_FILE,
} from './FirebaseWrite.queries'
import { IBoardWriteProps, ITextInput } from './FirebaseWrite.types'
import { Modal } from 'antd'

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const [createWriter, setCreateWriter] = useState('')
  const [writerError, setWriterError] = useState('')

  const [createPassword, setCreatePassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [createTitle, setCreateTitle] = useState('')
  const [titleError, setTitleError] = useState('')

  const [createContents, setCreateContents] = useState('')
  const [contentsError, setContentsError] = useState('')

  const [buttonActive, setButtonActive] = useState(false)

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setCreateWriter(event.target.value)

    if (event.target.value !== '') {
      setWriterError('')
    }

    if (event.target.value && createPassword && createTitle && createContents) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCreatePassword(event.target.value)

    if (event.target.value.length >= 4) {
      setPasswordError('')
    }

    if (createWriter && event.target.value && createTitle && createContents) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(event.target.value)

    if (event.target.value !== '') {
      setTitleError('')
    }

    if (
      createWriter &&
      createPassword &&
      event.target.value &&
      createContents
    ) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCreateContents(event.target.value)

    if (event.target.value !== '') {
      setContentsError('')
    }

    if (createWriter && createPassword && createTitle && event.target.value) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }

  const [youtubeUrl, setYoutubeUrl] = useState('')

  const youtubeUrlText = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value)
  }

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [address, setAddress] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [zipcode, setZipcode] = useState('')

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev)
  }

  const onCompleteDaumPostcode = (data) => {
    setAddress(data.address)
    setZipcode(data.zonecode)
    setIsModalVisible((prev) => !prev)
  }

  const addressDetailText = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value)
  }

  const [uploadFile] = useMutation(UPLOAD_FILE)

  const imgRef = useRef(null)
  const [images, setImages] = useState([])

  const onChangeImgFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const imgUrl = []
    // for (let i = 0; i < event.target.files.length; i++) {
    const file = event.target.files?.[0]
    try {
      const result = await uploadFile({ variables: { file } })
      imgUrl.push(result.data?.uploadFile.url)
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
    // }

    setImages([...images, ...imgUrl])
  }

  const onClickImage = () => {
    imgRef.current?.click()
  }

  const successModal = () => {
    Modal.success({
      content: '게시물이 정상적으로 등록되었습니다.',
    })
  }

  const CreateButton = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: createWriter,
            password: createPassword,
            title: createTitle,
            contents: createContents,
            youtubeUrl,
            images,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      })
      router.push(`/boards/${result.data.createBoard._id}`)
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }

    if (!createTitle) {
      setTitleError('1px solid red')
    }
    if (!createContents) {
      setContentsError('1px solid red')
    }
    if (!createWriter) {
      setWriterError('작성자를 입력하세요')
    }
    if (createPassword.length <= 4 || createPassword.length >= 8) {
      setPasswordError('비밀번호는 4~8자 사이로 입력하세요.')
    }
    if (createWriter && createPassword && createTitle && createContents) {
      successModal()
    }
  }

  const UpdateButton = async () => {
    /*
    if(!createTitle && !createContents) {
      alert('둘중 하나는 입력해야합니다.')
      return
      // early-exit 패턴(패턴을 만들어서 깔끔하고 빠르게 끝내도록 만들기)
    }
     */
    // 리팩토링 (유지보수를 용이하게 사용하는 목적)
    const Variables: ITextInput = {}

    if (createTitle) Variables.title = createTitle
    if (createContents) Variables.contents = createContents
    if (youtubeUrl) Variables.youtubeUrl = youtubeUrl
    if (images) Variables.images = images
    if (zipcode || address || addressDetail) {
      Variables.boardAddress = {}
      if (zipcode) Variables.boardAddress.zipcode = zipcode
      if (address) Variables.boardAddress.address = address
      if (addressDetail) Variables.boardAddress.addressDetail = addressDetail
    }

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardidpage,
          password: createPassword,
          updateBoardInput: Variables,
        },
      })
      successModal()
      router.push(`/boards/${router.query.boardidpage}`)
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }

  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onCompleteDaumPostcode={onCompleteDaumPostcode}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      addressDetailText={addressDetailText}
      isModalVisible={isModalVisible}
      onToggleModal={onToggleModal}
      youtubeUrlText={youtubeUrlText}
      CreateButton={CreateButton}
      buttonActive={buttonActive}
      UpdateButton={UpdateButton}
      successModal={successModal}
      isEdit={props.isEdit}
      data={props.data}
      images={images}
      onChangeImgFile={onChangeImgFile}
      imgRef={imgRef}
      onClickImage={onClickImage}
    />
  )
}
