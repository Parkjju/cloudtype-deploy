import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// import FavolistDeleteModal from './FavolistDeleteModal';
import NavFavo from './NavFavo';
// import { useState } from 'react';
// import { Link } from "react-router-dom";

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
    max-width: 100%;
    padding-top: 30px;
    height: 500px;
    padding-left: 29px;
    padding-right: 29px;

`;

const Box = styled.div`
  width: 306px;
  height: 87px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 15px;
  box-shadow:0 2px 13px rgba(0, 0, 0, 0.25);

  padding-left: 11px;
  padding-right: 15px;
`;

const favolist = [{id: "1", Img: "https://static.lookpin.co.kr/20210301163656-7cb2/090975809a1d8a1c520b08b9a6248bd9.jpg?resize=880", sname: 'Non excepturi conse', description: 'ctetur dgre', size: 'Size M', price: '$ 15'},
                {id: "2", Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3znK8-sksrkd13YERneLzdbY3V57wEi2pg&usqp=CAU", sname: 'Lorem ipsum dolor ', description: 'Aut labor', size: 'Size M', price: '$ 24'},
                {id: "3", Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3znK8-sksrkd13YERneLzdbY3V57wEi2pg&usqp=CAU", sname: 'In modi alias qui iusto', description: 'rerum', size: 'Size M', price: '$ 31'}
                            ];

const Imgbox = styled.div`
    width: 70x;
    height: 70px;
    margin-right: 10px;
`;                 

const Img = styled.img`
    width: 70px;
    height: 70px;
    border: none;
    background-color: black;
    position: absolute;
`;

const Textbox = styled.div`
    width: 140px;
    height: 60px;
    justify-content: center;
    margin-left: 70px;
    display: flex;
    align-items: center;
    margin-right: 30px;
`;

const Text = styled.div`
    width: 140px;
    height: 56px;
    display: flex;
    align-items: center;
    padding-left: 2px;

    font-size: 11px;
    font-weight: bold;
`;

const Remove = styled.button`
  width: 45px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;

  font-size: 11px;
  font-weight: bold;
  color: red;
  text-decoration: none;
`;



function Favorites()    {
    return (
        <>
            <GlobalStyle />
            <Container>
                    <NavFavo></NavFavo>
                    {favolist.map((item, index) => (
                        <Box key={item.id}>
                            <Imgbox>
                                <Img src = {item.Img}></Img>
                            </Imgbox>
                            <Textbox>
                                <Text>{item.sname}{<br></br>}
                                    {item.description}{<br></br>}
                                    {item.size}{<br></br>}
                                    {item.price}{<br></br>}
                                </Text>
                            </Textbox>
                            <Remove>Remove</Remove>
                         </Box>

                        )
                    )}
            </Container>
        </>
    );
}

export default Favorites;
