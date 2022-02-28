// import { UPLOAD_FILE } from './imageUploadForProduct.queries'
// import { checkFileValidation } from '../libraries/utils'
import { ChangeEvent, useRef } from 'react'
import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../../../src/commons/types/generated/types'
// import { BsJournalCheck } from 'react-icons/bs'

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
    <div>
      {props.images ? (
        <img
          src={`https://storage.googleapis.com/${props.images}`}
          onClick={onClickImage}
        />
      ) : (
        <button type="button" onClick={onClickImage}>
          <>+</>
        </button>
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
