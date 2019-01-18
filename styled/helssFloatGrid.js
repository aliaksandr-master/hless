import { css } from 'styled-components';



export const helssFlexGridRow = (margin = '') => css`
box-sizing: border-box;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-flex: 0;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
${margin ? `margin-right: -${margin};margin-left: -${margin};` : ''}
`;


export const helssFlexGridCol = (sizeFactor = 0.5, margin = '') => css`
box-sizing: border-box;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
${margin ? `padding-right: ${margin};padding-left: ${margin};` : ''}
flex-basis: ${sizeFactor * 100}%;
max-width: ${sizeFactor * 100}%;
`;
