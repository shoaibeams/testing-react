import React, { Component } from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {
  class ComposedClass extends Component {
    componentDidMount = () => {
      this.shouldNavigateAway()
    }

    componentDidUpdate = () => {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/')
        console.log('I need to leave!')
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }

  return connect(mapStateToProps)(ComposedClass)
}
