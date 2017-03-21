import React, { Component } from 'react';
import {StyleSheet, View,Image,ListView } from 'react-native';
import { Container, Header, Title, Right, Content, Card, CardItem, Left, Body, Thumbnail, Text, Button, Icon, ListItem } from 'native-base';

export default class Search extends Component {

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
    this.cars = [
      {cover: '../img/pexels-photo-300001.jpeg', profile: '../img/2017-lamborghini-aventador-s-5.jpg', title: "First"},
      {cover: '../img/pexels-photo-300001.jpeg', profile: '../img/2017-lamborghini-aventador-s-5.jpg', title: "Second"},
    ];

    this.state = {
      dataSource: ds.cloneWithRows(this.cars)
    };
  }

  renderRow(rowData){
    return(
      <ListItem>
        <Body>
          <Text>{rowData.title}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward"/>
        </Right>
      </ListItem>
    );
  }

  render() {
        return (
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
                <Content>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)}
                    />
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
