import React, { Component, PropTypes } from 'react';
import { PLAYER_1, PLAYER_2 } from '../constants/players.js';
import style from '../../css/PointsBoard.css';
import classNames from 'classnames';

class PointsBoard extends Component {
  getColums() {
    const points = this.props.points;
    const chunk = 3;
    let col1 = [];
    let col2 = [];
    for (let i = 0, length = points.length; i < length; i += chunk) {
      col1 = col1.concat(points.slice(i, i + chunk));
      i += chunk;
      col2 = col2.concat(points.slice(i, i + chunk));
    }
    return {col1, col2};
  }
  sum(col) {
    return col.reduce((sum, points) => sum + points, 0);
  }
  renderColumn(col) {
    return (<div className={style.column}>
      {col.map((points, index) => {
        return <div className={style.cell} key={index}>{points}</div>;
      })}
    </div>);
  }
  renderHeader() {
    const player = this.props.player;
    const classes = [style.column, style.cell];
    return (<div className={classNames(style.row, style.header)}>
      <div className={classNames(classes, {[style.activePlayer]: player === PLAYER_1})}>1-й игрок</div>
      <div className={classNames(classes, {[style.activePlayer]: player === PLAYER_2})}>2-й игрок</div>
    </div>);
  }
  render() {
    const columns = this.getColums();
    return (<div className={style.container}>
        {this.renderHeader()}
        <div className={style.points}>
          <div className={style.row}>
            {this.renderColumn(columns.col1)}
            {this.renderColumn(columns.col2)}
          </div>
        </div>
        <div className={classNames(style.row, style.sum)}>
          <div className={classNames(style.column, style.cell)}>{this.sum(columns.col1)}</div>
          <div className={classNames(style.column, style.cell)}>{this.sum(columns.col2)}</div>
        </div>
      </div>);
  }
}

PointsBoard.propTypes = {
  points: PropTypes.array.isRequired,
  player: PropTypes.string.isRequired,
};

export default PointsBoard;
