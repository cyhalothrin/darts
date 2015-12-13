import React, {Component, PropTypes} from 'react';
import Sector from './Sector';
import PolarCoords from './PolarCoords';
import style from '../../css/sector.css';

class Dartboard extends Component {
  constructor(props) {
    super(props);
    this.polarCoords = new PolarCoords(350, 350);
  }
  shouldComponentUpdate() {
    return false;
  }
  handleThrowDart(points) {
    this.props.onThrowDart(points);
  }
  render() {
    const STEP = 18;
    let angle = 9;
    const sectors = [17, 2, 15, 10, 6, 13, 4, 18, 1, 20, 5, 12, 9, 14, 11, 8, 16, 7, 19, 3];
    const radius = 350;
    const centerCoords = {
      cx: radius,
      cy: radius,
    };

    return (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="700" height="700">
      <g>
        <circle {...centerCoords} r={radius} className={style.board} />
        <circle {...centerCoords} r={0.0857 * radius} className={style.xxOdd} onClick={this.handleThrowDart.bind(this, 25)} />
        <circle {...centerCoords} r={0.0429 * radius} className={style.xxEven} onClick={this.handleThrowDart.bind(this, 50)} />
        {sectors.map((number, index) => {
          const startAngle = angle;
          angle += STEP;
          const options = {
            index,
            number,
            r: radius,
            angle: startAngle,
            polarCoords: this.polarCoords,
            onThrowDart: this.props.onThrowDart,
          };
          return <Sector key={number} {...options} />;
        })}
      </g>
    </svg>);
  }
}

Dartboard.propTypes = {
  onThrowDart: PropTypes.func.isRequired,
};

export default Dartboard;
