import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
} from 'react-native';
import { UPTECH_SITE } from '../../utils/constants';

const uptech = require('../../../img/uptech.png');

class MainScreen extends Component {
  componentWillMount() {
    this.props.initApp();
  }

  openResourse = () => {
    Linking.openURL(UPTECH_SITE);
  }

  render() {
    const {
      container,
      imageContainer,
      image,
      createdBy,
      textContainer,
      centered,
      link,
    } = styles;
    const {
      appOpenedTimes,
    } = this.props;
    return (
      <View style={container}>
        <View style={[centered, imageContainer]}>
          <Image source={uptech} style={image} resizeMode="contain" />
        </View>
        <View style={[centered, textContainer]}>
          <Text>App has been opened {appOpenedTimes} times</Text>
        </View>
        <Text
          style={createdBy}
        >Boilerplate is created by <Text style={link} onPress={this.openResourse}>UPTech team</Text>
        </Text>
      </View>
    );
  }
}

MainScreen.propTypes = {
  initApp: PropTypes.func.isRequired,
  appOpenedTimes: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginTop: -30,
  },
  image: {
    width: 100,
  },
  createdBy: {
    bottom: 30,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#0000EE',
  },
});


export default MainScreen;
