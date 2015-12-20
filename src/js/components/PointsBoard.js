import React, { Component, PropTypes } from 'react';
import { PLAYER_1, PLAYER_2 } from '../constants/constants.js';
import style from '../../css/PointsBoard.css';
import classNames from 'classnames';

class PointsBoard extends Component {
  renderColumn(col) {
    return (<div className={style.column}>
      {col.map((points, index) => {
        return <div className={style.cell} key={index}>{points}</div>;
      })}
    </div>);
  }
  renderPlayerLabel(title, name) {
    const player = this.props.player;
    const classes = [style.column, style.cell, {[style.activePlayer]: player === name}];
    return <div className={classNames(classes)}>{title}</div>;
  }
  renderHeader() {
    return (<div className={classNames(style.row, style.header)}>
      {this.renderPlayerLabel('1-й игрок', PLAYER_1)}
      {this.renderPlayerLabel('2-й игрок', PLAYER_2)}
    </div>);
  }
  render() {
    return (<div className={style.container}>
        {this.renderHeader()}
        <div className={style.points}>
          <div className={style.row}>
            {this.renderColumn(this.props.result[PLAYER_1].points)}
            {this.renderColumn(this.props.result[PLAYER_2].points)}
          </div>
        </div>
        <div className={classNames(style.row, style.sum)}>
          <div className={classNames(style.column, style.cell)}>{this.props.result[PLAYER_1].score}</div>
          <div className={classNames(style.column, style.cell)}>{this.props.result[PLAYER_2].score}</div>
        </div>
      </div>);
  }
}

PointsBoard.propTypes = {
  result: PropTypes.object.isRequired,
  player: PropTypes.string.isRequired,
};

export default PointsBoard;
