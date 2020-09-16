import React from 'react';
import {View} from 'react-native';

import Animated from 'react-native-reanimated';

export const Header  = ({scrollY}) => {
    const HEADER_HEIGHT = 70;
    const headerY = new Animated.interpolate(scrollY,{
        inputRange:[0, HEADER_HEIGHT],
        outputRange:[0, -HEADER_HEIGHT]
    });
    return(
        <Animated.View
            style={{
                height:HEADER_HEIGHT,
                backgroundColor:'red',
                position:'absolute',
                zIndex:10,
                elevation:10,
                left:0,
                right:0,
                top:0,
                transform:[{translateY: headerY}]
            }}
        />
    )
};
