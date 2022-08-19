import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
`;

const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding-top: 10px;
    padding-left: 40px;
    padding-right: 40px;
    height: 500px;
`;
const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`;
const Title = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    font-size: 36px;
    font-weight: 400;
`;
const Box = styled.div`
    width: 100%;
    height: 124px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Input = styled.input`
    height: 52px;
    border: 2px solid black;
    padding-left: 15px;
    margin-bottom: 10px;

    font-size: 15px;
`;
const Button = styled.button`
    width: 100%;
    height: 52px;
    border-radius: 6px;
    border: none;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 13px;
    font-weight: bold;
`;

function Register() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header>⬅</Header>
                <Title>Register</Title>
                <Box>
                    <Input placeholder='jane@example.com' />
                    <Input placeholder='············' />
                </Box>
                <Button>NEXT</Button>
            </Container>
        </>
    );
}

export default Register;
