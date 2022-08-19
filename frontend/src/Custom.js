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
    width: 430px;
    margin: 0 auto;
    padding-top: 44px;
    height: 700px;
`;

const Title = styled.div`
    width: 100%;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid gray;

    font-size: 36px;
    font-weight: 400;
`;
const Box = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid gray;

  padding-left: 20px;
  padding-right: 20px;
`;

const stylelist = [{id: "1", Img: "https://static.lookpin.co.kr/20210301163656-7cb2/090975809a1d8a1c520b08b9a6248bd9.jpg?resize=880", sname: '댄디', description: '흐린 날씨의 댄디함'},
                {id: "2", Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3znK8-sksrkd13YERneLzdbY3V57wEi2pg&usqp=CAU", sname: '스트릿', description: '나에게 어울리는 스트릿'}
                            ];

const Imgbox = styled.div`
width: 60px;
height: 57px;
margin-right: 24px;

overflow: hidden;

`;                    
const Img = styled.img`
    width: 57px;
    height: 57px;
    border-radius: 50%;
    border: none;
    margin-right: 24px;

    position: absolute;

`;

const Textbox = styled.div`
    width: 100%;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;
`;

const Sname = styled.p`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    padding-top: 10px;

    font-size: 15px;
    font-weight: bold;
`;

const Description = styled.p`
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    padding-bottom: 2px;

    font-size: 13px;
    font-weight: 200;
`;



function Custom() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>Custom</Title>
                    {stylelist.map((item, index) => (
                        <Box key={item.id}>
                            <Imgbox>
                                <Img src = {item.Img}></Img>
                            </Imgbox>
                            <Textbox>
                                <Sname>{item.sname}</Sname>
                                <Description>{item.description}</Description>
                            </Textbox>
                         </Box>

                        )
                    )}
            </Container>
        </>
    );
}

export default Custom;
