import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import align from 'align'
import debounce from 'debounce'
import assign from 'object-assign'

const DefaultStyle = {
  position: 'absolute',
  left: 0,
  right: 0
}

export default class extends Component {
  static defaultProps = {
    position: 'tr-tl',
    monitorWindowResize: false
  }
  static propTypes = {
    show: PropTypes.bool.isRequired,
    to: PropTypes.element,
    position: PropTypes.string,
    monitorWindowResize: PropTypes.bool
  }
  componentDidMount() {
    this.el = findDOMNode(this)
    let {monitorWindowResize} = this.props
    if (monitorWindowResize) {
      this._onResize = debounce(this.align.bind(this), 200)
      window.addEventListener('resize', this._onResize)
    }
    this.align()
  }
  componentDidUpdate() {
    this.align()
  }
  componentWillUnmount() {
    let {monitorWindowResize} = this.props
    if (monitorWindowResize) {
      window.removeEventListener('resize', this._onResize)
    }
  }
  align() {
    let {el} = this
    let to = this.props.to || el.parentNode
    let {position} = this.props
    align(to, el, position)
  }
  render() {
    let {
      className,
      style,
      show,
      children
    } = this.props
    style = assign(DefaultStyle, style, {
      display: show ? 'block' : 'none'
    })
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }
}
