import React, { Component, PropTypes } from 'react';
import style from '../../css/NullPoint.css';

class NullPoint extends Component {
  render() {
    return <text x="0" y="78" className={style.label} onClick={this.props.onThrowDart}>0</text>;
  }
}

NullPoint.propTypes = {
  onThrowDart: PropTypes.func.isRequired,
};

export default NullPoint;
