import {useState} from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notofication/Notification';

export const App= ()=>{

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
    
  const optionName = ['good', 'neutral', 'bad'];
    
  const userLeaveFeedback = options=> {
      
      switch (options) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
          default:
        return;
    }
  };

const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
	}  
const countPositiveFeedbackPercentage =()=> {
    const total = countTotalFeedback();
    return Math.round(good *100/total);
    };
       
        const total = countTotalFeedback();
        const positivePercentage = countPositiveFeedbackPercentage();
       
    return (
      <div
         style={{
         height: '100vh',
         textAlign: 'center',
         fontSize: 40,
         color: '#010101'
       }}>
        
          <Section title="Please leave feedback">
                <FeedbackOptions
                    options={optionName} 
                    onLeaveFeedback={userLeaveFeedback }   
            />
          </Section>
            {total === 0 ?
                    (<Notification message="There is no feedback" />
                    ):(<Section title="Statistics">
                       <Statistics
                          good={good}
					      neutral={neutral}
					      bad={bad}
					      total={total}
                          positivePercentage={positivePercentage} />
          </Section>)}
        </div>
    );
    
}
