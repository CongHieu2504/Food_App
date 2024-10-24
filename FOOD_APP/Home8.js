import React, { useState } from "react"; // Thêm useState vào đây
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const Home8 = () => {

    //Khởi tạo chọn màu
    const [selectedImage, setSelectedImage] = useState(null);
    const navigation = useNavigation();

    //Bấm vào chọn màu muốn chuyển sang
    const handleNextPage = () => {
        if (selectedImage === 'Drink') {
            navigation.navigate('Home9', { image: selectedImage });
        }
        else if (selectedImage === 'Food') {
            navigation.navigate('Home9', { image: selectedImage });
        }
        else if (selectedImage === 'Cake') {
            navigation.navigate('Home9', { image: selectedImage });
        }
        else if (selectedImage === 'Snack') {
            navigation.navigate('Home9', { image: selectedImage });
        }
    };

    return (
        <View style={{ flex: 1 ,backgroundColor:'#FFFFFF'}}>
            <ScrollView>
                <View style={{ paddingTop: 20 }}>
                    {/* Search Bar */}
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity style={{
                            width: 354,
                            height: 50,
                            borderRadius: 30,
                            marginHorizontal: 20,
                            backgroundColor: '#ECF0F1',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 20,
                        }}>
                            <Icon name="search" size={20} color="#00000080" />
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '400',
                                width: '100%',
                                paddingLeft: 20,
                                color: '#00000080',
                            }}>Search</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Location */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        marginBottom: 20,
                    }}>
                        <Icon name="map-marker" size={30} color={"#000000"} />
                        <Text style={{
                            marginLeft: 20,
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#000000',
                        }}>9 West 46 Th Street, New York City</Text>
                    </View>

                    {/* 4 Hình ảnh */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 20,
                    }}>
                        {/* DRINK */}
                        <TouchableOpacity onPress={() => setSelectedImage('Drink')}>
                            <Image
                                source={require('./img/cup.png')}
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 20,
                                    backgroundColor: '#ECF0F1',
                                    borderWidth: selectedImage === 'Drink' ? 3 : 0,
                                    borderColor: selectedImage === 'Drink' ? '#D35400' : 'transparent',
                                }}
                            />
                            <Text style={{
                                width: 50,
                                height: 16,
                                fontSize: 14,
                                lineHeight: 17,
                                fontWeight: '400',
                                marginTop: 5,
                                marginLeft: 18,
                            }}>
                                Drink
                            </Text>
                        </TouchableOpacity>


                        {/* FOOD */}
                        <TouchableOpacity onPress={() => setSelectedImage('Food')}>
                            <Image
                                source={require('./img/ham_1.png')}
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 20,
                                    backgroundColor: '#ECF0F1',
                                    borderWidth: selectedImage === 'Food' ? 3 : 0,
                                    borderColor: selectedImage === 'Food' ? '#D35400' : 'transparent'
                                }}
                            />
                            <Text style={{
                                width: 50,
                                height: 16,
                                fontSize: 14,
                                lineHeight: 17,
                                fontWeight: '400',
                                marginTop: 5,
                                marginLeft: 18,
                            }}>
                                Food
                            </Text>
                        </TouchableOpacity>


                        {/* CAKE */}
                        <TouchableOpacity onPress={() => setSelectedImage('Cake')}>
                            <Image
                                source={require('./img/Cake_.png')}
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 20,
                                    borderWidth: selectedImage === 'Cake' ? 3 : 0,
                                    borderColor: selectedImage === 'Cake' ? '#D35400' : 'transparent'
                                }}
                            />
                            <Text style={{
                                width: 50,
                                height: 16,
                                fontSize: 14,
                                lineHeight: 17,
                                fontWeight: '400',
                                marginTop: 5,
                                marginLeft: 18,
                            }}>
                                Cake
                            </Text>
                        </TouchableOpacity>


                        {/* SNACK */}
                        <TouchableOpacity onPress={() => setSelectedImage('Snack')}>
                            <Image
                                source={require('./img/Snack_.png')}
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 20,
                                    borderWidth: selectedImage === 'Snack' ? 3 : 0,
                                    borderColor: selectedImage === 'Snack' ? '#D35400' : 'transparent'
                                }}
                            />
                            <Text style={{
                                width: 50,
                                height: 16,
                                fontSize: 14,
                                lineHeight: 17,
                                fontWeight: '400',
                                marginTop: 5,
                                marginLeft: 18,
                            }}>
                                Snack
                            </Text>
                        </TouchableOpacity>

                    </View>

                    {/* Food Menu and View All */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 40,
                        marginBottom: 20,  // Adjusted marginBottom for spacing
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '700',
                            lineHeight: 27,
                        }}>Food Menu</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                        }}>View all</Text>
                    </View>

                    {/* Additional Images - Group 2, 3, 4 */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingHorizontal: 20,
                        marginBottom: 20,
                    }}>
                        <Image
                            source={require('./img/Group 2.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Image
                            source={require('./img/Group 3.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Image
                            source={require('./img/Group 4.png')}
                            style={{ width: 100, height: 100 }}
                        />
                    </View>

                    {/* Additional Images - Group 5, 6, 7 */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingHorizontal: 20,
                        marginBottom: 20,
                    }}>
                        <Image
                            source={require('./img/Group 5.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Image
                            source={require('./img/Group 6.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Image
                            source={require('./img/Group 7.png')}
                            style={{ width: 100, height: 100 }}
                        />
                    </View>

                    {/* Near Me and View All */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 40,
                        marginBottom: 20,
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '700',
                            lineHeight: 27,
                        }}>Near Me</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                        }}>View all</Text>
                    </View>

                    {/* Restaurant Info */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        marginBottom: 20, // Adjust margin for proper spacing
                    }}>
                        <Image
                            source={require('./img/Rectangle 6.png')}
                            style={{ marginRight: 10, width: 80, height: 80 }}
                        />
                        <View style={{ right: 30 }}>
                            <Text style={{ fontWeight: '700', fontSize: 16 }}>Dapur Ijah Restaurant</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                <Icon name="map-marker" size={12} color={"#000000"} />
                                <Text style={{ marginLeft: 5, fontSize: 12 }}>13 th Street, 46 W 12th St, NY</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                <Icon name="clock-o" size={12} color={"#34495E"} />
                                <Text style={{ marginLeft: 5, fontSize: 12 }}>3 min - 1.1 km</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="star" size={12} color={"#FFD700"} />
                                <Text style={{ marginLeft: 5, fontSize: 12 }}>4.5 (200 reviews)</Text>
                            </View>
                        </View>
                    </View>

                    {/* Fake content to demonstrate scrolling */}
                    <View style={{ height: 20 }}>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 10,
                borderTopWidth: 1,
                borderColor: '#e0e0e0',
                backgroundColor: '#ffffff',
            }}>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Icon name="home" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextPage}
                    style={{ alignItems: 'center' }}>
                    <Icon name="shopping-cart" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Icon name="list" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>My List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Icon name="user" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home8;
