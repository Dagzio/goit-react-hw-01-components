import PropTypes from 'prop-types'
import { Section } from "./Statistics.styled";
import { StatsTitle } from "./Statistics.styled";
import { StatsList } from "./Statistics.styled";
import { StatsListItem } from "./Statistics.styled";


const Statistics = ({ title, stats }) => {
  return <Section>
    {title !== '' && <StatsTitle>{title}</StatsTitle>}
        <StatsList>
      {stats.map(statsBox => {
        return <StatsListItem className="item" key={statsBox.id} type={statsBox.label}>
          <span className="label">{statsBox.label}</span>
          <span className="percentage">{statsBox.percentage}%</span>
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