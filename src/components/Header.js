import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { generator } from 'uigradients';

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
const shadow = `-5px -5px 2px hsla(8, 71%, 50%, 0.7),
             -3px -3px 2px hsla(8, 71%, 50%, 0.7),
             -1px -1px 2px hsla(8, 71%, 50%, 0.7)`

 const Title = styled.div`
    cursor:pointer;
    text-shadow: ${shadow};
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

const Header = () => (
  <Head>
    <h1 style = {{paddingRight: '80px',
      fontSize: 'calc(18px + 0.9vw)',
      color:'hsla(148, 31%, 10%, 0.79)',
      textShadow: `${shadow}`}}>
    Currency Conversion Rates</h1>
    <Title>
      <Link to="/usd" style={{color: 'black'}}
        name={'usd'}> USD-$ </Link> </Title>
    <Title>
      <Link to={"/eur"} style={{color: 'black'}}
      name={'eur'}>EUR-€ </Link></Title>
    <Title>
      <Link to="/jpy" style={{color: 'black'}}
      name={'jpy'}> JPY-¥ </Link></Title>
    <Title>
      <Link to="/gbr" style={{color: 'black'}}
      name={'gbp'}> GBP-£ </Link></Title>
  </Head>
)
export default Header;
