import PropTypes from 'prop-types';
import {
    TransactionTable, TransactionTableHead,
    TransactionTableHeading, TableBody,
    Transaction, TransactionValue} from './TransactionHistory.styled';

const TransactionHistory = ({items}) => {
    return <TransactionTable>
  <TransactionTableHead>
    <Transaction>
      <TransactionTableHeading>Type</TransactionTableHeading>
      <TransactionTableHeading>Amount</TransactionTableHeading>
      <TransactionTableHeading>Currency</TransactionTableHeading>
    </Transaction>
  </TransactionTableHead>

        <TableBody>
            {items.map(item => {
                return <Transaction key={item.id}>
      <TransactionValue>{item.type}</TransactionValue>
      <TransactionValue>{item.amount}</TransactionValue>
      <TransactionValue>{item.currency}</TransactionValue>
    </Transaction>
            })}
    
  </TableBody>
</TransactionTable>
}


TransactionHistory.propTypes = { 
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}

export default TransactionHistory;