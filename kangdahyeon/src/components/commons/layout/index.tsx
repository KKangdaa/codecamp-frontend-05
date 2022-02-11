import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";

const BodyWrapper = styled.div`
  width: 75%;
  border-left: 1px solid green;
  padding: 10px;
  /* overflow-x: hidden; */
`;
const LayoutBody = styled.div`
  width: 100%;
`;
const NavWrapper = styled.div`
  width: 100%;
  display: flex;
`;

/* interface IProps {
  children: ReactChild;
} */
export default function Layout(props) {
  const router = useRouter();
  const HIDDEN_NEW = ["/boards/new", `/boards/${router.query.page}/edit`];

  const HiddenLayout = HIDDEN_NEW.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      <NavWrapper>
        <LayoutNavigation />
        <BodyWrapper>
          {!HiddenLayout && <LayoutBanner />}
          <LayoutBody>{props.children}</LayoutBody>
        </BodyWrapper>
      </NavWrapper>
    </>
  );
}
