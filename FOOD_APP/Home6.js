import React from "react";
import { View, Image, TouchableOpacity , Text} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import navigation

const Home6 = () => {
    const navigation = useNavigation(); // Khởi tạo navigation
    return(
        <View style={{flex:2,backgroundColor:'#FFFFFF'}}>
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                width:83,
                height:36,
                left:30,
                marginTop: 100,
            }}>
                <Text style={{fontSize:24, fontWeight:700}}>Sign In</Text>
            </View>

            {/* UserName */}
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:20, // Có thể thay đổi giá trị nếu cần tinh chỉnh thêm
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
                    }}>Username</Text>
                </View>
            </View>

            {/* Password */}
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:30,
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

            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:20,
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
                marginBottom:30,
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
                marginBottom:30,
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

export default Home6;
