import React from "react";
import { View, Image, TouchableOpacity , Text} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import navigation

const Home7 = () => {

    const navigation = useNavigation(); // Khởi tạo navigation
    return(
        <View style={{flex:2}}>
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                width:93,
                height:36,
                left:30,
                marginTop:60,
            }}>
                <Text style={{fontSize:24, fontWeight:700, lineHeight:36}}>Sign Up</Text>
            </View>

            {/* Username */}
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:20,
            }}>
                <View style={{
                    backgroundColor:'#ECF0F1',
                    width:354,
                    height:50,
                    marginHorizontal:20,
                    borderRadius:30,
                    alignItems: "center", 
                    justifyContent: "center", 
                }}>
                    <Text style={{
                        fontSize:14,
                        fontWeight:'400',
                        color:'#00000080',
                        paddingLeft: 20,
                        textAlign: "left",
                        width: '100%',
                    }}>Enter Username</Text>
                </View>
            </View>

            {/* PassWord */}
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:20, // Thay bottom bằng marginBottom để điều chỉnh khoảng cách
            }}>
                <View style={{
                    backgroundColor:'#ECF0F1',
                    width:354,
                    height:50,
                    marginHorizontal:20,
                    borderRadius:30,
                    alignItems: "center", 
                    justifyContent: "center", 
                }}>
                    <Text style={{
                        fontSize:14,
                        fontWeight:'400',
                        color:'#00000080',
                        paddingLeft: 20,
                        textAlign: "left",
                        width: '100%',
                    }}>Password</Text>
                </View>
            </View>

            {/* Re-enter Password */}
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:20, // Thay bottom bằng marginBottom để điều chỉnh khoảng cách
            }}>
                <View style={{
                    backgroundColor:'#ECF0F1',
                    width:354,
                    height:50,
                    marginHorizontal:20,
                    borderRadius:30,
                    alignItems: "center", 
                    justifyContent: "center", 
                }}>
                    <Text style={{
                        fontSize:14,
                        fontWeight:'400',
                        color:'#00000080',
                        paddingLeft: 20,
                        textAlign: "left",
                        width: '100%',
                    }}>Re-enter Password</Text>
                </View>
            </View>

            {/* Sign In */}
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:20, // Thay bottom bằng marginBottom để điều chỉnh khoảng cách
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home8')}
                style={{
                    backgroundColor:'#D35400',
                    width:354,
                    height:50,
                    marginHorizontal:20,
                    borderRadius:30,
                    alignItems: "center", 
                    justifyContent: "center", 
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'700',
                        color:'#FFFFFF',
                    }}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginBottom:30, // Thay bottom bằng marginBottom để điều chỉnh khoảng cách
                paddingRight: 30,
            }}>
                <Text style={{
                    fontSize:14,
                    fontWeight:'400',
                    color:'#34495E'
                }}>Forgot Password?</Text>
            </View>

            {/* Or connect with */}
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                marginBottom:30, // Thay bottom bằng marginBottom để điều chỉnh khoảng cách
                }}>
                <Text style={{left:1, color:'#34495E4D'}}>__________________________________________</Text>
                <Text style={{
                    right:35,
                    fontSize:14,
                    fontWeight:'400',
                    top:5,
                    color:'#34495E'
                    }}>Or connect with
                </Text>
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
                            style={{width: 40, height: 40, right: 50}}
                        />
                    </View>

                    <View>
                        <Image
                            source={require('./img/google-plus 1.png')}
                            style={{width: 40, height: 40,right:30}}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};

export default Home7;
