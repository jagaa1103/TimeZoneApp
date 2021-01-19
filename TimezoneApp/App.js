import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { getTimezone } from "./service/apiService";
import TimeView from "./components/TimeView";

const App = () => {
  const [timeObj, setTimeObj] = useState(null);
  const [lat, setLatitude] = useState("");
  const [lng, setLongitude] = useState("");
  const [showTimeView, setTimeView] = useState(true);

  const convert = async () => {
    try {
      // request fetch timezone from API
      let json = await getTimezone(lat, lng);
      // change state and it reflects to child components
      console.log(json);
      setTimeObj(json);
    }
    catch (err) {
      console.warn(err);
    }
  }

  const renderTimeView = () => {
    if(showTimeView) return <TimeView data={timeObj} />
    else return null;
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll} contentInsetAdjustmentBehavior="automatic">
          <View style={styles.textInputField}>
            <TextInput style={styles.textInput} keyboardType="decimal-pad" placeholder="latitude" value={lat} onChangeText={text => setLatitude(text)} />
            <TextInput style={styles.textInput} keyboardType="decimal-pad" placeholder="longitude" value={lng} onChangeText={text => setLongitude(text)} />
          </View>
          <View style={styles.buttonField}>
            <TouchableOpacity onPress={()=> convert()} style={styles.button}>
              <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>
          </View>
          { renderTimeView() }
          
          <View style={styles.buttonField}>
            <TouchableOpacity onPress={()=> setTimeView(false)} style={styles.button}>
              <Text style={styles.buttonText}>close time</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    alignContent: "center"
  },
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
  buttonField: {
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#3498db",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    lineHeight: 50,
    color: "#ffffff"
  }
});

export default App;
