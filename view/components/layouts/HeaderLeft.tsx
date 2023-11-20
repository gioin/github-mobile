import React, { useEffect, useState } from "react";
import {
  Platform,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { ArrowLeft } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <View>
      {navigation.getState().index > 0 && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            {Platform.OS === "android" ? (
              <View style={{ marginRight: 20 }}>
                <ArrowLeft />
              </View>
            ) : (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="angle-left" size={36} color="#2f84e3" />
                <Text
                  style={{ color: "#2f84e3", marginLeft: 10, fontSize: 18 }}
                >
                  {navigation.getState().index > 0 &&
                    navigation.getState().routes[
                      navigation.getState().index - 1
                    ].name}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
