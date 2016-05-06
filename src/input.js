import React, {Component} from 'react';
import {
  View,
  TextInput
} from 'react-native';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      height: 35
    };
  }

  componentWillMount() {
    let {defaultHeight} = this.props;

    if (defaultHeight) {
      this.setState({
        height: defaultHeight
      });
    }
  }

  render() {
    let {style, onChange, ...props} = this.props;

    return <TextInput
      style={[{height:this.state.height}, style]}
      multiline={true}
      onChange={event => {
        if (this.state.height !== event.nativeEvent.contentSize.height) {
          this.setState({
            height: Math.max(this.state.height, event.nativeEvent.contentSize.height)
          });
        }

        if (onChange) {
          onChange(event);
        }
       }}
      {...props}
    />;
  }
}

Input.propTypes = {
  style: React.PropTypes.number,
  onChange: React.PropTypes.func,
  defaultHeight: React.PropTypes.number
};
