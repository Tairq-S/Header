import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, Animated, Easing} from 'react-native';


class SecHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            removeTextComponent: false
        }
    }

    componentWillReceiveProps(props){
        props.shrink ? this.animateForShrink() : this.animateForNotShrink();
        // setTimeout(()=>{this.setState({removeTextComponent: props.shrink})},100)
        // setTimeout(()=>{this.setState({removeTextComponent: props.shrink})},200)

    }

    animateForShrink(){
        this.animatedValue = new Animated.Value(85);
        Animated.timing(this.animatedValue,{
            toValue:0,
            duration:500,
            easing: Easing.ease
        }).start()
    }

    animateForNotShrink(){
        this.animatedValue = new Animated.Value(0);
        Animated.timing(this.animatedValue,{
            toValue:85,
            duration:500,
            easing: Easing.ease
        }).start()
    }

    render() {
        const height = {height: this.animatedValue}
        let { isBack, headerText, headerSubText, component, onFollow, notShrinkHeader, unFollow, navigation, text, subText, userName } = this.props;
        console.log('userName', userName)
        return (
            <View style={{backgroundColor:'red'}}>
                <View style={{ marginHorizontal:15}}>
                    {!this.state.removeTextComponent || notShrinkHeader ?
                        <Animated.View style={[{flexDirection: 'row'},height]}>
                            <View style={{flex:1}}>
                                <View style={{}}>
                                    <Text style={[{ fontSize:14, color:'#3d3d3d'}]}>{text || headerText}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex:1}}>
                                        <Text style={[{ fontSize:22, color:'#3d3d3d'}]}>{subText || headerSubText}</Text>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>: null}
                </View>
            </View>
        );
    }
}

export default SecHeader;

