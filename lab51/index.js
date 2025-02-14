import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Lab51 = () => {
  let [fontsLoaded] = useFonts({
    Shafarik: require("../assets/fonts/Shafarik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return 0;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>day la font rat khac</Text>
    </View>
  );
};
export default Lab51;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Shafarik",
    fontSize: 24,
  },
});
//Sau khi thực hiện xong, bạn có thể cần chạy lệnh expo start --clear để cập nhật thay đổi và build lại ứng dụng.
