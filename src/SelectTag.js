import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// import { Helmet } from 'react-helmet';
import { useState } from 'react';
import axios from 'axios';

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
    height: 844px;
`;

const Title = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    font-size: 36px;
    font-weight: 400;
`;

const Box = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Img = styled.div`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: none;
    margin-right: 10px;

    background-color: #D9D9D9;
    span{
        font-size: 13px;
        font-weight: bold;
    }
`;

const Subheading = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
`; 


const TagBox = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    padding-left: 24px;  
`;

const Tag = styled.button`
    float:left;
    margin-right: 8px;
    margin-bottom: 5px;
    background-color: #E7E7E7;
    justify-content: center;
    border-radius: 4px;
    padding: 4px;
    border: none;

    font-size: 10px;
`;

const InputBox = styled.form`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 110px;
    height: 15px;
    padding: 10px;
    border: 2px solid black;
    margin-bottom: 20px;
    
    color: gray;
    font-size: 10px;
`;

const FormBox = styled.div`
    height: 100px;
`;

const SubmitBox = styled.form`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Submit = styled.button`
    width: 300px;
    height: 40px;
    background-color: black;
    border: none;
    border-radius: 4px;

    font-size: 15px;
    color: white;
`;



function SelectTag() {

    const categorylist = [{id:1, fashion: "??????"}, {id:2, fashion: "?????????"}, {id:3, fashion:"??????"}, {id:4, fashion:"?????????"}, {id:5, fashion:"?????????"},
                      {id:6, fashion: "??????"}, {id: 7, fashion: "??????"}, {id:8, fashion: "??????"}, {id:9, fashion: "????????????"}, {id:10, fashion: "???????????????"},
                      {id:11, fashion: "???????????????"}, {id: 12, fashion: "???????????????"}
];

    const coordilist = [{id:1, coordi: "?????????", value: "?????????"}, {id:2, coordi: "?????????", value: "?????????"}, {id:3, coordi: "?????????", value: "?????????"}, {id:4, coordi: "??????", value: "??????"}, {id:5, coordi: "??????", value: "??????"},
                        {id:6, coordi: "?????????", value: "?????????"}, {id:7, coordi: "?????????", value: "?????????"}, {id:8, coordi: "????????????", value: "????????????"}, {id:9, coordi: "?????????", value: "?????????"}, {id:10, coordi: "?????????", value: "?????????"},
                        {id:11, coordi: "??????", value: "??????"}, {id:12, coordi: "?????????", value: "?????????"}, {id: 13, coordi: "????????????", value: ""}
    ];

    const detailList = [{id:1, detail: "???", value: "???"}, {id:2, detail: "??????", value: "??????"}, {id:3, detail: "??????", value: "??????"}, {id:4, detail: "??????", value: "??????"}, {id:5, detail: "??????", value: "??????"},
                        {id:6, detail: "?????????", value: "?????????"}, {id: 7, detail: "?????????", value: "??????"}
    ];

    const [fashion2, setFashion2] = useState([]);
    const [coordi2, setCoordi2] = useState([]);
    const [detail2, setDetail2] = useState([]);
    const [topn, setTopn] = useState();
    console.log(fashion2);
    console.log(coordi2);
    console.log(detail2);
    console.log(topn);

    const handleChange = ({target: {value}}) => setTopn(value);

    // const [data, setData] = useState();
    const onSubmit = (e) =>  {   
        e.preventDefault();
        const getData = async () => {
            await axios
                .post('http://localhost:8000/predict/', {
                    main_category: fashion2.toString(),
                    coordi: coordi2.toString(),
                    input_text: detail2.join(' '),
                    top_n: topn,
                })
                .then((response) => console.log(response.data))
                .catch((err) => console.log(err));

            // if( !== undefined){
                 window.location.href="http://localhost:3000/recommendation"
                // }
            // else {
            // return null;
            // }
            // console.log("?????????", data);
        };
        getData();
    };



    //TAG ?????? ?????? ??????, ??????
    const [tagActive, setTagActive] = useState(false);

    const toggleActive = () =>  {
        setTagActive((tagActive)=>!tagActive)
    };
    
    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>Select your Tag</Title>
                <Box>
                    <Img> </Img>
                    <Subheading>??????</Subheading>
                </Box>
                <TagBox>
                {categorylist.map((item, index) =>
                    <Tag onClick={()=>
                        {toggleActive()
                        !tagActive ? (setFashion2(fashion2.concat(item.fashion)))
                        : (console.log(setFashion2(fashion2.filter(categorylist => categorylist.fashion !== fashion2.fashion))))
                        }}
                        key={item.id} >
                            {item.fashion}
                    </Tag>
                    )}
                </TagBox>
                <Box>
                <Img> </Img>
                <Subheading>??????</Subheading>
                </Box>
                <TagBox>
                {coordilist.map((item, index) =>
                    <Tag onClick={()=>
                        {toggleActive()
                        !tagActive ? (setCoordi2(coordi2.concat(item.coordi)))
                        : (console.log(setCoordi2(fashion2.filter(coordilist => coordilist.coordi !== coordi2.coordi))))
                        }}
                        key={item.id}>
                            {item.coordi}
                    </Tag>
                    )}
                </TagBox>
                
                <Box>
                <Img> </Img>
                <Subheading>More</Subheading>
                </Box>
                <TagBox>
                {detailList.map((item, index) =>
                    <Tag onClick={()=>
                        {toggleActive()
                        !tagActive ? (setDetail2(detail2.concat(item.detail)))
                        : (console.log(setDetail2(detail2.filter(detailList => detailList.fashion !== detail2.detail))))
                        }}
                        key={item.id}>
                            {item.detail}
                    </Tag>
                    )}
                </TagBox>
                <FormBox onSubmit={onSubmit}>
                    <InputBox>
                        <Input value={topn || ''} onChange={handleChange} placeholder="Top N"/>
                    </InputBox>

                    <SubmitBox>
                        <Submit>??????</Submit>
                    </SubmitBox>
                </FormBox>
            </Container>
        </>
    );
}
export default SelectTag;
