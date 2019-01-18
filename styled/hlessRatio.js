import { css } from 'styled-components';



export default (ratio = 0.5, before = false) =>
    before
        ?
        css`
          &::before {
            content: '';
            visibility: hidden;
            display: block;
            padding-bottom: ${ratio * 100}%;
          }
        `
        :
        css`
          &::before {
            content: '';
            visibility: hidden;
            display: block;
            padding-bottom: ${ratio * 100}%;
          }
        `;
