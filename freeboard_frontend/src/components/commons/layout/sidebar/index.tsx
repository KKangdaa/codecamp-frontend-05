import { useContext, useEffect } from 'react'
import { getMyDate, getPrice } from '../../../../commons/libraries/utils'
import { GlobalContext } from '../../../../../pages/_app'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  z-index: 2;
  width: 150px;
  padding: 15px 15px 20px;
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
  overflow: hidden;
  background: white;
  border-radius: 10px;
  border: 1px solid #d1d1d1;
  p {
    font-weight: 700;
  }
  > div:last-child {
    margin-bottom: 5px;
  }
`
const ImgContainer = styled.div`
  width: 45px;
  height: 45px;
  overflow: 'hidden';
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  margin: 15px 0;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export default function LayoutSidebar() {
  const router = useRouter()
  const { item, setItem } = useContext(GlobalContext)
  const todayDate = getMyDate(new Date())

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || '[]')
    if (baskets) {
      setItem(baskets)
    }
  }, [])

  const onClickDetail = (el) => () => {
    router.push(`/product/${el._id}`)
  }

  return (
    <>
      {item.length === 0 ? (
        <></>
      ) : (
        <Wrapper>
          <p>오늘 본 상품</p>
          {item
            .map((el) => (
              <Items
                key={el._id}
                onClick={onClickDetail(el)}
                style={{ cursor: 'pointer' }}
              >
                <ImgContainer>
                  <img
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    onError={(e) => {
                      e.currentTarget.src = '/images/product-icon.png'
                    }}
                  />
                </ImgContainer>
                <div>
                  <div>{el.name}</div>
                  <div>{getPrice(el.price)}</div>
                </div>
              </Items>
            ))
            .filter((el, index) => {
              if (index < 5) return el
            })}
        </Wrapper>
      )}
    </>
  )
}
