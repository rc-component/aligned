import React from 'react'
import {render} from 'react-dom'

const App = () => {
  const colors = ['tomato', 'orange', 'gold', 'lightgreen', 'deepskyblue']
  let AlignTo = require('../src').default
  return (
    <div style={{
      width: 210,
      color: '#fff'
    }}>
      {colors.map(color => {
        return (
          <div className="item" key={color}
            style={{
              backgroundColor: color
            }}>{color}</div>
        )
      })}
      <AlignTo show={true}
        position="br-tr"
        style={{
        width: 200,
        backgroundColor: '#333'
      }}>
        hello
      </AlignTo>
    </div>
  )
}

function init() {
  let root = document.getElementById('app')
  render(<App />, root)
}

init()

if (module.hot) {
  module.hot.accept()
  module.hot.accept('../src', init)
}
