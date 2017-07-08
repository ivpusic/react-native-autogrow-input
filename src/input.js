import React, { PureComponent } from 'react';
import {
  TextInput
} from 'react-native';

export default class AutogrowInput extends PureComponent {

  state = {
    height: 35,
  };

  componentWillMount() {
    const { defaultHeight } = this.props;

    if (defaultHeight) {
      this.setState({
        height: defaultHeight,
      });
    }
  }

  onContentSizeChange = (event) => {
    if (this.state.height !== event.nativeEvent.contentSize.height) {
      this.setState({
        height: Math.max(this.props.defaultHeight, event.nativeEvent.contentSize.height),
      });
    }
  }

  resetInputText = () => {
    if (this.inputRef) {
      this.inputRef.setNativeProps({ text: '' });
      this.setState({
        height: this.props.defaultHeight,
      });
    }
  }

  render() {
    return (
      <TextInput
        ref={ref => this.inputRef = ref}
        multiline
        {...this.props}
        style={[this.props.style, { height: this.state.height }]}
        onContentSizeChange={this.onContentSizeChange}
      />);
  }
}

AutogrowInput.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.array,
    React.PropTypes.object
  ]),
  onChange: React.PropTypes.func,
  defaultHeight: React.PropTypes.number,
};
