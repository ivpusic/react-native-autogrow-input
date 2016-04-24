# react-native-autogrow-input
Missing auto grow multiline input component

Pure JS Android/iOS drop in TextInput replacement with support for autogrow feature.

## Installation
```
npm install react-native-autogrow-input --save
```

## Example
```Javascript
import React, {Component, View} from 'react-native';
import AutogrowInput from 'react-native-autogrow-input';

export default class MyComponent extends Component {
  render() {
    return <View>
      <AutogrowInput
        defaultHeight={50}
        /* all props supported by original TextInput components are supported */
      />
    </View>;
  }
}
```
