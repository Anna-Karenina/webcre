import * as React from 'react';
import './Navbar.scss'
import { Navbar } from 'react-bootstrap'

export default function Header(){
  return (
    <Navbar bg="light" className='header'>
      <Navbar.Brand href="#home"><span>Тестовое задание</span></Navbar.Brand>
    </Navbar>
  )
}