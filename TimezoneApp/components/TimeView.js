import React from "react";
import { View, Text, StyleSheet} from "react-native";

const TimeView = ({timestamp, timezone}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{timestamp}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3498db",
        alignItems: "center",
        margin: 20
    },
    text: {
        color: "#ffffff",
        fontSize: 24,
        padding: 20,
    }
});

export default TimeView;