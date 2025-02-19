import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { height, width } from "@/style";
import MiniPlayer from "@/components/MiniPlayer";
export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            marginLeft: 20,
            borderRadius: 12,
            height: height * 0.07,
            elevation: 2,
            position: "absolute",
            width: width * 0.9,
            alignItems: "center",
            bottom: 10,
            left: 20,
          },
        }}
      >
        <Tabs.Screen
          name="genres"
          options={{
            title: "Genres",
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name="list" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name="search" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="libraries"
          options={{
            title: "Library",
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name="library-music" color={color} />
            ),
          }}
        />
      </Tabs>
      <MiniPlayer />
    </>
  );
}
