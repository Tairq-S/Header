import React from 'react';
import {
    ScrollView,
    View,
    Text, Platform, StatusBar,
} from 'react-native';

import Animated from 'react-native-reanimated';
import {Header} from './Header';


const App  = () => {
  let arr = [
    {name:'User 1'},
    {name:'User 2'},
    {name:'User 3'},
    {name:'User 4'},
    {name:'User 5'},
    {name:'User 6'},
    {name:'User 7'},
    {name:'User 8'},
    {name:'User 9'},
    {name:'User 10'},
  ];
  const HEADER_HEIGHT = Platform.OS === 'ios'? 155 : 70+ StatusBar.currentHeight;
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <Header scrollY={scrollY} diffClampScrollY={diffClampScrollY}/>
        {/*otherContent*/}
        <Animated.ScrollView
            bounces={false}
            style={{paddingTop: HEADER_HEIGHT}}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {nativeEvent:{contentOffset:{y:scrollY}}}
            ])}
        >
          {arr.map((i)=>(
              <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#ccc', marginVertical:5, height:100}}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>{i.name}</Text>
              </View>
          ))}
        </Animated.ScrollView>
      </View>
  );
};

export default App;
