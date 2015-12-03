import React, { Component, PropTypes } from 'react';
import PolarCoords from './PolarCoords';

class RingSector extends Component {
  constructor(props) {
    super(props);
    this.polarCoords = props.polarCoords;
  }
  shouldComponentUpdate() {
    return false;
  }
  path(r1, r2, angle1, angle2) {
    const CLOCKWISE = 1;
    const COUNTERCLOCK = 0;

    const xy1 = this.xy(r1, angle1);
    const arc1 = this.arc(r1, this.xy(r1, angle2), CLOCKWISE);
    const xy2 = this.xy(r2, angle2);
    const arc2 = this.arc(r2, this.xy(r2, angle1), COUNTERCLOCK);

    return `M${xy1} ${arc1} L${xy2} ${arc2} z`;
  }
  xy(r, angle) {
    const x = this.polarCoords.xPx(r, angle);
    const y = this.polarCoords.yPx(r, angle);

    return `${x},${y}`;
  }
  arc(r, xy, sweep) {
    return `A${r},${r} 0 0,${sweep} ${xy}`;
  }
  render() {
    const path = this.path(
      this.props.r1,
      this.props.r2,
      this.props.angle1,
      this.props.angle2
    );

    return <path d={ path } className={ this.props.className } />;
  }
}

RingSector.propTypes = {
  className: PropTypes.string.isRequired,
  r1: PropTypes.number.isRequired,
  r2: PropTypes.number.isRequired,
  angle1: PropTypes.number.isRequired,
  angle2: PropTypes.number.isRequired,
  polarCoords: PropTypes.instanceOf(PolarCoords),
};

export default RingSector;
