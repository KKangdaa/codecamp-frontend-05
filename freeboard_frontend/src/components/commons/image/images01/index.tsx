import { ChangeEvent, useRef } from 'react'
import { gql, useMutation } from '@apollo/client'
import { PlusOutlined } from '@ant-design/icons'
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../../../src/commons/types/generated/types'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
      _id
    }
  }
`

export default function ImagesUploadForProduct(props) {
  console.log(props.index, props.images)
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE)

  const onClickImage = () => {
    fileRef.current?.click()
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    /* const test = checkFileValidation(file)
    if (!test) return */

    try {
      const result = await uploadFile({ variables: { file } })
      props.onChangeFileUrls(result.data?.uploadFile?.url, props.index)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div style={{ marginRight: '20px' }}>
      {props.images ? (
        <div
          style={{
            width: '80px',
            height: '80px',
            overflow: 'hidden',
            textAlign: 'center',
            border: '1px solid #ccc',
            padding: '5px',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            src={`https://storage.googleapis.com/${props.images}`}
            onClick={onClickImage}
          />
        </div>
      ) : (
        <PlusOutlined
          type="button"
          onClick={onClickImage}
          style={{
            width: '80px',
            height: '80px',
            lineHeight: '80px',
            border: '1px solid #ccc',
            background: '#fff',
          }}
        />
      )}
      <input
        style={{ display: 'none' }}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
    </div>
  )
}
