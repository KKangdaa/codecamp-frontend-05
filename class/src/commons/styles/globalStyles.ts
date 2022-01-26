import { css } from '@emotion/react'

export const globalStyles = css`
  @font-face {
    font-family: 'myFont';
    src: url('/font/scifibit.ttf');
  }

  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: 'myFont';
  }
`
