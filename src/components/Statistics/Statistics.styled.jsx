import styled from "styled-components";

export const Section = styled.section`
width: 280px;

`;

export const StatsTitle = styled.h2`
font-size: 28px;
font-weight: 500;
text-align: center;
`;

export const StatsList = styled.ul`
display: flex;
background-color: lightgreen;

`;

export const StatsListItem = styled.li`
display: flex;
width: calc(100% / 5);
padding: 12px 8px;
flex-direction: column;
text-align:center;

background-color: ${props => {
    switch (props.type) {
        case ".docx":
            return '#7fffd4';
        case ".pdf":
            return '#cf5acf';
        case ".mp3":
            return '#6ec584';
        case ".psd":
            return '#b84c39';
        default:
            return "#ffffff";
    }
}}
`;