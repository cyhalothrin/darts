import React, { Component, PropTypes } from 'react';
import PolarCoords from './PolarCoords';
import RingSector from './RingSector';
import Point from './Point';
import style from '../../css/Sector.css';

class Sector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverSector: 0,
    };
  }
  shouldComponentUpdate() {
    return false;
  }
  handleThrowDart(points) {
    this.props.onThrowDart(points);
  }
  render() {
    const SECTOR_ANGLE = 18;
    const r = this.props.r * 0.8571;
    const r2 = r * 0.93;
    const r3 = r * 0.57;
    const r4 = r * 0.5;
    const r5 = r * 0.1;
    const options = {
      angle1: this.props.angle,
      angle2: this.props.angle + SECTOR_ANGLE,
      polarCoords: this.props.polarCoords,
    };
    const pointOptions = {
      r: this.props.r * 0.9286,
      polarCoords: this.props.polarCoords,
      number: this.props.number,
      angle: this.props.angle + 9,
    };

    let x1ClassName;
    let xxClassName;

    if (this.props.index % 2) {
      x1ClassName = style.x1Odd;
      xxClassName = style.xxOdd;
    } else {
      x1ClassName = style.x1Even;
      xxClassName = style.xxEven;
    }

    return (<g className="sector">
      <RingSector r1={r2} r2={r5} className={x1ClassName} {...options} onClick={this.handleThrowDart.bind(this, this.props.number)} />
      <RingSector r1={r} r2={r2} className={xxClassName} {...options} onClick={this.handleThrowDart.bind(this, this.props.number * 2)} />
      <RingSector r1={r3} r2={r4} className={xxClassName} {...options} onClick={this.handleThrowDart.bind(this, this.props.number * 3)} />
      <Point {...pointOptions} />
    </g>);
  }
}

Sector.propTypes = {
  r: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  polarCoords: PropTypes.instanceOf(PolarCoords),
  onThrowDart: PropTypes.func.isRequired,
};

export default Sector;
