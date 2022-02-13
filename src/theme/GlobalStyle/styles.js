import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    body {
        background: #1F2128;
        color: #FAFBFB;
        font-size: 16px;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }

    .ant-select-item.ant-select-item-option.ant-select-item-option-active {
		color: #1F2128 !important;
	}

    .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background: #06d554 !important;
        color: #1F2128 !important;
    }

    .ant-select-item.ant-select-item-option {
		color: #FFF !important;
	}

    .ant-select-dropdown {
        background: #1F2128 !important;
    }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-content: flex-start;
	width: 100%;
	font-family: "Poppins", sans-serif;
	align-items: center;
`;
