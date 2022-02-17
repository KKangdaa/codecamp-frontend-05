import { withAuth } from "../../../../src/components/commons/example/hocs/withAuth";

const MainPage = () => {
  return (
    <>
      <div>메인페이지로 이동</div>
    </>
  );
};

export default withAuth(MainPage);
