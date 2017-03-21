import React, { Component } from 'react';
import {StyleSheet, View,Image,ListView } from 'react-native';
import { Container, Header, Title, Right, Content, Card, CardItem, Left, Body, Thumbnail, Text, Button, Icon, ListItem } from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class Search extends Component {

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
    this.cars = [
      {cover: '../img/pexels-photo-300001.jpeg', profile: '../img/2017-lamborghini-aventador-s-5.jpg', title: "First", description: 'Description 1'},
      {cover: '../img/pexels-photo-300001.jpeg', profile: '../img/2017-lamborghini-aventador-s-5.jpg', title: "Second", description: 'Description 1'},
    ];

    this.state = {
      dataSource: ds.cloneWithRows(this.cars)
    };
  }

  renderHeader(){
    const {title} = this.props;

    return(
      <Header>
              <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                  <Title>{title}</Title>
              </Body>
              <Right>

              </Right>
          </Header>
    )

    }

  renderRow(rowData){
    return(
      <ListItem onPress={()=> {Actions.CarDetail({car:rowData})}}>
        <Card>
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
                  <Text>{rowData.title}</Text>
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

      </ListItem>
    );
  }

  render() {
        return (
            <Container>
              {this.renderHeader()}
                <Content>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)}
                    />
                </Content>
            </Container>
        );
    }

}
