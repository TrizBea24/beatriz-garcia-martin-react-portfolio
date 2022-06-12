import React, { Component } from "react";
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/login.jpeg"; //los puntos .. son para que suba un nivel por cada dos puntos y luego pueda acceder a otro archivo.

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin(); //registra cuando el login está correcto
    this.props.history.push("/"); //para que cuando haga login correctamente me redirija a la home
  }

  handleUnsuccessfulAuth() { //cuando el login no está correcto, renderiza las propiedades de la función handleunsuccesfullogin
    this.props.handleUnsuccessfulLogin();//Si el estado es login o no, está codificado en app.js con setState.
  }

  render() {
    return (
      <div className="auth-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />

        <div className="right-column">
          <Login
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
          />
        </div>
      </div>
    );
  }
}