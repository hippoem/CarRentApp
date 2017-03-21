import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Text, Button, Icon } from 'native-base';

export default class Search extends Component {

  render() {
        return (
            <Container>
                <Content>
                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../img/2017-lamborghini-aventador-s-5.jpg')}/>
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image style={{ resizeMode: 'cover' }} source={require('../img/pexels-photo-300001.jpeg')} />
                          </CardItem>
                          <CardItem content>
                              <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                          </CardItem>
                          <CardItem style={{ justifyContent: 'space-around' }}>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 Likes</Text>
                              </Button>
                              <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>4 Comments</Text>
                              </Button>
                              
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }

}
