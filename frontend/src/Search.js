import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
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
    height: 500px;
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

const Box = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding-left: 5px;
`;

const Subheading = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
`; 

const TagBox = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 5px;
    padding-left: 5px;
`;

const Tag = styled.button`
    float: left;
    margin-right: 10px;
    margin-bottom: 8px;
    background-color: #E7E7E7;
    justify-content: center;
    border-radius: 4px;
    padding: 5px;
    border: none;

    font-size: 10px;
`;

const InputBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  float: left;
  margin-bottom: 10px;
  justify-content: center;
`;
const InputText = styled.input`
  width: 180px;
  height: 30px;
  border: 2px solid black;
  padding-left: 10px;
  margin-right: 10px;

  font-size: 15px;
`;

const InputTopn = styled.input`
    width: 80px;
    height: 30px;
    border: 2px solid black;
    padding-left: 10px;

    font-size: 15px;
`

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

function Search() {
    const categorylist = [{id:1, fashion: "상의"}, {id:2, fashion: "원피스"}, {id:3, fashion:"하의"}, {id:4, fashion:"스커트"}, {id:5, fashion:"아우터"},
                      {id:6, fashion: "가방"}, {id: 7, fashion: "모자"}, {id:8, fashion: "신발"}, {id:9, fashion: "스니커즈"}, {id:10, fashion: "스포츠가방"},
                      {id:11, fashion: "스포츠모자"}, {id: 12, fashion: "스포츠신발"}
];
    const [fashion2, setFashion2] = useState([]);
    const [input_text, setInput_text] = useState('');
    const [topn, setTopn] = useState();
    console.log(fashion2);
    console.log(input_text)
    console.log(topn);

    //topn
    const handleChange = ({target: {value}}) => setTopn(value);
    
    //input 
    const [inputs, setInputs] = useState([]);

    const onCreate = () => {
      setInputs(inputs => [...inputs, input_text]);
      setInput_text('');
    };

    const handleChange2 = (e) =>  {
        setInput_text(e.target.value);
    };


//submit
    const onSubmit = (e) =>  {   
        e.preventDefault();
        const getData = async () => {
            await axios
                .post('http://localhost:8000/img-predict/', {
                    main_category: fashion2.toString(),
                    input_text: input_text.toString(),
                    top_n: topn,
                })
                .then((response) => console.log(response.data))
                .catch((err) => console.log(err));

            // if( !== undefined){
                // window.location.href="http://localhost:3000/recommendation"
                // }
            // else {
            // return null;
            // }
            // console.log("데이터", data);
        };
        getData();
    };
    
    //TAG 클릭 배열 삭제, 추가
    const [tagActive, setTagActive] = useState(false);

    const toggleActive = () =>  {
        setTagActive((tagActive)=>!tagActive)
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>Search</Title>
                <Box>
                    <Subheading>Category</Subheading>
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
                <FormBox onSubmit={onSubmit}>
                    <InputBox>
                        <InputText value={input_text || ''} onChange={handleChange2} placeholder='Search all products' />
                        <InputTopn value={topn || ''} onChange={handleChange} placeholder="Top N"/>
                    </InputBox>

                    <SubmitBox>
                        <Submit onClick={onCreate}>완료</Submit>
                    </SubmitBox>
                </FormBox>
            </Container>
        </>
    );
}

export default Search;
