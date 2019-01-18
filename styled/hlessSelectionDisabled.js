import { css } from 'styled-components';



export default (color = '#444') => css`
// fix http://code.google.com/p/chromium/issues/detail?id=72413
&::selection {
    background: transparent;
    color: ${color};
    text-shadow: none;
}
user-select: none;
`;
