import React, {Component, PropTypes} from 'react';
import PolarCoords from './PolarCoords';
import style from '../../css/Sector.css';

class Point extends Component {
  constructor(props) {
    super(props);
    this.polarCoords = props.polarCoords;
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const options = {
      x: this.polarCoords.xPx(this.props.r, this.props.angle),
      y: this.polarCoords.yPx(this.props.r, this.props.angle),
      className: style.point,
    };
    return <text {...options}>{this.props.number}</text>;
  }
}

Point.propTypes = {
  r: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  polarCoords: PropTypes.instanceOf(PolarCoords),
};

export default Point;
