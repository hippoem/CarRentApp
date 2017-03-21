import {observable} from 'mobx';
import {ListView} from 'react-native';
import Rest from 'fetch-on-rest';

class SearchStore {

  @observable dataSource;

  constructor() {

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows([]);
    this.api = new Rest("http://localhost:8000/");
    this.refresh();

  }

  refresh(){
    const self = this;
    this.api.get('question').then(function(response){
      self.dataSource = self.dataSource.cloneWithRows(response);
    });
  }

}
