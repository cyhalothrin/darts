import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { throwDart } from '../actions/actions';
import Dartboard from '../components/Dartboard';
import PointsBoard from '../components/PointsBoard';
import grid from '../../css/grid.css';

class DartsApp extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div className={grid.container}>
        <div className={[grid.col4, grid.offset2].join(' ')}>
          <Dartboard onThrowDart={(points) => dispatch(throwDart(points))} />
        </div>
        <div className={grid.col2}>
          <PointsBoard points={this.props.points} player={this.props.player}/>
        </div>
      </div>
    );
  }
}

DartsApp.propTypes = {
  points: PropTypes.array.isRequired,
  player: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function select(state) {
  return {
    points: state.points,
    player: state.player,
  };
}

export default connect(select)(DartsApp);
