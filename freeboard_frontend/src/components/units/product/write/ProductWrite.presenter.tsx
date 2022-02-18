import Button01 from '../../../commons/buttons/01'
import Input01 from '../../../commons/inputs/01'
import * as A from './ProductWrite.styled'
import { withAuth } from '../../../commons/hocs/withAuth'
import { IProductNewUIProps } from './ProductWrite.types'

// export default function ProductNewUI(props: IProductNewUIProps) {
const ProductNewUI = (props: IProductNewUIProps) => {
  return (
    <A.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        상품명 :
        <Input01
          type="text"
          register={props.register('name')}
          maxLength={100}
          defaultValue={props.data?.fetchUseditem.name}
        />
        {props.formState.errors.name?.message}
        상품설명 :
        <Input01
          type="text"
          register={props.register('contents')}
          maxLength={1000}
          defaultValue={props.data?.fetchUseditem.contents}
        />
        {props.formState.errors.contents?.message}
        상품가격 :
        <Input01
          type="text"
          register={props.register('price')}
          maxLength={100000}
          defaultValue={props.data?.fetchUseditem.price}
        />
        {props.formState.errors.price?.message}
        비고 :
        <Input01
          type="text"
          register={props.register('remarks')}
          maxLength={100000}
          defaultValue={props.data?.fetchUseditem.remarks}
        />
        {props.formState.errors.remarks?.message}
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
