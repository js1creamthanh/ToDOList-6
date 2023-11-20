import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState(0);

  const computeBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmi = weightInKg / (heightInM * heightInM);
    setBMI(bmi);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chỉ số BMI</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <Text style={styles.result}>BMI: {BMI.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={computeBMI}>
        <Text style={styles.buttonText}>Complete</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
      flex: 1,
      backgroundColor: "#FFFFCC",
      alignItems: "center",
      justifyContent: "center",
  },

  title: 
  {
      fontSize: 20,
      fontWeight: "bold",
      color:"orangered",
  },

  inputContainer: 
  {
      width: "80%",
      alignItems: "center",
  },

  label: 
  {
      fontSize: 16,
      fontWeight: "bold",
      margin: 10,
      color:"#336666",
  },

  input: 
  {
      width: "100%",
      height: 40,
      borderColor: "black",
      borderWidth: 1,
      padding: 10,
  },

  button: 
  {
      width: "80%",
      height: 40,
      backgroundColor: "#006600",
      color: "#ccc",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
  },

  buttonText: 
  {
      fontSize: 16,
      fontWeight: "bold",
      color:"white",
  },

  result: 
  {
      fontSize: 16,
      fontWeight: "bold",
      margin: 10,
  },

});

export default BMICalculator;
