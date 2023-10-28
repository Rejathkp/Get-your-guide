import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

function Backgrnd() {
    const[calnder,setcalnder]= useState(false);
    const Dateclck= () => {
        setcalnder(!calnder);
    }
  return (
    <div className='bg_sec'>
        <div className='wrap_sec'>
            <FiSearch className='search-icon' />
            <input type='text' placeholder='Search' id='search'/>

        </div>

        <div className='date_sec'>
        <input type='text' placeholder='Add Dates' id='search' onClick={Dateclck} />
        {calnder && <Calendar/>}
        </div>

        <h3>Things to do in</h3>
        <h1>Kerala</h1>
    </div>
  )
}

export default Backgrnd