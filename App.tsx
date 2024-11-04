import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Canvas, Group, ImageSVG, useSVG } from '@shopify/react-native-skia';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Screen = () => {
  const svg = useSVG(require('./logo.svg'));

  return (
    <View>
      <SafeAreaView>
        <Canvas style={{ width: 32, height: 32 }}>
          <Group transform={[
            { translateX: 0 },
            { translateY: 0 },
            { scaleX: 0.16 },
            { scaleY: 0.16 },
          ]}>
            <ImageSVG svg={svg} x={0} y={0} width={32} height={32} />
          </Group>
        </Canvas>
      </SafeAreaView>
      <Canvas style={{ width: 32, height: 32 }}>
        <Group transform={[
          { translateX: 0 },
          { translateY: 0 },
          { scaleX: 0.16 },
          { scaleY: 0.16 },
        ]}>
          <ImageSVG svg={svg} x={0} y={0} width={32} height={32} />
        </Group>
      </Canvas>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="lesson.learningPath"
          component={Screen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="scenario.overview"
          component={Screen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
