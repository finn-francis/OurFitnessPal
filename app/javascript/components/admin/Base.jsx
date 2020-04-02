import React from 'react';

class Base extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.setAreaTitle('Admin Area')
    // this.props.setIsAdminArea(true)
  }
}

export default Base
