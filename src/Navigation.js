import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation(props) {
  const [navElements, setNavElements] = useState([]);
  
  useEffect(() => {
    const elements = document.querySelectorAll('.navElement');

    const elementArray = Array.from(elements).map((element, index) => ({
      key: index ,
      name: element.id
    }));

    setNavElements(elementArray);
  }, []);

  return (
    <nav className="Navigation" id={props.id}>
      <ul>
        {navElements.map((element) => {return (
          <a href={`#${element.name}`} key={element.key}>
            <li>{element.name}</li>
          </a>
        )})}
      </ul>
    </nav>
  );
}

export default Navigation;