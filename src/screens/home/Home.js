import React, { Component } from 'react'
import './Home.css';
import Header from '../../common/header/Header';
import SingleLineGridList from '../../common/SingleLineGridList';
import Left from './Left';
import Right from './Right';
// import Menu from '@mui/material/Menu';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='header-home'>
          <span >Upcoming Movies</span>
        </div>
        <SingleLineGridList />
        <div className='flex-container'>
          <div className='left'>
            <Left/>
          </div>
          <div className='right'>
            <Right />
          </div>
        </div>
      </div>
    )
  }
}
