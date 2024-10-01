import React from "react";
import { View, Image, TouchableOpacity , Text} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import navigation

const Home5 = () => {

    const navigation = useNavigation(); // Khởi tạo navigation

    return(
        <View style={{flex:2}}>
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                bottom:30,
            }}>
                <Image
                    source={require('./img/hamburger 1.png')}
                    tyle={{width: 300, height: 300, borderWidth: 1, borderRadius: 20}}
                />
            </View>

            {/* Sign In */}
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                bottom:50,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home6')}
                style={{
                    backgroundColor:'#D35400',
                    borderRadius:30,
                    width:354,
                    height:50,
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:700,
                        color:'white',
                        width:61,
                        height:27,

                    }}>Sign In</Text>
                </TouchableOpacity>
            </View>

            {/* Sign Up */}
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                bottom:30,
            }}>
                <TouchableOpacity style={{
                    backgroundColor:'#ECF0F1',
                    borderRadius:30,
                    width:354,
                    height:50,
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:700,
                        color:'#000000',
                        width:68,
                        height:27,

                    }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
            {/* Or connect with */}
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                bottom:30,
            }}>
            <Text style={{left:1}}>____________________________________________</Text>
            <Text style={{
                right:10,
                fontSize:14,
                fontWeight:400,
                }}>Or connect with</Text>
            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
            }}>
                <View>
                    <Image
                        source={require('./img/PngItem_39514 1.png')}
                        style={{width: 200, height: 100}}
                    />
                </View>

                <View style={{
                    flexDirection:'row',
                }}>
                    <View>
                        <Image
                            source={require('./img/facebook 1.png')}
                            style={{width: 40, height: 40, right: 30}}
                        />
                    </View>

                    <View>
                        <Image
                            source={require('./img/google-plus 1.png')}
                            style={{width: 40, height: 40,right:10}}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};

export default Home5;