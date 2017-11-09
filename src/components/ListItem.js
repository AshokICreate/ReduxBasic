import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection} from './common';
import * as actions from '../actions';


class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { titleStyle, descriptionStyle } = styles;
    const {item } = this.props;
    const { id, title} = item;

    return(
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.props.expanded ? <Text style={descriptionStyle}>{item.description}</Text> : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  descriptionStyle: {
    fontSize: 14,
    paddingVertical: 10,
    paddingLeft: 24,
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id;
  return {
    expanded,
  }
};

export default connect(mapStateToProps, actions)(ListItem);
