import React, {PureComponent} from 'react';

const withInputs = (Component) => (
  class WithInputs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleChangeEmail = this._handleChangeEmail.bind(this);
      this._handleChangePassword = this._handleChangePassword.bind(this);
    }

    _handleChangeEmail({target: {value: email = ``} = {}}) {
      this.setState({
        email
      });
    }

    _handleChangePassword({target: {value: password = ``} = {}}) {
      this.setState({
        password
      });
    }

    render() {
      const {email, password} = this.state;
      return (
        <Component
          {...this.props}
          email={email}
          password={password}
          onChangeEmail={this._handleChangeEmail}
          onChangePassword={this._handleChangePassword}/>
      );
    }
  }
);

export default withInputs;
