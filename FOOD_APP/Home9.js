import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home9 = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    // API call
    const fetchData = async () => {
        try {
            const response = await fetch("https://6459feb465bd868e930d904a.mockapi.io/users");
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => {
        const isSelected = selectedProduct && selectedProduct.id === item.id;

        return (
            <TouchableOpacity onPress={() => setSelectedProduct(item)} style={{ backgroundColor: isSelected ? '#D35400' : '#FFFFFF', padding: 10 }}>
                <View style={{
                    alignItems: 'center',
                    marginBottom: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
                    marginHorizontal: 20,
                }}>
                    <Image source={require('./img/reviewrice.png')} style={{ width: 100, height: 100 }} />
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '700',
                            marginVertical: 10,
                        }}>{item.title}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '60%', marginVertical: 10 }}>
                            <TouchableOpacity>
                                <Image source={require('./img/like4.png')} />
                            </TouchableOpacity>
                            <Text>999+</Text>
                            <Text>|</Text>
                            <TouchableOpacity>
                                <Image source={require('./img/like3.png')} />
                            </TouchableOpacity>
                            <Text>93+</Text>
                        </View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: 'green',
                        }}>$99.99</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const handleSend = () => {
        if (selectedProduct) {
            navigation.navigate('Home10');
        } else {
            alert('Vui lòng chọn sản phẩm trước khi tiếp tục!');
        }
    };

    return (
        <View style={{ flex: 3, backgroundColor: '#FFFFFF' }}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 200,
                height: 60,
                left: 100,
                marginTop: 5,
            }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>Review Food</Text>
            </View>

            <View style={{ flex: 1 }}>
                {loading ? (
                    <Text>Loading ...</Text>
                ) : (
                    <FlatList
                        data={data.slice(0, 2)} // Hiển thị 2 sản phẩm đầu tiên
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}
            </View>

            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 100,
            }}>
                <TouchableOpacity onPress={handleSend}
                    style={{
                        backgroundColor: '#D35400',
                        width: 354,
                        height: 50,
                        marginHorizontal: 20,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#FFFFFF',
                    }}>Send</Text>
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

                <TouchableOpacity onPress={() => navigation.navigate('Home10')}
                    style={{ alignItems: 'center' }}>
                    <Icon name="user" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Home9;
