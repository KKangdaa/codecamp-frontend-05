import styled from "@emotion/styled";
import { IButtonActive } from "./BoardWrite.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

/* main */
export const Main = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  margin: 80px 0;
  border: 1px solid gray;
  border-radius: 20px;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 50px;
`;
export const MainTitleBox = styled.input`
  width: 100%;
  height: 100px;
  border: 0;
  padding-left: 30px;
  font-size: 2.5rem;
  margin: auto;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  outline: 0;
`;
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin: 5px 0;
`;
export const MainTextBox = styled.textarea`
  width: 100%;
  height: 500px;
  border: 0;
  padding: 45px 30px 30px;
  resize: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  outline: 0;
  white-space: pre-wrap;
`;

/* Add IMG */
export const MainAddImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0 20px;
  border-top: 1px solid #ccc;
`;
export const AddImgImgs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ImgsUp = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid gold;
  border-radius: 15px;
  font-size: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: gold;
  }
`;

export const MainInnerTitle = styled.div`
  width: 20%;
  font-size: 0.8rem;
  font-weight: 700;
  padding-left: 20px;
`;
export const MainInnerBox = styled.div`
  width: 100%;
`;
export const InnerBoxInput = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  outline: none;
`;
export const ErrorRed = styled.span`
  width: 100%;
  padding-top: 5px;
  color: red;
`;

export const MainWriter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
`;
export const MainPasssword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
`;
/* 주소 */
export const MainAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;
export const AddressText = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;
export const Gruop = styled.div`
  width: 100%;
`;
export const TextNum = styled.input`
  width: 60px;
  height: 40px;
  border: 0;
  border-bottom: 1px solid #ccc;
  text-align: center;
  outline: none;
`;
export const TextButton = styled.button`
  height: 40px;
  border: 0;
  padding: 0 10px;
  margin-left: 10px;
  background-color: gold;
  cursor: pointer;
`;
export const AddressInputBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;
export const BoxText = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  outline: none;
`;
/* URL */
export const MainURL = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

/* Radio Type */
export const MainType = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;
export const TypeInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;
export const InputText = styled.div`
  padding: 0 20px 0 5px;
`;
export const InputRadio = styled.input`
  appearance: none;
  width: 13px;
  height: 13px;
  border: 1px solid rgb(184, 151, 22);
  border-radius: 13px;
  background-color: #fff;
  cursor: pointer;
  &:checked::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin: 13%;
    background-color: gold;
  }
`;

/* button */
export const RegisBtn = styled.button`
  width: 120px;
  height: 45px;
  border: 0;
  border: 1px solid gold;
  border-radius: 15px;
  font-weight: 900;
  margin: 30px 0;
  background: ${(props: IButtonActive) =>
    props.buttonActive === true ? "gold" : "none"};
  &:hover {
    cursor: ${(props: IButtonActive) =>
      props.buttonActive === true ? "point" : "auto"};
  }
`;
