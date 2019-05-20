import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: cats => dispatch({ type: 'FETCH_CATS', payload: cats })
  }
}

export default connect(mapStateToProps)(App);
