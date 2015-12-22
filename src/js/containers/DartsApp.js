import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { throwDart, undo, startNewGame } from '../actions/actions';
import Dartboard from '../components/Dartboard';
import PointsBoard from '../components/PointsBoard';
import style from '../../css/global.css';
import ControlPanel from '../components/ControlPanel';
import classNames from 'classnames';

class DartsApp extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div className={style.container}>
        <div className={classNames([style.col4Lg, style.offset2Lg, style.col6Md, style.offset1Md])}>
          <Dartboard onThrowDart={(points) => dispatch(throwDart(points))} />
        </div>
        <div className={classNames(style.col2Lg, style.col3Md)}>
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
