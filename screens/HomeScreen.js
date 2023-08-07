import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const HandleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text>Email:{auth.currentUser?.email}</Text>

      <TouchableOpacity onPress={HandleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Cikis Yap Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    width: "60%",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
