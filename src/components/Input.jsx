import React from 'react'
import {useState, useRef} from 'react';

function Input({setIp, setLocation, setWhere}) {

  const [input, setInput] = useState("");

  // const inputRef = useRef(null);

  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  // function handleClick() {
  //   setInput(inputRef.current.value);
  //   console.log(input);
  // }

  async function getEnterAdderss() {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_M8ZTRBUI0NRcvVA5pvr0WkTRqnquP&${checkIpAddress.test(input) ? `ipAddress=${input}` : checkDomain.test(input) ? `domain=${input}` : ""}`)
    const data = await res.json();
    setLocation(data);
    setWhere({
      x: data.location.lat,
      y: data.location.lng
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    getEnterAdderss()
    console.log('submited')
  }

  return (
    <div className='text-center bg-blue-800 h-[550px] md:h-[250px] z-0'>
        <div>
            <h1 className='text-3xl font-semibold text-white pt-8'>IP Address Tracker</h1>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
              <input value={input} onChange={(e) => setInput(e.target.value )} className='mt-8 h-12 w-80 px-3 rounded-xl text-start' type="text" placeholder="Search for any IP address or domain" />
              <button className='hidden bg-black text-white h-12 w-24 rounded-xl ml-4' type='submit'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Input