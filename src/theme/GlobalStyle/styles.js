import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    body {
        background: #1F2128;
        color: #FAFBFB;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
`;
export const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-content: flex-start;
	width: 100%;
`;
