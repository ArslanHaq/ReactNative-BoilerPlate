import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const CheckboxComponent: React.FC = () => {
  const [isSelected, setSelection] = React.useState(false);
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={isSelected}
        onValueChange={newValue => setSelection(newValue)}
        tintColors={{true: '#EE8433', false: 'gray'}}
        onCheckColor={'#EE8433'}
      />
      <Text style={{color: 'black'}}>Remember me</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: -5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
