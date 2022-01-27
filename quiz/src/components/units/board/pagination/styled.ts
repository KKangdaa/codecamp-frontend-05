import styled from "@emotion/styled";

export const Flex = styled.div`
  width: 400px;
  display: flex;
  border: 1px solid gray;
  text-align: center;
`;
export const Title = styled.div`
  width: 200px;
  border-right: 1px solid gray;
`;
export const Writer = styled.span`
  width: 200px;
  color: orange;
`;
export const Numbers = styled.span`
  margin: 5px;
  color: ${(props) =>
    props.showPage === props.index + props.startPage ? "red" : "black"};
  cursor: pointer;
`;
export const PageNumber = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PrevButton = styled.span`
  height: 10px;
  width: 10px;
  border-style: solid;
  border-width: 2px 2px 0 0;
  transform: rotate(-135deg);
`;
export const NextButton = styled.span`
  height: 10px;
  width: 10px;
  border-style: solid;
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);
`;
