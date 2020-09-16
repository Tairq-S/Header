import React from 'react';
import {View, Platform, StatusBar} from 'react-native';

import Animated from 'react-native-reanimated';

export const Header  = ({scrollY, diffClampScrollY}) => {
    const HEADER_HEIGHT = Platform.OS === 'ios'? 155 : 70+ StatusBar.currentHeight;
    const headerY = new Animated.interpolate(diffClampScrollY,{
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
