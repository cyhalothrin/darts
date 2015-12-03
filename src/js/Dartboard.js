import React from 'react';
import Sector from './Sector';
import PolarCoords from './PolarCoords';
import style from '../css/sector.css';

class Dartboard extends React.Component {
  constructor(props) {
    super(props);
    this.polarCoords = new PolarCoords(350, 350);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const STEP = 18;
    let angle = 9;
    const sectors = [17, 2, 15, 10, 6, 13, 4, 18, 1, 20, 5, 12, 9, 14, 11, 8, 16, 7, 19, 3];
    const radius = 350;

    return (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="700" height="700">
      <g>
        <circle cx={radius} cy={radius} r={radius} className={style.board} />
        <circle cx={radius} cy={radius} r={0.0857 * radius} className={style.xxOdd} />
        <circle cx={radius} cy={radius} r={0.0429 * radius} className={style.xxEven} />
        {sectors.map((number, index) => {
          const startAngle = angle;
          angle += STEP;
          const options = {
            index,
            number,
            r: radius,
            angle: startAngle,
            polarCoords: this.polarCoords,
          };
          return <Sector key={number} {...options} />;
        })}
      </g>
    </svg>);
  }
}

export default Dartboard;
