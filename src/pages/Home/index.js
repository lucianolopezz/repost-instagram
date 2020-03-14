import React, { useEffect, useState } from 'react';

import { Clipboard, Linking, AppState } from 'react-native';

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardHeaderTitle,
  Text,
  B,
  Button,
  ButtonTitle,
} from './styles';

export default function Home({ navigation }) {
  const [appState, setAppState] = useState(AppState.currentState)

  function openInstagram() {
    Linking.openURL('instagram://');
  }

  async function handleClipboard() {
    const urlPost = await Clipboard.getString();
    const regexUrlPost = /(https?:\/\/www\.)?instagram\.com(\/p\/\w+\/?)/;

    if(urlPost.match(regexUrlPost)) {
      const extractHash = Array.isArray(urlPost.match(regexUrlPost)) ? urlPost.match(regexUrlPost)[2] : null;
      const hash = extractHash.substring(3, extractHash.length -1);
      
      if(hash) {
        navigation.navigate('Repost', {
          hash,
        });
      }
    }
  }

  async function handleAppStateChange(nextAppState) {
    if(appState === 'active' && nextAppState === 'active') {
      handleClipboard();
    }

    setAppState({ appState: nextAppState });
  }

  useEffect(() => {
    handleClipboard();

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    }
    
  }, []);

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardHeaderTitle>MANUAL</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          <Text>1. Abra instagram</Text>
          <Text>2. Clique na postagem ...</Text>
          <Text>3. Selecione <B>copiar link</B></Text>
          <Text>4. Retorne aqui</Text>
        </CardContent>
      </Card>
      <Button onPress={openInstagram}>
        <ButtonTitle>Abrir instagram</ButtonTitle>
      </Button>
    </Container>
  );
}