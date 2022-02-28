import Button01 from '../../../commons/buttons/01'
import Input01 from '../../../commons/inputs/01'
import * as A from './ProductWrite.styled'
import { withAuth } from '../../../commons/hocs/withAuth'
import { IProductNewUIProps } from './ProductWrite.types'
// import { useState } from 'react'
import { EditorProps } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import ImagesUploadForProduct from '../../../commons/image/images01'
import styled from '@emotion/styled'

const MyBlock = styled.div`
  .wrapper-class {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

// export default function ProductNewUI(props: IProductNewUIProps) {
const ProductNewUI = (props: IProductNewUIProps) => {
  return (
    <A.Wrapper>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickEditSubmit)
            : props.handleSubmit(props.onClickSubmit)
        }
      >
        상품명 :
        <Input01
          type="text"
          register={props.register('name')}
          maxLength={100}
          defaultValue={props.isEdit ? props.data?.fetchUseditem?.name : ''}
        />
        {props.formState?.errors?.name?.message}
        <br />
        상품설명 :
        {/* <textarea
          {...props.register('contents')}
          maxLength={1000}
          defaultValue={props.data?.fetchUseditem.contents}
        /> */}
        {/* {console.log(props.onEditorStateChange.contents)} */}
        <MyBlock>
          <Editor
            editorState={props.editorState}
            toolbarClassName="toolbar-class"
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            onEditorStateChange={props.onEditorStateChange}
            placeholder="내용을 작성해주세요."
            localization={{
              locale: 'ko',
            }}
            toolbar={{
              options: [
                'inline',
                'blockType',
                'fontSize',
                'fontFamily',
                'list',
                'textAlign',
                'colorPicker',
                'link',
                'embedded',
                'emoji',
                'image',
                'history',
              ],
              /* inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: {
                        urlEnabled: true,
                        uploadEnabled: true,
                        uploadCallback: this.uploadImageCallBack,
                        previewImage: true,
                        alt: { present: false, mandatory: false }
                    },  */
            }}
            // {...props.register('contents')}
            // defaultValue={props.isEdit && editorState}
          />
          {/* {console.log(
          'editorState => ',
          draftToHtml(convertToRaw(editorState.getCurrentContent()))
        )} */}
        </MyBlock>
        {props.formState.errors.contents?.message}
        <br />
        상품가격 :
        <Input01
          type="text"
          register={props.register('price')}
          maxLength={100000}
          // defaultValue={props.isEdit ? props.data?.fetchUseditem.price : ''}
          // isEdit={props.isEdit}
        />
        {props.formState.errors.price?.message}
        <br />
        비고 :
        <Input01
          type="text"
          register={props.register('remarks')}
          maxLength={100000}
          // defaultValue={props.isEdit ? props.data?.fetchUseditem.remarks : ''}
          // defaultValue="aaa" // isEdit={props.isEdit}
        />
        {props.formState.errors.remarks?.message}
        <br />
        {props.isEdit
          ? props.data?.fetchUseditem?.images?.map((el, index) => (
              <ImagesUploadForProduct
                data={props.data}
                images={el}
                index={index}
                key={el._id}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))
          : props.images?.map((el, index) => (
              <ImagesUploadForProduct
                data={props.data}
                images={el}
                index={index}
                key={el._id}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
        {/* <Input01 type="text" register={register('seller')} maxLength={5} />
        {formState.errors.seller?.message} */}
        <Button01
          name={props.isEdit ? '수정' : '등록'}
          isValid={props.formState.isValid}
        ></Button01>
      </form>
    </A.Wrapper>
  )
}

export default withAuth(ProductNewUI)
