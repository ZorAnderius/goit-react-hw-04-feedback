import React, { useEffect } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import appCSS from './App.module.css';

const shortid = require('shortid');

const getRandomID = () => {
  const id = shortid.generate();
  return id;
};

const getArrayID = arr => {
  const arr_id = arr.map(() => getRandomID());
  return arr_id;
};

const getIDAndDataObj = (id, data) => {
  return id.map((id, index) => {
    return { id, data: data[index] };
  });
};

const countTotalFeedback = ({ good, neutral, bad }) => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
  return Math.round((100 * good) / countTotalFeedback({ good, neutral, bad }));
};

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onChooseFeedbackBtn = e => {
    if (e === 'good') {
      setGood(state => state + 1);
    }
    if (e === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (e === 'bad') {
      setBad(state => state + 1);
    }
  };

  const btnTxt = ['good', 'neutral', 'bad'];
  const btnData = getIDAndDataObj(getArrayID(btnTxt), btnTxt);
  const totalFeedback = countTotalFeedback({ good, neutral, bad });
  const positiveFeedback = countPositiveFeedbackPercentage({
    good,
    neutral,
    bad,
  });

  return (
    <div className={appCSS.main_container}>
      <Section
        title={'Please leave feedback'}
        title_style={'header-title'}
        section_style={'feedback-section-container'}
      >
        <FeedbackOptions
          options={btnData}
          onLeaveFeedback={onChooseFeedbackBtn}
        />
      </Section>
      <Section
        title={'Statistics'}
        title_style={'statistics-title'}
        section_style={'stat-section-container'}
      >
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      ;
    </div>
  );
};
