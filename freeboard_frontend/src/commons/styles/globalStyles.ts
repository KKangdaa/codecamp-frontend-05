import { css } from '@emotion/react'

export const globalStyles = css`
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 700;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
  }
  @font-face {
    font-family: 'Comforter';
    font-weight: normal;
    src: url('https://fonts.googleapis.com/css2?family=Comforter&display=swap');
  }

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
  }
  body {
    overflow-x: hidden;
    /* background: #fffaf1; */
  }
`
