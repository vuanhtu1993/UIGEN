import React from 'react'
import PropTypes from 'prop-types';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.background})`
    };
    return (
      <body className="body">
        <div style={style} className="layout">
          {this.props.children}
        </div>
      </body>
    )
  }
}

Layout.propTypes = {
  background: PropTypes.string
};