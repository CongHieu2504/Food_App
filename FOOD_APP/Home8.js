import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text, TextInput, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home8 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigation = useNavigation();

    // API call
    const fetchData = async () => {
        try {
            const response = await fetch("https://6459feb465bd868e930d904a.mockapi.io/users");
            const json = await response.json();

            // Gán tạm danh mục để thử nghiệm
            const categories = ['Drink', 'Food', 'Cake', 'Snack'];
            const updatedData = json.map((item, index) => ({
                ...item,
                category: categories[index % categories.length], // Luân phiên gán danh mục
            }));

            console.log("Updated Data:", updatedData); // Kiểm tra dữ liệu đã cập nhật
            setData(updatedData);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };



    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = selectedCategory ? data.filter(item => item.category === selectedCategory) : data;

    // Hàm xử lý khi nhấn "Order"
    const handleOrder = () => {
        if (selectedCategory) {
            navigation.navigate('Home9', { category: selectedCategory });
        } else {
            alert("Please select a category before ordering!");
        }
    };

    const renderItem = ({ item }) => {
        return (
            <View>
                <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('./img/Group 2.png')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <Text>Hambuger</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                        <Image
                            source={require('./img/Group 3.png')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <Text>Pizza</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                        <Image
                            source={require('./img/Group 4.png')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <Text>BBQ</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('./img/Group 5.png')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <Text>Fruit</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 50, }}>
                        <Image
                            source={require('./img/Group 6.png')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <Text>Sushi</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, }}>
                        <Image
                            source={require('./img/Group 7.png')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <Text>Noodle</Text>
                    </View>
                </View>
            </View>
        );
    };

    // Header của FlatList
    const renderHeader = () => (
        <View>
            {/* Search Bar */}
            <View style={{ paddingTop: 20, marginBottom: 20 }}>
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
                    <TextInput style={{
                        fontSize: 14,
                        fontWeight: '400',
                        width: '100%',
                        paddingLeft: 20,
                    }}
                        placeholder="Search"
                        placeholderTextColor="#00000080"
                    />
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
                <TouchableOpacity onPress={() => setSelectedCategory('Drink')}>
                    <Image
                        source={require('./img/cup.png')}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 20,
                            backgroundColor: '#ECF0F1',
                            borderWidth: selectedCategory === 'Drink' ? 3 : 0,
                            borderColor: selectedCategory === 'Drink' ? '#D35400' : 'transparent',
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
                <TouchableOpacity onPress={() => setSelectedCategory('Food')}>
                    <Image
                        source={require('./img/ham_1.png')}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 20,
                            backgroundColor: '#ECF0F1',
                            borderWidth: selectedCategory === 'Food' ? 3 : 0,
                            borderColor: selectedCategory === 'Food' ? '#D35400' : 'transparent',
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
                <TouchableOpacity onPress={() => setSelectedCategory('Cake')}>
                    <Image
                        source={require('./img/Cake_.png')}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 20,
                            borderWidth: selectedCategory === 'Cake' ? 3 : 0,
                            borderColor: selectedCategory === 'Cake' ? '#D35400' : 'transparent',
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
                <TouchableOpacity onPress={() => setSelectedCategory('Snack')}>
                    <Image
                        source={require('./img/Snack_.png')}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 20,
                            borderWidth: selectedCategory === 'Snack' ? 3 : 0,
                            borderColor: selectedCategory === 'Snack' ? '#D35400' : 'transparent',
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
        </View>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            {loading ? (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>Loading ...</Text>
            ) : (
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={renderHeader}
                    contentContainerStyle={{ alignItems: 'center' }}
                />
            )}

            {/* Near Me and View All */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
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
                justifyContent: 'space-between',
                width: '90%',
                alignItems: 'center',
                marginBottom: 20, // Adjust margin for proper spacing
            }}>
                <Image source={require('./img/Rectangle 6.png')}
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

            {/* Bottom Navigation */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 10,
                borderTopWidth: 1,
                borderColor: '#e0e0e0',
                backgroundColor: '#ffffff',
                width: '90%',
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home8')}
                    style={{ alignItems: 'center' }}>
                    <Icon name="home" size={24} color="#000000" />
                    <Text style={{ fontSize: 12 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleOrder}>
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


