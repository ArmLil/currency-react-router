import React from 'react';
import styled from 'styled-components';
import { generator } from 'uigradients';
import { Link } from 'react-router-dom';
//import LeftChild from './leftChild';
//const URL = 'http://api.fixer.io/latest?base=';

const Head = styled.div`
 ${generator({gradient: 'haikus'})};
   border: 1px solid brown;
   margin 0;
   padding: 10px;
   padding-left: 20px;
   height : auto;
   display: flex;
   align-items: center;
   justify-content: space-around;
   @media all and (max-width: 550px) {
     flex-wrap: wrap;
  }
`;

const Title = styled.div`
  cursor:pointer;
  text-shadow: -5px -5px 2px hsla(8, 71%, 50%, 0.7),
              -3px -3px 2px hsla(8, 71%, 50%, 0.7),
              -1px -1px 2px hsla(8, 71%, 50%, 0.7);

   border: 1px solid hsla(8, 71%, 50%, 0.7);
   border-radius: 10px;
   margin: 0;
   width: 100px;
   height: 40px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   &:hover {
    -moz-box-shadow: 0 0 20px hsl(0, 65%, 50%);
    -webkit-box-shadow: 0 0 20px hsl(0, 65%, 50%);
    box-shadow: 5px 5px 20px hsl(0, 65%, 50%);
    }
`;

class Header extends React.Component {
  constructor() {
      super();
        this.state = {base: '', date: '', rates: {}};
      }

  clickHandler = (p) => {
    //console.log({this.state});
    console.log(p.target.name);
    this.fetch(p.target.name);
  }

   fetch = async(p)=>{
    console.log(p);
    try{
      const req = await fetch(`http://api.fixer.io/latest?base=${p}`);
        const result = await req.json();
        console.log(result);
        this.setState({base: result.base, date: result.date,
           rates: result.rates});
           return this.state;
        } catch(e){
        console.error('Opps', e)
      }
    };


  render(){
    return (
      <Head>
        <h3 style = {{paddingRight: '80px',
          color:'hsla(148, 31%, 10%, 0.79)'}}>
        Currency Conversion Rates</h3>
          <Title>
            <Link to="/usd" style={{color: 'black'}}
              onClick={this.clickHandler}> USD-$
            </Link>
          </Title>
          <Title>
            <Link to="/eur" style={{color: 'black'}}
            name={'EUR'}  onClick={this.clickHandler}> EUR-€ </Link>
          </Title>
          <Title>
            <Link to="/jpy" style={{color: 'black'}}
              onClick={this.clickHandler}> JPY-¥ </Link>
          </Title>
          <Title>
            <Link to="/gbr" style={{color: 'black'}}
              onClick={this.clickHandler}> GBR-£ </Link>
          </Title>
        </Head>

    );
  }
}

export default Header;
