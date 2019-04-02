import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';

export default class Page9 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page9-page">
        {/* 产品能力介绍 */}
        <AbilityIntroduction />
      </div>
    );
  }
}
