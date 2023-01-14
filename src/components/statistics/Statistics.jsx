import PropTypes from 'prop-types';

import { StatisticsContainer, StatisticsParagraph } from './Statistics.styled';

    export const Statistics = ({good, neutral, bad, total, positivePercentage,}) => {
    return (
        <StatisticsContainer>
        <StatisticsParagraph>Good: {good}</StatisticsParagraph>
        <StatisticsParagraph>Neutral: {neutral}</StatisticsParagraph>
        <StatisticsParagraph>Bad: {bad}</StatisticsParagraph>
        <StatisticsParagraph>Total: {total}</StatisticsParagraph>
        <StatisticsParagraph>Positive: {positivePercentage()}%</StatisticsParagraph>
        </StatisticsContainer>
    );
    };

    Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.func.isRequired,
    };