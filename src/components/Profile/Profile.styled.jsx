import styled from 'styled-components';

export const ProfileCard = styled.div`
width: 300px;
background-color: #dbdbdb;
padding-top: 12px;
border-radius: 4px;
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
margin-right: 50px;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Img = styled.img`
width: 150px;
background-color: #279e1c;
border-radius: 50%;
margin-bottom: 28px;
`;

export const UserName = styled.p`
font-size: 32px;
font-weight: 800;
margin-bottom: 4px;
`;

export const UserTag = styled.p`
font-size: 16px;
color: #929191;
margin-bottom: 8px;
`;

export const Location = styled(UserTag)`
font-size: 20px;
margin-bottom: 32px;
`;

export const StatsList = styled.ul`
display: flex;
background-color: #d9e6e6;
border-top: 1px solid #868686;
border-radius: 4px;
`;

export const StatsListItem = styled.li`
display: flex;
width: calc(100% / 3);
flex-direction: column;
text-align:center;
padding: 12px;

&:not(:last-child){
    border-right: 1px solid #868686;
}
`;

export const StatsName = styled.span`
font-size: 16px;
color: #535353;
`;

export const StatsValue = styled(StatsName)`
color: #000000;
font-weight: 700;
`;
