import { Statisitc } from 'components/statistics/Statictic.jsx';
import { Component } from 'react';
import { FeedbackContainer} from './Feedback.styled.jsx';
import { ButtonList } from 'components/options/FeedbackOptions.jsx';
import { Notification } from 'components/notification/Notification.jsx';
import { Sections } from 'components/sections/sections.jsx';


//     render () {
//         const { good, neutral, bad } = this.state;
//         const total = this.totalFeedback();
//         const positivePercentage = this.positivePercentage();
//         return (
//             <Sections title="Please leave feedback">
//                 <FeedbackContainer>
//                     <Notification message="No feedback given" />
//                     <ButtonList options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleIncrement} />
//                     <Statisitc good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
//                 </FeedbackContainer>
//             </Sections>
//         )
//     }
// }

//блок статистики рендериться тільки після того, як було зібрано хоча б один відгук

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrement = (e) => {
        const name = e.target.name;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };

    totalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    positivePercentage = () => {
        return parseInt((this.state.good / this.totalFeedback()) * 100);
    };


    render () {
        const { good, neutral, bad } = this.state;
        const total = this.totalFeedback();
        const positivePercentage = this.positivePercentage();
        return (
            <Sections title="Please leave feedback">
                <FeedbackContainer>
                    <Notification message="No feedback given" />
                    <ButtonList options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleIncrement} />
                    {total > 0 && <Statisitc good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
                </FeedbackContainer>
            </Sections>
        )
    }
}