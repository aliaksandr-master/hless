import { css } from 'styled-components';



export default (color = '#eee', fs = 'italic') => css`
// fix http://code.google.com/p/chromium/issues/detail?id=72413
&::-webkit-input-placeholder {
    color: ${color} !important;
    font-style: ${fs};
}
&:-moz-placeholder {
    color: ${color} !important;
    font-style: ${fs};
}
&:-ms-input-placeholder {
    color: ${color} !important;
    font-style: ${fs};
}
input[type=number] {
    text-align: left;
}
`;
