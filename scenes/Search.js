import React, { Component } from 'react';
import {StyleSheet, View,Image,ListView } from 'react-native';
import { Container, Header, Title, Right, Content, Card, CardItem, Left, Body, Thumbnail, Text, Button, Icon, ListItem } from 'native-base';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';

@observer
export default class Search extends Component {

  constructor(){
    super();
  }

  handleAdd(){
    const doc = {
      cover: '../img/pexels-photo-300001.jpeg', profile: '../img/2017-lamborghini-aventador-s-5.jpg', title: "Four", description: 'Description 4'
    };

    this.props.store.add(doc);
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
                <Button transparent onPress={()=> this.handleAdd()}>
                  <Icon name="add-circle" style={{color: '#0098ff'}}/>
                </Button>
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
                    <Thumbnail source={{uri: rowData.profile}}/>
                    <Body>
                        <Text>{rowData.title}</Text>
                        <Text note>GeekyAnts</Text>
                    </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
              <Image source={{uri: rowData.cover, cache: 'only-if-cached'}}
   style={{width: 340, height: 250}} />
              </CardItem>
              <CardItem content>
                  <Text>{rowData.description}</Text>
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
    const {dataSource} = this.props.store;
        return (
            <Container>
              {this.renderHeader()}
                <Content>
                    <ListView
                      dataSource={dataSource}
                      renderRow={this.renderRow.bind(this)}
                      enableEmptySections={true}
                    />
                </Content>
            </Container>
        );
    }

}
