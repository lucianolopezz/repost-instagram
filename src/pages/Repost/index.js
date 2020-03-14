import React, { useState, useEffect } from 'react';

import { Linking, Clipboard } from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

import {
  Container,
  Header,
  Footer,
  Text,
  B,
  Image,
  ProfilePic,
  Mark,
  AuthorName,
  Button,
  ButtonText,
} from './styles';

export default function Repost({ route }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { hash } = route.params;

  async function getPost() {
    try {

      setLoading(true);

      const { data } = await axios.get(`https://www.instagram.com/p/${hash}/?__a=1`);

      const media = data.graphql.shortcode_media;
      
      setPost({
        owner: media.owner,
        legend: media.edge_media_to_caption && !!media.edge_media_to_caption.edges.length ? `#Repost from @${media.owner.username} \n ${media.edge_media_to_caption.edges[0].node.text}` : '',
        image: { uri: media.display_url },
      });

      setLoading(false);

    } catch (error) {
      console.log(error.message)
    }
    
  }

  async function handleRespost() {
    setLoading(true);

    const date = new Date();
    const fileUri = `${FileSystem.documentDirectory + date.getTime()}.jpg`;

    const{ uri } = await FileSystem.downloadAsync(post.image.uri, fileUri);

    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync("Download", asset, false);
        Clipboard.setString(post.legend);

        setLoading(false);
        Linking.openURL(`instagram://library?AssetPath=${asset.uri}`);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <Spinner
        visible={loading}
      />

      {post && (
        <>
          <Header>
            <Image
              source={post.image}
              height={300}
            />
            {/*<Mark>
              <ProfilePic source={{ uri: post.owner.profile_pic_url }} />
              <AuthorName>{post.owner.username}</AuthorName>
            </Mark>*/}
          </Header>
          <Text numberOfLines={6}><B>Legenda copiada:</B> {'\n'}{post.legend}</Text>
          <Footer>
            <Button onPress={handleRespost}>
              <ButtonText>Repostar</ButtonText>
            </Button>
          </Footer>
        </>
      )}
    </Container>
  );
}