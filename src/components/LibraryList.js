import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component<{}> {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  renderItem = (librari) => {
    return <ListItem id={librari.index} item={librari.item}/>
  }

  render() {
    return(
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries,
  }
};

export default connect(mapStateToProps)(LibraryList);
