import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Icons

import {AddIcon, ChatIcon, HomeIcon, ProfileIcon, SearchIcon} from '@/assets/icons'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
        <Tabs.Screen
            name="explore"
            options={{
                title: 'Explore',
                tabBarIcon: ({ color }) => <SearchIcon color={color}/>,
            }}
        />
      <Tabs.Screen
        name="content"
        options={{
            title: '',
          tabBarIcon: ({ color }) => <AddIcon color={color} />,
        }}
      />
        <Tabs.Screen
            name="chat"
            options={{
                title: 'Chat',
                tabBarIcon: ({ color }) => <ChatIcon color={color} />,
            }}
        />
        <Tabs.Screen
            name="userProfile"
            options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <ProfileIcon color={color}  />,
            }}
        />
    </Tabs>

  );
}
