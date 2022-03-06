import ProductCommentWrite from '../../productcomment/write/ProductCommentWrite.container'
import ProductCommentList from '../../productcomment/list/ProductCommentList.container'
import { IProductDetailUIProps } from './ProductDetail.types'
import { getPrice } from '../../../../commons/libraries/utils'
import * as A from './ProductDetail.styled'
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
  // const { accessToken } = useContext(GlobalContext)
  useEffect(() => {
    const script = document.createElement('script') // <script></script> 만들어짐
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f&libraries=services&autoload=false' // ?&autoload=false 추가
    document.head.appendChild(script)

    /* script.onload = () => {
        // script가 로드가 되면 실행되게

        window.kakao.maps.load(function () {
          // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.

          const container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
          const options = {
            // 지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(props.lat, props.lng), // 지도의 중심좌표.
            level: 3, // 지도의 레벨(확대, 축소 정도)
          }

          const map = new window.kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

          const imageSrc =
            'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png' // 마커이미지의 주소입니다
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

          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(`${props.address}`, function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              )

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage, // 마커이미지 설정
              })

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map)
              map.setCenter(coords)
            }
          })
        })
      } */
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
        geocoder.addressSearch(props.address, function (result, status) {
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
        })
      })
    }
  }, [props.address])

  const result = props.pickData?.fetchUseditemsIPicked
    .map((el) => el._id)
    .filter((filterEl) => filterEl === props.itemData?.fetchUseditem._id)
    .join('')

  useEffect(() => {}, [result])

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
              {result === props.itemData?.fetchUseditem._id ? (
                <HeartFilled />
              ) : (
                <HeartOutlined />
              )}{' '}
              {props.itemData?.fetchUseditem.pickedCount}
            </button>
            {console.log(result)}
            <button>
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
        <A.Line></A.Line>
        {props.itemData?.fetchUseditem?.useditemAddress && (
          <div>
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
        {/* {props.userData?.fetchUserLoggedIn && ( */}
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
        {/* )} */}

        <button onClick={props.onClickMoveToList}>목록</button>
      </A.ItemButtonGroup>

      <A.Line></A.Line>

      <ProductCommentWrite />
      <ProductCommentList />
    </A.DetailWrapper>
  )
}
