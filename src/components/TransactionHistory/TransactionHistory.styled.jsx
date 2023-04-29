import styled from "styled-components";

export const TransactionTable = styled.table`
border-spacing: unset;
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
border-radius: 4px;
`;

export const TransactionTableHead = styled.thead``;

export const TransactionTableHeading = styled.th`
padding: 8px 50px;
text-align: left;
background-color: #6495ed;
color: #ffffff;
&:not(:last-child){
border-right: 1px solid #ffe4c4;
}
`;

export const TableBody = styled.tbody``;


export const Transaction = styled.tr`
&:nth-child(2n) {
  background-color: #ffe4c4;
}


`;

export const TransactionValue = styled.td`
width: 120px;
padding: 8px 50px;
text-align: left;
&:not(:last-child){
border-right: 1px solid grey;
}
`;

