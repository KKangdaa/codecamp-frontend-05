import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BoardWrapper = styled.div`
  position: relative;
  width: 70%;
  height: auto;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
export const BoardListTitle = styled.span`
  width: 100%;
  margin: 30px 0 50px 0;
  text-align: center;
  font-size: 4rem;
  letter-spacing: 1rem;
`
export const Board = styled.div`
  width: 100%;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`
export const BoardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 0;
  font-size: 0.9rem;
  font-weight: 700;
  border-bottom: 3px double #ccc;
`
export const TitleIcon = styled.div`
  width: 10%;
`
export const Icon = styled.i``
export const TitleName = styled.div`
  width: 50%;
`
export const TitleWriter = styled.div`
  width: 15%;
`
export const TitleCreateDate = styled.div`
  width: 15%;
`

export const BoardList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border: 0;
  }
`

export const Number = styled.div`
  width: 10%;
`
export const Name = styled.div`
  width: 50%;
  text-align: left;
  padding-left: 20px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const Writer = styled.div`
  width: 15%;
`
export const CreateDate = styled.div`
  width: 15%;
`
export const Like = styled.div`
  width: 10%;
`

export const EditButton = styled.button`
  position: relative;
  top: 0;
  right: 0;
  width: 110px;
  height: 40px;
  margin-top: 30px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`
