import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [direction, setDirection] = useState("negative");

  return (
    <PreviewLayout
      label="covid-19 status"
      selectedValue={direction}
      values={["negative", "positive"]}
      setSelectedValue={setDirection}>
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View>
      <View style={styles.fixToText}>
        <Button
          title="Make Booking"
          onPress={() =>
          navigation.navigate('Booking', { name: 'Jane' })
        }
        />
        <Button
          title="View Booking"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom:-100,
    right:50,
  },
  box: {
    width: 355,
    height: 350,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
    
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default HomeScreen;
