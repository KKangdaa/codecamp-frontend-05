import ProductCommentWrite from '../../productcomment/write/ProductCommentWrite.container'
import ProductCommentList from '../../productcomment/list/ProductCommentList.container'
import { IProductDetailUIProps } from './ProductDetail.types'
import { getPrice } from '../../../../commons/libraries/utils'
import * as A from './ProductDetail.styles'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Modal } from 'antd'
import { useEffect } from 'react'
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from '@ant-design/icons'

declare const window: typeof globalThis & {
  kakao: any
}

export default function ProductDetailUI(props: IProductDetailUIProps) {
  useEffect(() => {
    const script = document.createElement('script') // <script></script> 만들어짐

    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f&libraries=services&autoload=false' // ?&autoload=false 추가
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById('map') // 지도를 표시할 div

        const imageSrc = '/images/marker.png' // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69) // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        )

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder()
        geocoder.addressSearch(
          props.itemData?.fetchUseditem?.useditemAddress?.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              )

              const mapOption = {
                center: coords, // 지도의 중심좌표
                level: 3,
              }
              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              const map = new window.kakao.maps.Map(mapContainer, mapOption)

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage, // 마커이미지 설정
              })
              map.setCenter(coords)
              marker.setMap(map)
            }
          }
        )
      })
    }
  }, [props.itemData])

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
          <div>{getPrice(props.itemData?.fetchUseditem?.price)} 원</div>
          <div></div>
          <A.ItemBuy>
            <button onClick={props.onClickPick}>
              {props.heart === true ? <HeartFilled /> : <HeartOutlined />}{' '}
              {props.itemData?.fetchUseditem.pickedCount}
            </button>
            <button onClick={props.onClickBasket}>
              <ShoppingCartOutlined />
            </button>
            <button onClick={props.toggleButton2}>구매하기</button>
          </A.ItemBuy>
          {props.isModal && (
            <Modal
              visible={true}
              onOk={props.onClickUsePoint}
              onCancel={props.toggleButton2}
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
        {props.itemData?.fetchUseditem?.useditemAddress.address === '' ? (
          ''
        ) : (
          <div>
            <A.Line></A.Line>
            <A.Map id="map"></A.Map>
            <A.Address>
              {props.itemData?.fetchUseditem?.useditemAddress.zipcode}{' '}
              {props.itemData?.fetchUseditem?.useditemAddress.address}{' '}
              {props.itemData?.fetchUseditem?.useditemAddress.addressDetail}
            </A.Address>
          </div>
        )}
      </A.ItemContents>

      <A.Line></A.Line>

      <A.ItemButtonGroup>
        {props.userInfo?._id === props.itemData?.fetchUseditem?.seller._id && (
          <>
            <button onClick={props.toggleButton}>삭제</button>
            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.onClickDelete}
                onCancel={props.toggleButton}
                okText="삭제"
                cancelText="취소"
              >
                삭제하시겠습니까?
              </Modal>
            )}
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
