import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const api = {
    key: '1dddeae94de229750108c007a33d2d58',
    base_url: 'https://api.openweathermap.org/data/2.5/',
  };

  const dateBuilder = (data) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const day = days[data.getDay()];
    const date = data.getDate();
    const month = months[data.getMonth()];
    const year = data.getFullYear();

    return `${day} ${data} ${month} ${year}`;
  };

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base_url}weather?q=${query}&appid=${api.key}&units=metric`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  return (
    <div className="main">
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="location-container">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}
