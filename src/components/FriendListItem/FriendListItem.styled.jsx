import styled from 'styled-components';

export const ListItem = styled.li`
display: flex;
align-items: center;
padding: 12px 8px;
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
width: 200px;
border-radius: 4px;

&:not(:last-child){
    margin-bottom: 8px;
}
`;

export const Img = styled.img`
margin-right: 8px;
`;

export const Status = styled.span`
margin-right: 8px;

svg {
    fill: ${(props) => {
    return props.online ? 'green' : 'red';
}}
}
`;

export const UserName = styled.p`
font-weight: 700;
`;

