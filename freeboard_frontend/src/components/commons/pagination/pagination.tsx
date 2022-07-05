import { MouseEvent } from 'react'
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
  width: 30px;
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
  const lastPage = Math.ceil(props.dataBoardCount?.fetchBoardsCount / 10)

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({
      page: Number(event.currentTarget.id),
      search: props.keyword,
    })
    props.setClickPage(Number(event.currentTarget.id))
  }

  const onClickPrevPage = () => {
    if (props.startPage === 1) return
    props.setStartPage((prev) => prev - 10)
    props.refetch({ page: props.startPage - 10 })
    props.setClickPage(props.startPage - 10)
  }

  const onClickNextPage = () => {
    if (props.startPage + 10 > lastPage) return
    props.setStartPage((prev) => prev + 10)
    props.refetch({ page: props.startPage + 10 })
    props.setClickPage(props.startPage + 10)
  }

  return (
    <Wrapper>
      {props.startPage !== 1 && (
        <PrevArrow onClick={onClickPrevPage}></PrevArrow>
      )}

      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= lastPage && (
            <PageNumber
              key={index + props.startPage}
              onClick={onClickPage}
              id={String(index + props.startPage)}
              clickPage={props.clickPage}
            >
              {` ${index + props.startPage} `}
            </PageNumber>
          )
      )}

      {props.startPage + 10 < lastPage && (
        <NextArrow onClick={onClickNextPage}></NextArrow>
      )}
    </Wrapper>
  )
}
