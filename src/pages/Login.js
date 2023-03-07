import React from 'react';
import styled from 'styled-components';
import loginImg from '../images/logi.png';

import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='github user' />
        <h1>github users </h1>
       
        <Link to='/dashboard' className='btn'>
          log in
        </Link>
    
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    width:15rem;
    margin:auto;
    text-align:center;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
