import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import LeftChild from './components/LeftChild';
import RightChildComp from './components/RightChildComp';

const initial = `
   display: flex;
   margin: 0;
   padding: 0px;
 `;

const Container = styled.div`
   ${initial};
    border: 1px solid #EFADA0;
    flex: 1;
    flex-direction: column;
 `;

const Body = styled.div`
    ${initial};
    border: 1px solid brown;
 `;

class App extends Component {
  state = {
    usd: { base: '', date: '', rates: {} },
    eur: { base: '', date: '', rates: {} },
    jpy: { base: '', date: '', rates: {} },
    gbp: { base: '', date: '', rates: {} },
    timer: new Date(),
    cycle: 60*60*1000
  };

  componentWillMount = () => {
    this.loadData();
  }

  componentDidMount = () => {
      this.timerId();
  };

 setCycle = (sbmCycle)=> {
   console.log(sbmCycle);
   this.setState({cycle: sbmCycle * 60 * 1000});
 }

 timerId = () => {
  setTimeout(this.cycleId = () => {
  console.log(this.state.cycle);
  this.loadData();
  this.timerId = setTimeout(this.cycleId, this.state.cycle);
},this.state.cycle)};

loadData = async () => {
  console.log('loaded............');
  this.setState({ timer: new Date()});
  try {
    const fetchedUSD = await this.fetch('USD');
    const fetchedEUR = await this.fetch('EUR');
    const fetchedJPY = await this.fetch('JPY');
    const fetchedGBP = await this.fetch('GBP');
    this.setState({
      usd: fetchedUSD,
      eur: fetchedEUR,
      jpy: fetchedJPY,
      gbp: fetchedGBP
    });
    //console.log(this.state);
  } catch (e) {
    console.log(e);
  }
};

  fetch = async p => {
    try {
      const req = await fetch(`https://api.fixer.io/latest?base=${p}`);
      const result = await req.json();
      return result;
    } catch (e) {
      console.error('Opps', e);
    }
  };

  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Body>
            <Route exac path={'/'}
              render={() => <LeftChild props={this.state.usd} />}
            />
            <Route exact path={'/usd'}
              render={() => <LeftChild props={this.state.usd} />}
            />
            <Route
              exact path={'/eur'}
              render={() => <LeftChild props={this.state.eur} />}
            />
            <Route exact path={'/jpy'}
              render={() => <LeftChild props={this.state.jpy} />}
            />
            <Route exact path={'/gbr'}
              render={() => <LeftChild props={this.state.gbp} />}
            />
            <RightChildComp load={() => this.loadData()}
              t={this.state.timer.toLocaleString()}
              subm={sbmCycle => this.setCycle(sbmCycle)}
            />
          </Body>
        </Container>
      </Router>
    );
  }
}

export default App;
