import styled from '@emotion/styled'
import { Modal } from 'antd'

export const MyPageWrapper = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
  @font-face {
    font-family: 'SB agro M';
    font-weight: normal;
    src: url('/font/sb/sbm.ttf');
  }
  font: 11px 'Lato', 'Malgun Gothic', 'Nanum Gothic', '돋움', Dotum, AppleGothic,
    sans-serif;
  position: relative;
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  border-left: 0px solid #eee;

  .orderstate {
    margin: 20px 0;
    border: 1px solid #ddd;
    padding: 20px 25px;

    .title {
      padding: 18px 0;
      text-align: left;
      margin: 0;
      border-bottom: 0px solid #e9e9e9;
      h3 {
        font-size: 12px !important;
        color: #000;
      }
    }
    .desc {
      padding: 0 0 0 4px;
      font-weight: normal;
      font-size: 11px;
      color: #888;
      em {
        color: #000;
        font-style: normal;
      }
    }
    .state {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
    }
    .order {
      width: 60%;
      display: flex;

      li {
        width: auto;
        padding: 0 0 4px;
        margin: 0 20px 0 0;
        border-right: 0px dotted #c9c7ca;
        text-align: center;
        strong {
          margin-right: 10px;
          font-size: 12px;
          color: #000;
        }
      }
      span {
        font-weight: bold;
        font-size: 14px;
        color: #000;
      }
    }
    .cs {
      width: 25%;
      display: flex;
      justify-content: space-between;
      li {
        letter-spacing: 0.04em;
        word-spacing: 4px;
      }
      strong {
        font-weight: normal;
        font-size: 12px;
        color: #000;
      }
      span {
        padding: 0 0 0 4px;
        font-weight: bold;
        font-size: 13px;
        color: #000;
      }
      .icoDot {
        display: inline-block;
        width: 2px;
        height: 2px;
        margin: 6px 0 0 0;
        background: #4d4d4d;
        vertical-align: top;
      }
    }
  }
  .asyncbankbook {
    ul {
      display: flex;
      li {
        margin: 5px 0;
        padding: 0 30px 0 5px;
        width: auto;
        height: 30px;
        font-size: 12px;
        line-height: 2;
        vertical-align: top;
      }
    }
    .title {
      width: auto;
      text-align: left;
    }
    .data {
      width: auto;
      padding: 0 7px 0 10px;
    }
  }
  #myshopMain {
    margin: 30px 0 0;
    ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
    }
    .shopMain {
      width: 100%;
      height: 140px;
      padding: 40px 15px;
      border: 1px solid #e9e9e9;
      text-align: center;
      h3 {
        position: relative;
        font-size: 11px;
        color: #333;
        font-weight: normal;
        strong {
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 1px !important;
          color: #1890ff;
        }
        span {
          display: none;
          padding: 6px 0 0;
          padding: 0 0 10px;
          &:hover {
            text-decoration: none;
          }
        }
      }
      p {
        display: block;
        font-size: 11px;
        line-height: 18px;
        color: #999;
        margin: 0;
      }
    }
  }

  h3 {
    font-size: 13px !important;
  }
  .titleArea {
    text-align: left;
    margin: 0px 0 30px 0px;
    * {
      font-size: 14px;
      color: #000;
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    h2 {
      display: inline-block;
      margin: 2px 0 0;
      letter-spacing: 1px;
    }
  }
  .title {
    border: none;
    text-align: center;
    * {
      font-size: 14px;
      color: #000;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
  #contents {
    position: relative;
    width: 80%;
    margin: 50px auto 80px;
    padding-left: 0%;
  }
  li {
    list-style: none;
  }
`

export const PointModal = styled(Modal)`
  &.ant-modal {
    width: 200px;
    height: 200px;
    .ant-modal-content {
      height: 200px;
      .ant-modal-body {
        height: 65%;
        display: flex;
        justify-content: center;
        align-items: center;
        select {
          width: 80%;
          height: 30px;
          padding: 0 5px;
        }
      }
      .ant-modal-footer {
        height: 35%;
        padding-right: 20px;
        display: flex;
        align-items: center;
        justify-content: end;
      }
    }
  }
`
