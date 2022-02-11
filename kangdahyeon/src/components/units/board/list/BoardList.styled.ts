import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;
export const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 20px;
`;
export const ItemWrap = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemTitle = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`;
export const ItemDate = styled.div`
  margin: auto 0;
`;
export const ItemCB = styled.div`
  width: 100%;
  padding: 0 20px 20px;
`;
export const CBWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: right;
  > img {
    width: 50px;
    height: 50px;
  }
`;
export const ItemContents = styled.div`
  margin-bottom: 10px;
`;
export const ItemButton = styled.div`
  width: 100%;
  margin: auto 0;
  span {
    cursor: pointer;
    margin-left: 10px;
    :hover {
      border-bottom: 1px solid black;
    }
  }
`;
