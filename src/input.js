import React, { Component } from 'react';
import {
  TextInput,
} from 'react-native';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      height: 35,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { defaultHeight } = this.props;

    if (defaultHeight) {
      this.setState({
        height: defaultHeight,
      });
    }
  }

  handleChange(event) {
    if (this.state.height !== event.nativeEvent.contentSize.height) {
      this.setState({
        height: Math.max(this.props.defaultHeight, event.nativeEvent.contentSize.height),
      });
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const { style, ...props } = this.props;

    return (
      <TextInput
        style={[{ height:this.state.height }, style]}
        multiline
        onChange={this.handleChange}
        {...props}
      />);
  }
}

Input.propTypes = {
  style: React.PropTypes.number,
  onChange: React.PropTypes.func,
  defaultHeight: React.PropTypes.number,
};
