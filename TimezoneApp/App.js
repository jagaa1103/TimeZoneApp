import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';

import TimeView from "./components/TimeView";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.textInputField}>
            <TextInput style={styles.textInput} keyboardType="decimal-pad" placeholder="latitude" />
            <TextInput style={styles.textInput} keyboardType="decimal-pad" placeholder="longitude" />
          </View>
          <TimeView timestamp={new Date().toLocaleString()} timezone={5} />
          <TimeView timestamp={new Date().toLocaleString()} timezone={5} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  textInputField: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    paddingTop: 10,
  },
  textInput: {
    flex: 1,
    borderColor: "#bdc3c7",
    borderWidth: 0.5,
    marginLeft: 10,
  },
});

export default App;
