import {observable} from 'mobx';
import {ListView} from 'react-native';
import Rest from 'fetch-on-rest';

class CarStore {

  cars = [
    {cover: '../img/pexels-photo-300001.jpeg', profile: '../img/2017-lamborghini-aventador-s-5.jpg', title: "First", description: 'Description 1'},
    {cover: '../img/pexels-photo-300001.jpeg', profile: '../img/2017-lamborghini-aventador-s-5.jpg', title: "Second", description: 'Description 2'},
    {cover: '../img/pexels-photo-300001.jpeg', profile: '../img/2017-lamborghini-aventador-s-5.jpg', title: "Thrid", description: 'Description 3'},
  ];

  @observable dataSource;

  constructor() {

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(this.cars);
  }

}

const carStore = new CarStore();
export default carStore;
