import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import AdviceItem from './components/AdviceItem';
export default class App extends Component {
  state = { quote: '', err: false };

  //   Advice on first render
  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const sendReq = async () => {
      const id = Math.floor(Math.random() * 50);
      const res = await axios.get(`https://api.adviceslip.com/advice/${id}`);

      // if error
      if (res.status !== 200) throw new Error();

      // if no error
      const { advice } = res.data.slip;
      this.setState({ advice });
    };

    // catch error
    sendReq().catch(() => this.setState({ err: true }));
  };

  //   Advice on button click
  generateAdvice = () => this.fetchAdvice();

  render() {
    const advice = this.state.advice;
    return (
      <AdviceItem
        advice={advice}
        err={this.state.err}
        generateAdvice={this.generateAdvice}
      />
    );
  }
}
