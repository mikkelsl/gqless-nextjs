import React from 'react'

export default class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <p>{this.state.error}</p>
          <p>{this.state.errorInfo}</p>
        </div>
      )
    }
    return this.props.children
  }
}
