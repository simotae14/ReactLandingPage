import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    let menuActive = this.state.isToggleOn ? 'is-active' : '';
    return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">MyCompany</a>
          <span
            className={"navbar-burger " + menuActive}
            onClick={this.handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          className={"navbar-menu " + menuActive}
        >
          <div className="navbar-end">
            <Link to="/" className="navbar-item r-item">Home</Link>
            <Link to="faq" className="navbar-item r-item">Features</Link>
            <Link to="faq" className="navbar-item r-item">About</Link>
            <Link to="faq" className="navbar-item r-item">FAQ</Link>

            <div className="navbar-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>
                    Join Now
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    );
  }
}

export default Header;
