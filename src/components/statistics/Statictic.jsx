
import {StatisticsContainer, StatisticsTitle, StatisticsParagraph} from "./Statistics.styled";
import PropTypes from 'prop-types';



export const Statisitc = ({good, neutral, bad, total, positivePercentage}) => {

    return (
        <StatisticsContainer>
            <StatisticsTitle>Statistics</StatisticsTitle>
            <StatisticsParagraph>Good: {good}</StatisticsParagraph>
            <StatisticsParagraph>Neutral: {neutral}</StatisticsParagraph>
            <StatisticsParagraph>Bad: {bad}</StatisticsParagraph>
            <StatisticsParagraph>Total: {total}</StatisticsParagraph>
            <StatisticsParagraph>Positive feedback: {positivePercentage}%</StatisticsParagraph>
        </StatisticsContainer>
    )
}

Statisitc.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}






