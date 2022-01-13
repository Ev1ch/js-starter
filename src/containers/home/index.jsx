import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './logic/actions';
import { Home as HomePage } from 'components/pages';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.action());
  });

  return <HomePage />;
}

export default Home;
