import React, { useState } from "react"; // Thêm useState vào đây
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const Home9 = () => {

    //Khởi tạo chọn màu
    const [selectedImage, setSelectedImage] = useState(null);
    const navigation = useNavigation();

    return (
    
        <View style={{flex:3,backgroundColor:'#FFFFFF'}}>
            <View style={{             
                alignItems:'center',
                justifyContent:'center',
                width:200,
                height:60,
                left:100,
                marginTop: 5,
                
            }}>
                <Text style={{fontSize:24, fontWeight:700}}>Review Food</Text>
            </View>

            <View style={{
                flex:1,
                
            }}>
            <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        marginBottom: 20, 
                       
                        justifyContent:'center',
                    }}>
                        
                        <View style={{ right: 30 }}>
                            <Text style={{ fontWeight: '700', fontSize: 16 }}>Enter Old Password</Text>
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
                    </View>

                   
                   
                    </View>

            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:100,
               
            }}>
                <TouchableOpacity 
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
                    }}>SAVE</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 10,
                borderTopWidth: 1,
                borderColor: '#e0e0e0',
                backgroundColor: '#ffffff',
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home8')}
                style={{ alignItems: 'center' }}>
                    <Icon name="home" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Icon name="shopping-cart" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Order</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Icon name="list" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>My List</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Home12')}
                style={{ alignItems: 'center' }}>
                    <Icon name="user" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Profile</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
};

           
  

export default Home9;
