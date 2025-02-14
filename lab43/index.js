import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";
const Lab43 = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Đăng nhập</Text>
        <TextInput style={styles.input} placeholder="Tên đăng nhập" />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />
        <Button
          title="Đăng nhập"
          onPress={() => {
            // Xử lý đăng nhập ở đây
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Lab43;
