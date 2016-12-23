import React, { Component } from 'react';
import {
  TextInput,
} from 'react-native';

export default class Input extends Component {
  static defaultProps = {
    defaultHeight: 0,
    maxHeight: null,
  }

  constructor() {
    super();
    this.state = {
      height: null,
    };
  }

  componentWillMount() {
    const { defaultHeight } = this.props;

    if (defaultHeight) {
      this.setState({
        height: defaultHeight,
      });
    }
  }

  setHeight(newHeight){
    // Add some extra margin to prevent flickering
    const { defaultHeight, maxHeight = newHeight} = this.props
    this.setState({
      height: Math.max(defaultHeight, newHeight > maxHeight ? maxHeight : newHeight) + 10,
    });
  }

  handleChange(event) {
    if (this.state.height !== event.nativeEvent.contentSize.height) {
      this.setHeight(event.nativeEvent.contentSize.height)
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  handleInitialHeight(event){
    if(this.state.height === null){
      this.setHeight(event.nativeEvent.contentSize.height)
    }
  }

  resetInputText() {
    this.refs.input.setNativeProps({ text: '' });
    this.setState({
      height: this.props.defaultHeight,
    });
  }

  render() {
    return (
      <TextInput
        ref="input"
        multiline
        {...this.props}
        style={[this.props.style, {height: this.state.height}]}
        onChange={this.handleChange.bind(this)}
        onContentSizeChange={this.handleInitialHeight.bind(this)}
      />
    );
  }
}

Input.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.array,
    React.PropTypes.object
  ]),
  onChange: React.PropTypes.func,
  defaultHeight: React.PropTypes.number,
};
