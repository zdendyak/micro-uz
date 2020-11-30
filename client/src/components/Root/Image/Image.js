import React from 'react';
import styled from 'styled-components';
import train from '#root/assets/train.jpg';

const Wrapper = styled.div`
  display: flex;
  max-height: 500px;
  background-color: #eee;
  padding: 20px 50px;
  margin-bottom: 30px;
`;

const Image = () => {
  return <Wrapper>
    <img src={train} className="img-fluid" />
  </Wrapper>
};

export default Image;
