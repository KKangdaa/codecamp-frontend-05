import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import BoardListPresenter from "./BoardList.presenter";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
    }
  }
`;

const SearchInput = styled.input`
  color: black;
  width: 70%;
`;
const SearchButton = styled.button`
  color: black;
  width: 30%;
  line-height: 0;
  white-space: nowrap;
  border: 0;
`;

export default function SearchInputPage(props) {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    refetch({ page: 1, search: search });
    setKeyword(search);
  };
  return (
    <>
      <SearchInput type="text" placeholder="검색" onChange={onChangeSearch} />
      <SearchButton onClick={onClickSearch}>검색</SearchButton>
    </>
  );
}
