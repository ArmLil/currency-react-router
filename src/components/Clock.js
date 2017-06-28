import React from 'react';
import styled from 'styled-components';
import { generator } from 'uigradients';

const Border = styled.div`
  &:hover {
   -moz-box-shadow: 0 0 20px hsl(0, 65%, 50%);
   -webkit-box-shadow: 0 0 20px hsl(0, 65%, 50%);
   box-shadow: 5px 5px 20px hsl(0, 65%, 50%);
   }
  display: flex;
  justify-content: space-around;
  border: 1px solid hsla(22, 100%, 40%, 0.8);
  padding: 8px;
  border-radius: ${props => props.inner ? '10px' : '15px'};
  height: ${props => props.inner ? '18px' : '40px'};
  width: ${props => props.inner ? '100px' : '120px'};
  background-color: ${props => props.inner
    ? 'white'
    : generator({gradient: 'timber'})};
`;

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()}
  }

  componentDidMount =() => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {this.setState({date:new Date()});}

  render(){
    return(
      <div>
       <Border>
       <Border inner>
         {this.state.date.toLocaleTimeString()}
         </Border>
       </Border>
     </div>
    );
  }
}

export default Clock;
