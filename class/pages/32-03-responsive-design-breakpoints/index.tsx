import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background: gold;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background: green;
  }
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background: blue;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
