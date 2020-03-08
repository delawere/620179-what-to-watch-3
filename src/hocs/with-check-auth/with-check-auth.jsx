import React, {PureComponent} from 'react';
import {bool} from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {HistoryType} from '../../types.js';
import {getIsAuth} from '../../reducer/user/selectors';
import {INDEX, LOGIN} from '../../router/paths.js';

const withCheckAuth = (Component) => {
  class WithCheckAuth extends PureComponent {
    constructor(props) {
      super(props);

      this._pushHistory = this._pushHistory.bind(this);
    }

    componentDidMount() {
      this._pushHistory();
    }

    componentDidUpdate(prevProps) {
      const {isAuth} = this.props;

      if (prevProps.isAuth === isAuth) {
        return;
      }

      this._pushHistory();
    }

    _pushHistory() {
      const {isAuth, history} = this.props;
      const path = isAuth ? INDEX : LOGIN;

      history.push(path);
    }

    render() {
      return (
        <Component {...this.props}/>
      );
    }
  }

  WithCheckAuth.propTypes = {
    history: HistoryType,
    isAuth: bool
  };


  const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
  });

  return connect(mapStateToProps)(withRouter(WithCheckAuth));
};

export default withCheckAuth;
