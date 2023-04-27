// отсюда експорт компонентов со стилями
import styled from 'styled-components';

export const ProfileCard = styled.div`
width: 320px;
background-color: #dbdbdb;
padding-top: 12px;
border-radius: 4px;
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
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
background-color: #e1e4e4;
justify-content: space-around;
padding: 16px;
border-top: 1px solid #868686;
`;

export const StatsListItem = styled.li`
display: flex;
flex-direction: column;
text-align:center;
`;

export const StatsName = styled.span`
font-size: 16px;
color: #535353;
`;

export const StatsValue = styled(StatsName)`
color: #000000;
font-weight: 700;
`;
