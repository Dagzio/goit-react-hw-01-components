import PropTypes from 'prop-types'
import {
  Section, StatsTitle,
  StatsList, StatsListItem,
  ItemLabel, ItemPercentage
} from "./Statistics.styled";


const Statistics = ({ title, stats }) => {
  return <Section>
    {title !== '' && <StatsTitle>{title}</StatsTitle>}
        <StatsList>
      {stats.map(statsBox => {
        return <StatsListItem key={statsBox.id} type={statsBox.label}>
          <ItemLabel className="label">{statsBox.label}</ItemLabel>
          <ItemPercentage className="percentage">{statsBox.percentage}%</ItemPercentage>
        </StatsListItem>
      })}
    </StatsList>
    </Section>
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};


export default Statistics;