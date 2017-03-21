import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

class Main extends Component {

  render() {
    return(
      <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
      </Container>
    );
  }

}

module.exports = Main;
