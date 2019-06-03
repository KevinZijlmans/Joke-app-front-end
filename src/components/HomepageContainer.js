import React from 'react'
import {loadJoke} from '../actions/joke'
import {connect} from 'react-redux'
import Homepage from './Homepage'

class HomepageContainer extends React.Component {
  componentDidMount() {
    this.props.loadJoke()
  }
  render() {
    return <Homepage joke = {this.props.joke} />
  }
}
const mapStateToProps = state => {
    return {
        joke: state.joke
    }
}
export default connect(mapStateToProps, {loadJoke})(HomepageContainer)