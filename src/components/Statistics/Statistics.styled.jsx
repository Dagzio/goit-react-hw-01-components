import styled from "styled-components";

export const Section = styled.section`
width: 280px;
margin-right: 50px;
background-color: #dbdbdb;
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
`;

export const StatsTitle = styled.h2`
font-size: 28px;
font-weight: 500;
text-align: center;
padding: 12px;
`;

export const StatsList = styled.ul`
display: flex;
`;

export const StatsListItem = styled.li`
display: flex;
width: calc(100% / 5);
padding: 8px 4px;
flex-direction: column;
text-align:center;


background-color: ${props => {
    switch (props.type) {
        case ".docx":
            return '#63cdaa';
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

export const ItemLabel = styled.span`
font-size: 12px;
color: #ffffff
`;

export const ItemPercentage = styled(ItemLabel)`
font-size: 20px;
`;