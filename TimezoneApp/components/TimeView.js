import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet} from "react-native";

let interval = null;

const TimeView = ({data}) => {
    const [time, setDate] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    let timer = null;
    useEffect(function(){
        console.log("interval started");
        timer = setInterval(() => {
            // setting system time now
            setCurrentTime(new Date().toLocaleTimeString());
            if(!data) return;
            let d = new Date()
            // converting time by gmtOffset
            let convertedDate = d.getTime() + (d.getTimezoneOffset() * 60 + data.gmtOffset) * 1000;
            // setting local converted time
            setDate(new Date(convertedDate).toLocaleTimeString());
        }, 1000);
        return function cleanup(){
            console.log("cleaned")
            clearInterval(timer);
        }
    }, []);
    
    return (
        <View style={styles.container}>
            <Text>system time: {currentTime}</Text>
            <View style={styles.convertedTimeField}>
                <Text style={styles.description}>{data ? data.countryName.toUpperCase() : ""}</Text>
                <Text style={styles.text}>{time}</Text>
                <Text>GMT: {data ? data.gmtOffset / 3600 : ""}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf0f1",
        alignItems: "center",
        margin: 20,
        padding: 20,
    },
    text: {
        fontSize: 20,
        padding: 10,
    },
    description: {
        fontSize: 14,
        margin: 10,
    },
    convertedTimeField: {
        width: "100%",
        marginTop: 20,
        padding: 10,
        borderTopWidth: 0.3,
        borderColor: "#7f8c8d",
        alignItems: "center",
    }
});

export default TimeView;