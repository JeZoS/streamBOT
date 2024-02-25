"use client";

import React from 'react'
import Wrapper from './wrapper'
import { useCreatorSidebar } from '@/store/use-creater-sidebar';
import Toggle from './toggle';
import Navigation from './navigation';

const Sidebar = () => {

  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  )
}

export default Sidebar