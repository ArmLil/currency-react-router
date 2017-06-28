import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import {generator} from 'uigradients';
const img_url = 'https://apetcher.files.wordpress.com/2012/10/img_3398.jpg';

const RightChild = styled.div `
  display: flex;
  margin: 0;
  padding: 15px;
  height: auto;
  overflow: hidden;
  justify-content: space-around;
  background-color:hsla(57, 100%, 68%, 0.30);
  box-shadow: inset 1px 1px 5px #000000;
  @media all and (max-width: 650px) {
    flex-wrap:wrap;
 }
  border: 2px solid hsla(22, 100%, 40%, 0.44) ;
  flex: 0.7;
`;
const Button = styled.button `
     display: flex;
     flex-wrap: column wrap;
     padding: 1px;
     font-size: 16px;
     width: 100px;
     height:60px;
     border-radius: 50px;
     ${generator({
	    gradient: 'decent'})};
  `;
  const Submit = styled.button`
   padding: 2px;
   width: 32px;
   height: 25px;
   border-radius: 5px;
   font-size:8px;
   background-color: hsl(240, 100%, 87%);
  `;

	const InpContainer = styled.div `
     padding: 10px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     width : 180px;
     height: 360px;
     border-radius: 50px;
     border: 2px solid hsla(240, 50%, 90%, 1) ;
     background-color: hsla(240, 50%, 90%, 0.5);
     box-shadow: inset 1px 1px 5px #000000;
     @media all and (max-width: 650px) and (min-width: 450px) {
        flex-direction: row;
        align-items: center;
        padding: 1px;
        width : 360px;
        height: 180px;
        padding: 10px;
        flex-flow: column wrap;
    }
   `;

	const Ranger = styled.input `
    width: 140px;
   `;
   const P = styled.p`
     font-size: 14px;
   `;
	const Div = styled.div`
     padding: 10px;
     padding-bottom: 10px;
     display:flex;
     align-items: center;
     justify-content: space-around;
     flex-direction: column;
     flex:0.4;

     @media all and (max-width: 650px) and (min-width: 450px){
        flex-direction: row;
        flex:0.2;
        height: 270px;
        padding: 1px;
      }
    `;

  const InputStyle = styled.input`
    width:70px;
    &:hover {
     box-shadow: inset 1px 1px 5px #000000;
     font-size: 18px;
     width: 100px;
     color: blue;
    }
  `;


	const _icon = {
		margin: '5',
		height: 'calc(70px + 10vw)',
		borderRadius: '15%'
	};
	/*
     timerId = () =>
     {
       this.setState({time: new Date()});
       setTimeout(this.timerId,5000);
     }

     timerID();
   */
	class RightChildComp extends React.Component {
		state = {
			initial_value: 43200,
			img: img_url
		};

		inputHandler = (evn) => {
			this.setState({initial_value: evn.target.value});
      ///////////////////
		}

		clickHandler = () => {
			this.props.load();
		}

    submitHandler = () => {
      const cycle = this.state.initial_value;
      console.log(cycle);
      this.props.subm(cycle);
    }

		render() {
			return (
				<RightChild >
					<Div>
						<InpContainer>
							<Button onClick={this.clickHandler}>Get Current Rates</Button>
							<P>{this.props.t}</P>
							<Ranger type={'range'}
                min={0} max={86400}
                value={this.state.initial_value}
                step={1} onChange={this.inputHandler}/>
							<P>Ubdate Cycle</P>
              <div style={{
                display:'flex',
                justifyContent: 'space-between',
                flexDirection:'row',
                width: '130px'
                }}>
              <InputStyle type='text'
                value={this.state.initial_value}
                onChange={this.inputHandler}
                />
              <Submit onClick={this.submitHandler}>Submit</Submit>
              </div>
							<P>minutes: {this.state.initial_value}</P>
							<P>hours: {Math.round(this.state.initial_value / 60 *1000)/1000}</P>
							<P>days: {Math.round(this.state.initial_value / 1440 * 1000)/1000}</P>
						</InpContainer>
					</Div>
					<Div>
						<Clock/>
						<img alt={''} src={this.state.img} style={_icon}/>
					</Div>
				</RightChild>
			)
		}
	}

	export default RightChildComp;
