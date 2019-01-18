import { css } from 'styled-components';



export default (color = '#eee', width = '80%') => css`
&::before {
    content: ' ';
    display: inline-block;
    width: ${width};
    line-height: inherit;
    font-size: inherit;
    background: ${color};
    color: ${color};
    border-radius: 2px;
    vertical-align: baseline;
}
`;
