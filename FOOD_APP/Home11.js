import React, { useState } from "react"; // Thêm useState vào đây
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const Home9 = () => {

    const [userName, setUserName] = useState(''); // Khởi tạo userName

    // Khởi tạo chọn màu
    const [selectedImage, setSelectedImage] = useState(null);
    const navigation = useNavigation();

    //Tạo 1 mảng để nhập UserName , Password
    const users = [
        {userName : 'admin'},
    ]

    const handleLogin = () => {
        const user = users.find((u) => u.userName === userName);
        if(user)
        {
            navigation.navigate('Home12');
        }
        else
        {
            alert('Sai thông tin đăng nhập');
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
            }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>Review Food</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: '80%',
                    marginBottom: 20,
                }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Enter Old Password</Text>
                    <View style={{
                        backgroundColor: '#ECF0F1',
                        height: 50,
                        borderRadius: 30,
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                    }}>
                        <TextInput
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                width: '100%',
                            }}
                            placeholder="UserName"
                            placeholderTextColor="#00000080"
                            value={userName}
                            onChangeText={setUserName}
                        />
                    </View>
                </View>
            </View>

            <View style={{
                alignItems: 'center',
                marginBottom: 30,
            }}>
                <TouchableOpacity onPress={handleLogin}
                    style={{
                        backgroundColor: '#D35400',
                        width: '80%',
                        height: 50,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#FFFFFF',
                    }}>SAVE</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation */}
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

                <TouchableOpacity onPress={handleLogin}
                    style={{ alignItems: 'center' }}>
                    <Icon name="user" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Home9;
