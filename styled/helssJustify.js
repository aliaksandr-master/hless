import { css } from 'styled-components';



export const helssJustifyParent = () => css`
text-align: justify;
text-justify: newspaper;
text-align-last: justify;
font-size: 0;
line-height: 0;
zoom: 1;

&::after {
    width: 100%;
    height: 0;
    visibility: hidden;
    overflow: hidden;
    content: ' ';
    display: inline-block;
}
`;


export const helssJustifyChild = (fz = '1rem', lh = '1.2') => css`
display: inline-block;
vertical-align: top;
text-align: left;
line-height: ${fz};
font-size: ${lh};
`;
