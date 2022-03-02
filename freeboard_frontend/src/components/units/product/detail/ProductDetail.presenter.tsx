import ProductCommentWrite from '../../productcomment/write/ProductCommentWrite.container'
import ProductCommentList from '../../productcomment/list/ProductCommentList.container'
import { IProductDetailUIProps } from './ProductDetail.types'
import { getPrice } from '../../../../commons/libraries/utils'
import * as A from './ProductDetail.styled'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Modal } from 'antd'

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

  return (
    <A.DetailWrapper>
      <A.ItemWrapper>
        <A.SlickSlider {...settings}>
          {props.itemData?.fetchUseditem?.images.map((el) => (
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
          <div>{props.itemData?.fetchUseditem?.seller.name}</div>
          <div>{props.itemData?.fetchUseditem?.name}</div>
          <div>{getPrice(props.itemData?.fetchUseditem?.price)}원</div>
          <div></div>
          <A.ItemBuy>
            <button>찜하기</button>
            <button onClick={props.toggleButton}>구매하기</button>
          </A.ItemBuy>
          {props.isModalVisible && (
            <Modal
              visible={true}
              onOk={props.onClickUsePoint}
              onCancel={props.toggleButton}
            >
              구매하시겠습니까?
            </Modal>
          )}
        </A.ItemInformation>
      </A.ItemWrapper>
      <A.ItemContents>
        <div>{props.itemData?.fetchUseditem?.remarks}</div>
        {props.itemData?.fetchUseditem?.contents && (
          <A.IntroduceContent
            dangerouslySetInnerHTML={{
              __html: props.itemData?.fetchUseditem?.contents,
            }}
          />
        )}
        <A.Line></A.Line>
        <div>
          <div>{props.itemData?.fetchUseditem?.useditemAddress.zipcode}</div>
          <div>{props.itemData?.fetchUseditem?.useditemAddress.address}</div>
          <div>
            {props.itemData?.fetchUseditem?.useditemAddress.addressDetail}
          </div>
        </div>
      </A.ItemContents>

      <A.Line></A.Line>

      <A.ItemButtonGroup>
        {props.userData?.fetchUserLoggedIn && (
          <>
            <button onClick={props.onClickDelete}>삭제</button>
            <button onClick={props.onClickMoveToEdit}>수정</button>
          </>
        )}

        <button onClick={props.onClickMoveToList}>목록</button>
      </A.ItemButtonGroup>

      <A.Line></A.Line>

      <ProductCommentWrite />
      <ProductCommentList />
    </A.DetailWrapper>
  )
}
