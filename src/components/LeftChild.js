import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
   display: flex;
   margin: 0;
   padding: 0;
   border: 2px solid hsla(228, 20%, 50%, 0.4);
   flex-direction: column;
   height: 500px;
   width: 70%;
   min-width: 100px;
   overflow: scroll;
`;
const Row = styled.div`
  diplay: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  padding-left: 16px;
  margin: 0;
  border:1px solid grey;
  background-color: hsl(240, 100%, 90%);
  height: auto;
  width: 98%;
  color: grey;
  &:hover {
   box-shadow: inset 1px 1px 5px #000000;
   font-size: 25px;
   color: black;
  }
`;

const Foot = styled.div`
   padding : 5px;
   padding-left: 30px;
   padding-top: 20px;
   height: auto;
   width: auto;
   overflow: hidden;
   resize: horizontal;
   box-shadow: inset 1px 1px 5px #000000;
   background-color:hsla(57, 100%, 68%, 0.30);
   border: 2px solid hsla(22, 100%, 40%, 0.44) ;
   flex: 0.3;
   @media all and (max-width: 450px) {
     flex-grow: 0.5;
  }
`;

const LeftChild = ({ props }) => {
  const arr_of_keys = Object.keys(props.rates);
  const arr_of_values = Object.values(props.rates);
  const n = arr_of_keys.length;

  const Obj_arr = () => {
    let obj_arr = [];
    let k = 0;
    for (let i = 0; i < n; ++i) {
      obj_arr.push(`${arr_of_keys[i]} : ${arr_of_values[i]}`);
    }
    return obj_arr.map(e =>
      <Row
        key={e}
        style={{
          backgroundColor: `
            hsl(240, 100%, ${90 + k++ / 2}%)
            `
        }}>
        {e}
      </Row>
    );
  };

  return (
    <Foot>
      <Form>
        <Row style={{ fontSize: '20px', color: 'black' }}>{props.base}</Row>
        <Row style={{ fontSize: '20px', color: 'black' }}>{props.date}</Row>
        {Obj_arr()}
      </Form>
    </Foot>
  );
};

export default LeftChild;
