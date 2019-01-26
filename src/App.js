import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import LeftChild from './components/LeftChild';
import RightChildComp from './components/RightChildComp';
// import './App.css';

const initial = `
   display: flex;
   margin: 0;
   padding: 0px;
 `;

const Container = styled.div`
   ${initial};
    height: 100vh;
    border: 1px solid #EFADA0;
    flex: 1;
    flex-direction: column;
 `;

const Body = styled.div`
    ${initial};
    flex:1;
    border: 1px solid brown;
 `;

class App extends Component {
  state = {
    usd: { base: '', date: '', rates: {} },
    eur: { base: '', date: '', rates: {} },
    jpy: { base: '', date: '', rates: {} },
    gbp: { base: '', date: '', rates: {} },
    timer: new Date(),
    cycle: 5*60*1000
  };

  componentDidMount = () => {
    this.loadData();
    this.timerId();
  };


 setCycle = (sbmCycle)=> {
   this.setState({cycle: sbmCycle*'60000'});
   this.loadData();
 }


 timerId = () => {
  setTimeout(this.cycleId = () => {
  this.setState({ timer: new Date()});
  this.timerId = setTimeout(this.cycleId, this.state.cycle);
}, this.state.cycle)};

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
    } catch (e) {
      console.log(e);
    }
  };

  fetch = async p => {
    try {
      // the previous version of api , currently it does not allow to use for free
      // const req = await fetch(`https://api.fixer.io/latest?base=${p}`);
      /////////////////////////////////////////////////////////////////////
      // we cannot use "base" for free
      // const req = await fetch(`http://data.fixer.io/api/latest?access_key=155b1b16a267e50df44dcbf9970c49e7&base=${p}`);
      const req = await fetch(`http://data.fixer.io/api/latest?access_key=155b1b16a267e50df44dcbf9970c49e7`);
      //this will show only default base=EUR


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
            <Route exact path={'/'} render={()=> <LeftChild props={this.state.usd}/>}/>
            <Route exact path={'/usd'} render={()=> <LeftChild props={this.state.usd}/>}/>
            <Route exact path={'/eur'} render={()=> <LeftChild props={this.state.eur}/>}/>
            <Route exact path={'/jpy'} render={()=> <LeftChild props={this.state.jpy}/>}/>
            <Route exact path={'/gbp'} render={()=> <LeftChild props={this.state.gbp}/>}/>
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
