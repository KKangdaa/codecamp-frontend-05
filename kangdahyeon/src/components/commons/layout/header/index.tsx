import { useRouter } from "next/router";
import styled from "@emotion/styled";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 1.5rem;
  border-bottom: 4px solid green;
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickBoard = () => {
    router.push("/boards");
  };
  return (
    <HeaderWrapper>
      <span onClick={onClickBoard} style={{ cursor: "pointer" }}>
        LOGO
      </span>
    </HeaderWrapper>
  );
}
