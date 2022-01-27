import { MouseEvent, useState } from 'react'
import { IBoardPaginationProps } from './BoardList.types'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  & > div {
    height: 10px;
    width: 10px;
    border-style: solid;
    border-width: 2px 2px 0 0;
    /* &:after {
      content: '';
      display: block;
      height: 10px;
      width: 10px;
      border-style: solid;
      border-width: 2px 2px 0 0;
      transform: translate(6px, -8px);
    } */
  }
`

const PageNumber = styled.span`
  margin: 5px;
  font-size: 0.9rem;
`

const PrevArrow = styled.div`
  margin-right: 10px;
  transform: rotate(-135deg);
  &:after {
    transform: translate(6px, -8px);
  }
`
const NextArrow = styled.div`
  margin-left: 10px;
  transform: rotate(45deg);
  &:after {
    transform: translate(6px, -8px);
  }
`

export default function Pagination(props: IBoardPaginationProps) {
  const [startPage, setStartPage] = useState(1)

  const [clickPage, setClickPage] = useState(1)

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({ page: Number(event.currentTarget.id) })
    setClickPage(Number(event.currentTarget.id))
  }

  const onClickPrevPage = () => {
    if (startPage === 1) return
    setStartPage((prev) => prev - 10)
    props.refetch({ page: startPage - 10 })
    setClickPage(startPage - 10)
  }

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) return
    setStartPage((prev) => prev + 10)
    props.refetch({ page: startPage + 10 })
    setClickPage(startPage + 10)
  }

  return (
    <Wrapper>
      <PrevArrow onClick={onClickPrevPage}></PrevArrow>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <PageNumber
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              clickPage={clickPage}
              index={index}
              startPage={startPage}
            >
              {` ${index + startPage} `}
            </PageNumber>
          )
      )}

      <NextArrow onClick={onClickNextPage}></NextArrow>
    </Wrapper>
  )
}
