import {styled, createGlobalStyle} from 'styled-components'
import BgWppImage from '../assets/bg-wpp.png'

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    background: #1A5276;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
export const GlobalContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
export const Titulo = styled.h1`
font-size: 3rem;
color: #FFFFFF;
margin-top: 5rem;
`
export const CaixaTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: url(${BgWppImage});
    border-radius: 16px;
    width: 580px;
    padding: 1rem;
    height: 70vh;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    border-radius: 16px;
`