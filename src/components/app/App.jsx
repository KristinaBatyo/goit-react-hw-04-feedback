import { useState } from "react";
import {AppContainer} from './App.styled'
import {ButtonList} from '../options/FeedbackOptions'
import { Statistics } from "components/statistics/Statistics";
import { Section } from "components/section/Section";
import { Notification } from 'components/notification/Notification.jsx';


export const App =() => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

const options = ['good', 'bad', 'neutral'];

    const handleIncrement = (option) => {
      switch (option) {
        case 'good':
          setGood(state => state + 1);
          break;
  
        case 'neutral':
          setNeutral(state => state + 1);
          break;
  
        case 'bad':
          setBad(state => state + 1);
          break;
  
        default:
          alert('Something went wrong');
          break;
      }
    };

    const totalFeedback = good + bad + neutral;

        const countPositiveFeedbackPercentage = () => {
        return Math.round((good / (good + neutral + bad)) * 100);
    };

  return (

    <AppContainer>
    <Section title={'Please leave your feedback'}>
    <ButtonList options={options} onLeaveFeedback={handleIncrement}/>
    </Section>
    <Section title={'Statistics'}>
    {totalFeedback > 0 && <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={countPositiveFeedbackPercentage} />}
    {totalFeedback < 1 && <Notification message="There is no feedback"></Notification>}
    </Section>
    </AppContainer>

  );
};
