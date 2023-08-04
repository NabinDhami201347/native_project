import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

type CircleProps = {
  circleX: Animated.SharedValue<number>;
};
const circleContainerSize = 50;

const AnimatedCircle: FC<CircleProps> = ({circleX}) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize / 2}],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // top: -circleContainerSize / 14,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    // backgroundColor: '#B508F1',
    backgroundColor: 'rgba(181,100,241,0.9)',
    // backgroundColor: 'rgba(170,170,200,0.6)',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
