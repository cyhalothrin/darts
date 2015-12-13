import React, { Component, PropTypes } from 'react';
import UndoIcon from 'evil-icons/assets/icons/ei-undo.svg';
import RefreshIcon from 'evil-icons/assets/icons/ei-refresh.svg';
import style from '../../css/ControlPanel.css';

class ControlPanel extends Component {
  render() {
    return (<div className={style.panel}>
        <button className={style.button} type="button" onClick={this.props.startNewGame} title="Начать новую игру">
          <RefreshIcon className={style.icon} />
        </button>
        <button className={style.button} type="button" onClick={this.props.undo} title="Отменить ход">
          <UndoIcon className={style.icon} />
        </button>
      </div>);
  }
}

ControlPanel.propTypes = {
  undo: PropTypes.func.isRequired,
  startNewGame: PropTypes.func.isRequired,
};

export default ControlPanel;
