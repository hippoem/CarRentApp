import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

import {Actions, Scene, Router, Switch, Modal} from 'react-native-router-flux';

import Search from './scenes/Search';
import Profile from './scenes/Profile';

class TabIcon extends Component {
  render(){
    const title = this.props.title;
    return(
      <Text>{title}</Text>
    );
  }
}

class Main extends Component {

  componentWillMount(){
    this.scenes = Actions.create(
      <Scene key="root" tabs={true}>
        <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor: '#f7f7f7'}}>
          <Scene key="Search" component={Search} title="Search" icon={TabIcon} hideNavBar={true}/>
          <Scene key="Profile" component={Profile} title="Profile" icon={TabIcon} hideNavBar={true}/>
        </Scene>
      </Scene>
    );
  }

  render(){
    return <Router scenes={this.scenes}/>
  }

}

module.exports = Main;
