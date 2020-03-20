import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const MainAppView = styled(View)`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export default function App() {
  return (
    <MainAppView>
      <Text>Open up App.tsx to start working on your app!</Text>
    </MainAppView>
  );
}
