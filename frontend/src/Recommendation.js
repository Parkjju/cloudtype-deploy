import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';

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
    padding-left: 44px;
    padding-right: 44px;
    height: 844px;
`;

const Title = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    font-size: 36px;
    font-weight: 400;
`;

const FilterBox = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 20px;
`;

const Filterbtn = styled.button`
    width: 23px;
    height: 23px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px;
    border-color: black;
    background-color: ${props => props.color};
    margin-right: 10px;

    font-size: 10px;
`;

const ImgBox = styled.div`
    width: 94px;
    height: 100px;
    justify-content: space-between;
    padding: 3px;
    float: left;
`;

const Img = styled.img`
    width: 94px;
    height: 100px;
    border: none;
    position: absolute;
    margin-bottom: 10px;
    box-shadow:0 2px 3px rgba(0, 0, 0, 0.25);
    position: absolute;
`;

// const Loading = styled.img`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;




function Recommendation() {

    const [color, setColor] = useState('#E2DED5');

    const onClick = () => {
        setColor(color=== '#E2DED5' ? 'pink' : '#E2DED5');
    };

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const getProduct = async() => {
        const json = await (    
            await fetch(
                "http://localhost:8000/results/"
            )
        ).json();
        setProduct(json)
        setLoading(false);
    };
    useEffect(() => {
       getProduct()
    }, []);


    return (
        <>
            <GlobalStyle />
            {loading ? (<h1> Loading.... </h1>
            ) : (
            <Container>
                <Title>Recommendation</Title>
                <FilterBox>
                    <Filterbtn onClick={onClick}>남</Filterbtn>
                    <Filterbtn onClick={onClick}>여</Filterbtn>
                </FilterBox>
                {product&&product.map((item, index) =>
                <ImgBox key={index}>
                    <Img src={item.img} />
                </ImgBox>
                    )}
            </Container>
            )}
        </>
    );
}

export default Recommendation;
