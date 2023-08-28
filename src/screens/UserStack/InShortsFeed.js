import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import InShortsFeedData from '../../assets/data/InShortsFeedData';
import SingleFeed from '../../components/SingleFeed';

const InShortsFeed = () => {
  const feedDataArray = InShortsFeedData;
  // console.log('feedDataArray:-', feedDataArray);
  const [activeIndex, setActiveIndex] = useState();
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.carousel}>
      {feedDataArray && (
        <Carousel
          layout={'stack'}
          data={feedDataArray}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({item, index}) => (
            <SingleFeed item={item} index={index} />
          )}
          onSnapToItem={index => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

export default InShortsFeed;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    // transform: [{scaleY: -1}],
    backgroundColor: 'black',
  },
});
