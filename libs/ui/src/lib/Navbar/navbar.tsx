import React from 'react';

import styled from 'styled-components';

export interface NavbarProps {
  MenuItems?: never[]
}

const Wrapper = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.header?.bgColor ? props.theme.header.bgColor : 'white'};
  border-bottom: 1px solid ${props => props.theme.header?.borderColor ? props.theme.header.borderColor  : '#e3ebf6'};
`


export const Navbar = (props: NavbarProps) => (
  <Wrapper>
    Hello world
  </Wrapper>
)
