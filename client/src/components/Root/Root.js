import React from 'react';
import styled from 'styled-components';

import Image from './Image';
import Schedule from './Schedule';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const Root = () => {
  return <Wrapper>
    <div className="container">
      <Image />
      <Schedule />
    </div>
  </Wrapper>;
};

export default Root;
