import { css } from 'styled-components';
import hlessClearfix from './hlessClearfix';



export const helssFloatGridRow = (margin = '') => css`
display: block;
${margin && `margin-left: -${margin};margin-right: -${margin};`}
${hlessClearfix()}
`;


export const hlessFloatGridCol = (sizeFactor = 0.5, margin = '') => css`
float: left;
display: block;
box-sizing: border-box;
${margin && `padding-left: ${margin};padding-right: ${margin};`}
width: ${sizeFactor * 100}%;
`;
