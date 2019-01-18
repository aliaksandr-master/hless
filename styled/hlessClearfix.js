import { css } from 'styled-components';



export default () => css`
&::after{
    content: " ";
    display: table;
    clear: both;
}
`;
