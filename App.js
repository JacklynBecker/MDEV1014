import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomePage from './app/components/HomePage';
import ProfilePage from './app/components/ProfilePage';
import GalleryPage from './app/components/GalleryPage';
import TasksPage from './app/components/TasksPage';
import AboutPage from './app/components/AboutPage';
import ContactPage from './app/components/ContactPage';
import Login from './app/components/LoginPage';
import Signup from './app/components/SignUpPage';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  if (!isLoggedIn) {
    return showSignup ? (
      <Signup
        onSignUpSuccess={() => setIsLoggedIn(true)}
        onSwitchToLogin={() => setShowSignup(false)}
      />
    ) : (
      <Login
        onLoginSuccess={() => setIsLoggedIn(true)}
        onSwitchToSignup={() => setShowSignup(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Profile':
                iconName = focused ? 'person' : 'person-outline';
                break;
              case 'Gallery':
                iconName = focused ? 'images' : 'images-outline';
                break;
              case 'Tasks':
                iconName = focused ? 'list' : 'list-outline';
                break;
              case 'About':
                iconName = focused ? 'information-circle' : 'information-circle-outline';
                break;
              case 'Contact':
                iconName = focused ? 'mail' : 'mail-outline';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name="Gallery" component={GalleryPage} />
        <Tab.Screen name="Tasks" component={TasksPage} />
        <Tab.Screen name="About" component={AboutPage} />
        <Tab.Screen name="Contact" component={ContactPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
