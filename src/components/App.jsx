import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import appCSS from './App.module.css';

const shortid = require('shortid');

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  #getRandomID = () => {
    const id = shortid.generate();
    return id;
  };

  #getArrayID = arr => {
    const arr_id = arr.map(() => this.#getRandomID());
    return arr_id;
  };

  #getIDAndDataObj = (id, data) => {
    return id.map((id, index) => {
      return { id, data: data[index] };
    });
  };

  #countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  #countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((100 * good) / this.#countTotalFeedback());
  };

  onChooseFeedbackBtn = e => {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnTxt = Object.keys(this.state);
    const btnData = this.#getIDAndDataObj(this.#getArrayID(btnTxt), btnTxt);
    const totalFeedback = this.#countTotalFeedback();
    const positiveFeedback = this.#countPositiveFeedbackPercentage();

    return (
      <div className={appCSS.main_container}>
        <Section
          title={'Please leave feedback'}
          title_style={'header-title'}
          section_style={'feedback-section-container'}
        >
          <FeedbackOptions
            options={btnData}
            onLeaveFeedback={this.onChooseFeedbackBtn}
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
      </div>
    );
  }
}
