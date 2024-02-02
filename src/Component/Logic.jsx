import React from 'react';
import './logic.scss'
import GBT from '../Component/GBT';
import Howtouse from '../Component/Howtouse';
export default function Logic() {


  return (
    <div>

    <div className='Main'>
      <header>
      <h2>GPA Calculator</h2>
      <ul>
        {/* <li>Home</li> */}
        <a href="#method">
          <li>How To Calculate</li>
          </a>
      </ul>
      </header>
      <GBT />
    </div>
      <section className='howtosueit'>

      <Howtouse/>
      </section>
      <footer>
        code by <span>
          <a href="mailto:saifurrehman.web@gmail.com">
               Saif Ur Rehman
            </a>
          </span>
      </footer>
        </div>
  );
}
