import { css } from 'styled-components';


const calcTypeBorder = (top, right, bottom, left) => {
    let res = '';
    res += top ? 'border-top-color: transparent !important;' : '';
    res += right ? 'border-right-color: transparent !important;' : '';
    res += bottom ? 'border-bottom-color: transparent !important;' : '';
    res += left ? 'border-left-color: transparent !important;' : '';
    return res;
};

const typeMap = {
    'top':          calcTypeBorder(true, true, false, true),
    'right':        calcTypeBorder(true, true, true, false),
    'bottom':       calcTypeBorder(false, true, true, true),
    'left':         calcTypeBorder(true, false, true, true),

    'top-left':     calcTypeBorder(true, false, false, true),
    'top-right':    calcTypeBorder(true, true, false, false),
    'bottom-left':  calcTypeBorder(false, false, true, true),
    'bottom-right': calcTypeBorder(false, true, true, false),
};


export default (type = 'bottom', size = '4px', color = '#eee') => {
  return css`
    display: inline-block;
	width: 0;
	height: 0;
	line-height: 0;
	font-size: 0;
	content: ""; // FOR ::after and ::before
	overflow: hidden;
	border-style: solid;
	border-width: ${size};
	border-color: rgba(255, 255, 255, 0); // FIX MOZILA BUG
	border-color: ${color};
	${typeMap[type]}
  `;
};
