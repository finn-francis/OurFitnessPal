import React from 'react';

class Base extends React.Component {
  constructor(props) {
    super(props)
    this.props.setAreaTitle('Admin Area')
    this.props.setArea('admin')
  }
}

export default Base
