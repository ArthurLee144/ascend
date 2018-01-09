import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';
//
// const allUsersQuery = gql`
//   {
//     getAllUsers {
//       id
//       email
//     }
//   }
// `;
//
// const Main = ({ data: { getAllUsers = [] } }) =>
//   getAllUsers.map(user =>
//     <h1 key={user.id}>{user.email}</h1>);
//
// export default graphql(allUsersQuery)(Main);

export default class App extends Component {
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
                <div className="navbar-brand">
                  <span className="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                  <div className="navbar-end">
                    <Link className="navbar-item is-active" to="/createasite">Create A Site</Link>
                    <Link className="navbar-item" to="/profile">My Account</Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Ascend
              </h1>
              <h2 className="subtitle">
                Your next outdoor bouldering site awaits.
              </h2>
            </div>
          </div>
        </section>

        <div className="box cta">
          <p className="has-text-centered">
            <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <section className="container">
          <div className="columns is-multiline">

            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-camera" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-camera" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-camera" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-camera" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-camera" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-camera" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-camera" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-camera" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
