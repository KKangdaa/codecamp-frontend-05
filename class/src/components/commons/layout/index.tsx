/* eslint-disable react/react-in-jsx-scope */
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const BodyWrapper = styled.div`
  display: flex;
`;

const LayoutSidebar = styled.div`
  width: 100px;
  /* height: 1800px; */
  height: auto;
  background: burlywood;
`;

const LayoutBody = styled.div``;

const HIDDEN_HEADERS = [
  "/12-06-modal-address-refactoring",
  /* 필요 없는 태그가 있을 경우 페이지의 경로들을 추가 */
];

interface IProps {
  children: ReactChild;
}

export default function Layout(props: IProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHearder = HIDDEN_HEADERS.includes(router.asPath);
  // console.log(router)로 router의 object가 어떤게 있는지 확인하여 (router.asPath)가 있는지 includes 확인 후 숨김

  return (
    <>
      {!isHiddenHearder && <LayoutHeader />}
      {/* isHiddenHearder목록 안에 경로가 없으면 LayoutHeader를 보이게 처리 */}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar />
        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
