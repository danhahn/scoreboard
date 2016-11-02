import React from 'react'

const Panel = ({
  title = 'title',
  display= 'display',
  children= 'children',
}) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{title} - <strong>{display}</strong></div>
      <div className="panel-body">
        {children}
      </div>
    </div>
  )
}

export default Panel
