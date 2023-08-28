import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SingleFeed = ({item, index}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        // backgroundColor: 'tomato',
        // transform: [{scaleY: -1}],
      }}>
      <Image
        // source={{uri: item?.imageURL}}
        source={require('../assets/images/flower1.jpg')}
        style={{
          height: '45%',
          resizeMode: 'cover',
          width: windowWidth,
          backgroundColor: 'green',
        }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: '#282c35',
        }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.content}>{item?.content}</Text>
        <Text style={{color: 'white', paddingHorizontal: 10}}>
          Video by: <Text>{item?.author ?? 'unknown'}</Text>
        </Text>
      </View>
    </View>
  );
};

export default SingleFeed;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  description: {
    paddingBottom: 15,
    flex: 1,
  },
});
