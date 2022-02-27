import { IProductDetailUIProps } from './ProductDetail.types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as A from './ProductDetail.styled'
import ProductCommentWrite from '../../productcomment/write/ProductCommentWrite.container'
import ProductCommentList from '../../productcomment/list/ProductCommentList.container'
import { getPrice } from '../../../../commons/libraries/utils'

export default function ProductDetailUI(props: IProductDetailUIProps) {
  const settings = {
    dots: true,
    className: 'center',
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: true,
    speed: 500,
    arrows: false,
  }
  console.log()

  return (
    <A.DetailWrapper>
      <A.ItemWrapper>
        <A.SlickSlider {...settings}>
          {props.data?.fetchUseditem?.images.map((el) => (
            <A.ImgBox key={el}>
              {el ? (
                <img src={`https://storage.googleapis.com/${el}`} />
              ) : (
                <img src="/images/product-icon.png" />
              )}
            </A.ImgBox>
          ))}
        </A.SlickSlider>

        <A.ItemInformation>
          <div>{props.data?.fetchUseditem?.seller.name}</div>
          <div>{props.data?.fetchUseditem?.name}</div>
          <div>{getPrice(props.data?.fetchUseditem?.price)}원</div>
          <div></div>
          <A.ItemBuy>
            <button>찜하기</button>
            <button>구매하기</button>
          </A.ItemBuy>
        </A.ItemInformation>
      </A.ItemWrapper>
      <A.ItemContents>
        <div>{props.data?.fetchUseditem?.remarks}</div>
        <div>{props.data?.fetchUseditem?.contents}</div>
      </A.ItemContents>

      <A.ItemButtonGroup>
        <button onClick={props.onClickDelete}>삭제</button>
        <button onClick={props.onClickMoveToEdit}>수정</button>
        <button onClick={props.onClickMoveToList}>목록</button>
      </A.ItemButtonGroup>

      <A.Line></A.Line>

      <ProductCommentWrite />
      <ProductCommentList />
    </A.DetailWrapper>
  )
}
