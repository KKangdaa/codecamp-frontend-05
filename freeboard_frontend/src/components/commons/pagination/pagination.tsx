import { MouseEvent, useState } from 'react'
import {
  IBoardPaginationProps,
  IPaginationStyleProps,
} from './pagination.types'
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
  width: 25px;
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;
  color: ${(props: IPaginationStyleProps) =>
    props.clickPage === Number(props.id) ? 'red' : 'black'};
`

const PrevArrow = styled.div`
  cursor: pointer;
  margin: 2px 10px 0 0;
  transform: rotate(-135deg);
  &:after {
    transform: translate(6px, -8px);
  }
`
const NextArrow = styled.div`
  cursor: pointer;
  margin: 0 0 2px 10px;
  transform: rotate(45deg);
  &:after {
    transform: translate(6px, -8px);
  }
`

export default function Pagination(props: IBoardPaginationProps) {
  const [startPage, setStartPage] = useState(1)
  const lastPage = Math.ceil(props.dataBoardCount?.fetchBoardsCount / 10)

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({ page: Number(event.currentTarget.id) })
    props.setClickPage(Number(event.currentTarget.id))
  }

  const onClickPrevPage = () => {
    if (startPage === 1) return
    setStartPage((prev) => prev - 10)
    props.refetch({ page: startPage - 10 })
    props.setClickPage(startPage - 10)
  }

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return
    setStartPage((prev) => prev + 10)
    props.refetch({ page: startPage + 10 })
    props.setClickPage(startPage + 10)
  }

  return (
    <Wrapper>
      {startPage !== 1 && <PrevArrow onClick={onClickPrevPage}></PrevArrow>}

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <PageNumber
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              clickPage={props.clickPage}
            >
              {` ${index + startPage} `}
            </PageNumber>
          )
      )}

      {startPage + 10 < lastPage && (
        <NextArrow onClick={onClickNextPage}></NextArrow>
      )}
    </Wrapper>
  )
}
