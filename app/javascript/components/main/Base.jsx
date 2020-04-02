import React from 'react';

class Base extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.setAreaTitle(null)
  }
}

export default Base
