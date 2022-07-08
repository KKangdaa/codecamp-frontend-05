import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 50px 20px;
  > p {
    font-size: 2rem;
    font-weight: 700;
  }
  form {
    > div {
      border-top: 1px solid #ccc;
    }
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  > div:first-of-type {
    width: 200px;
    max-height: 100%;
    line-height: 60px;
    padding-right: 20px;
    text-align: right;
    background: #fff6e4;
  }
  > div:last-of-type {
    width: 100%;
    padding: 10px;
  }

  .wrapper-class {
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
  }
  .editor {
    height: 600px !important;
    border-radius: 2px !important;
    > div {
      :first-of-type {
        height: 42px;
      }
      :last-of-type {
        height: 558px;
      }
    }
  }
  .rdw-editor-main {
    height: 500px;
    padding: 0 20px;
  }
`

export const ErrorMessage = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: block;
`

export const InputAddress = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  outline: 0;
  padding: 0 10px;
  margin-top: 10px;
`
export const InputZipcode = styled.input`
  width: 100px;
  height: 40px;
  border: 1px solid #ccc;
  outline: 0;
  padding: 0 10px;
  margin-right: 10px;
`
export const SearchAddress = styled.button`
  width: 110px;
  height: 40px;
  border: 1px solid #ccc;
  background: #fffaf1;
  cursor: pointer;
  :hover {
    background: gold;
  }
`
