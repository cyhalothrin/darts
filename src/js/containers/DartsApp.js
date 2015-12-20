import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { throwDart, undo, startNewGame } from '../actions/actions';
import Dartboard from '../components/Dartboard';
import PointsBoard from '../components/PointsBoard';
import style from '../../css/global.css';
import ControlPanel from '../components/ControlPanel';

class DartsApp extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div className={style.container}>
        <div className={[style.col4, style.offset2].join(' ')}>
          <Dartboard onThrowDart={(points) => dispatch(throwDart(points))} />
        </div>
        <div className={style.col2}>
          <PointsBoard result={this.props.result} player={this.props.player} />
        </div>
        <ControlPanel undo={() => dispatch(undo())} startNewGame={() => dispatch(startNewGame())} />
      </div>
    );
  }
}

DartsApp.propTypes = {
  result: PropTypes.object.isRequired,
  player: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function select(state) {
  return {
    result: state.result,
    player: state.player,
  };
}

export default connect(select)(DartsApp);
