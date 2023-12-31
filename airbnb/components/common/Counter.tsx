"use client";
import React, { useEffect, useState } from 'react'
import AnimatedNumbers from "react-animated-numbers";

function Counter({num}:{num:number}) {
    const [state, setState] = useState(false);
    useEffect(() => { 
        setState(true);
    }, []);
  return (
    <div>
          {state &&
              <AnimatedNumbers
              includeComma
              animateToNumber={num}
              fontStyle={{ fontSize: 40, fontWeight: "bold" }}
              locale="en-US"
              configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
              ]}
          ></AnimatedNumbers>}
    </div>
  )
}

export default Counter
