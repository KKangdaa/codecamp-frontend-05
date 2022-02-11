import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { UnorderedListOutlined, FormOutlined } from "@ant-design/icons";
import { useState } from "react";
import SearchInputPage from "../../../units/board/list/search";

const NavWrapper = styled.div`
  width: 25%;
  padding: 10px;
  > div {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    color: white;
    border-radius: 10px;
    background: green;
    margin-bottom: 10px;
    cursor: pointer;
    span:nth-of-type(2) {
      margin-left: 5px;
    }
  }
  div:nth-of-type(3) {
    padding: 5px 10px;
    cursor: default;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  background: green;
`;

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickBoard = () => {
    router.push("/boards");
  };
  const onClickBoardNew = () => {
    router.push("/boards/new");
  };

  return (
    <>
      <NavWrapper>
        <div onClick={onClickBoard}>
          <UnorderedListOutlined />
          <span>전체 글 보기</span>
        </div>
        <div onClick={onClickBoardNew}>
          <FormOutlined />
          <span>새 글 작성</span>
        </div>
        <SearchWrapper>
          <SearchInputPage />
        </SearchWrapper>
      </NavWrapper>
    </>
  );
}
