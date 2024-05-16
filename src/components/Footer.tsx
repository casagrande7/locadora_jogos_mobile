import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity, Easing } from 'react-native';

const Footer = () => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY }], opacity: fadeIn }}>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>© 2023 My Company</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text>F</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text>G</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default Footer;