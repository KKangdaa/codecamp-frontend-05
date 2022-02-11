import styled from "@emotion/styled";

export const WriteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ItemHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const HeaderWrap = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  width: 100%;
  color: green;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const TitleInput = styled.input`
  width: 100%;
`;

export const ItemContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const ContentsBox = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
`;

export const ItemImg = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
  img {
    width: 100px;
    height: 100px;
    border: 0;
  }
`;

export const CreateButton = styled.button`
  width: 100px;
  height: 35px;
  color: white;
  background: green;
  border: 0;
  border-radius: 20px;
  margin: 0 auto;
`;
