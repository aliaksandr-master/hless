import { css } from 'styled-components';
import hlessRatio from './hlessRatio';



export default (color = '#eee', width = '100%', radius = 0) => css`
display: block;
background: ${color};
border-radius: ${radius};
width: ${width};
${hlessRatio(1)}
`;
