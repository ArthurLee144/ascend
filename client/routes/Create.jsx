import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="hero is-info is-medium is-bold">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand" href="../">
                  <span className="navbar-burger burger" data-target="navbarMenu">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                  <div className="navbar-end">
                    <Link className="navbar-item" to="/createasite">Create A Site</Link>
                    <Link className="navbar-item" to="/profile">My Account</Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section className="articles">
          <div className="column is-8 is-offset-2">

            <section className="hero is-danger is-bold is-small promo-block">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Add a Site
                  </h1>
                  <h2>
                    Add a new bouldering site
                  </h2>
                </div>
              </div>
            </section>
            <div className="card article">
              <div className="card-content">
                <form>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Address</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Address" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="City" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">State</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="State" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Zip Code</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Zip Code" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label className="label">Description</label>
                      <textarea className="textarea" placeholder="Description" />
                    </div>
                  </div>
                  <div className="control">
                    <button className="button is-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
