import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home15 = () => {
    const [selectedImages, setSelectedImages] = useState([false, false, false]);
    const navigation = useNavigation();

    const toggleSelection = (index) => {
        const updatedSelection = [...selectedImages];
        updatedSelection[index] = !updatedSelection[index];
        setSelectedImages(updatedSelection);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            {/* Header */}
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
            }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>Review Food</Text>
            </View>

            {/* Food List */}
            <View style={{ flex: 1, marginTop: 20 }}>
                {/* First Item */}
                <View style={styles.itemContainer}>
                    <Image
                        source={require('./img/Rectangle 7.png')}
                        style={styles.itemImage}
                    />
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemTitle}>Sale of 30% for pizza</Text>
                        <View style={styles.itemInfo}>
                            <Icon name="map-marker" size={12} color={"#000000"} />
                            <Text style={styles.itemDateText}>Apr10 - Apr30</Text>
                        </View>
                        <Text style={styles.itemCountdownText}>11 days left</Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleSelection(0)} style={styles.checkbox}>
                        {selectedImages[0] && <Icon name="check" size={16} color="#FFFFFF" />}
                    </TouchableOpacity>
                </View>

                {/* Second Item */}
                <View style={styles.itemContainer}>
                    <Image
                        source={require('./img/Rectangle 7.png')}
                        style={styles.itemImage}
                    />
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemTitle}>Sale of 30% for pizza</Text>
                        <View style={styles.itemInfo}>
                            <Icon name="map-marker" size={12} color={"#000000"} />
                            <Text style={styles.itemDateText}>Apr10 - Apr30</Text>
                        </View>
                        <Text style={styles.itemCountdownText}>11 days left</Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleSelection(1)} style={styles.checkbox}>
                        {selectedImages[1] && <Icon name="check" size={16} color="#FFFFFF" />}
                    </TouchableOpacity>
                </View>

                {/* Third Item */}
                <View style={styles.itemContainer}>
                    <Image
                        source={require('./img/Rectangle 7.png')}
                        style={styles.itemImage}
                    />
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemTitle}>Sale of 30% for pizza</Text>
                        <View style={styles.itemInfo}>
                            <Icon name="map-marker" size={12} color={"#000000"} />
                            <Text style={styles.itemDateText}>Apr10 - Apr30</Text>
                        </View>
                        <Text style={styles.itemCountdownText}>11 days left</Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleSelection(2)} style={styles.checkbox}>
                        {selectedImages[2] && <Icon name="check" size={16} color="#FFFFFF" />}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Send Button */}
            <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home16')}
                    style={{
                        backgroundColor: '#D35400',
                        width: 354,
                        height: 50,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#FFFFFF' }}>Send</Text>
                </TouchableOpacity>
            </View>

            {/* Taskbar */}
            <View style={styles.taskbar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home8')} style={styles.taskbarItem}>
                    <Icon name="home" size={24} color="#000000" />
                    <Text style={styles.taskbarText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Order')} style={styles.taskbarItem}>
                    <Icon name="shopping-cart" size={24} color="#000000" />
                    <Text style={styles.taskbarText}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyList')} style={styles.taskbarItem}>
                    <Icon name="list" size={24} color="#000000" />
                    <Text style={styles.taskbarText}>My List</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.taskbarItem}>
                    <Icon name="user" size={24} color="#000000" />
                    <Text style={styles.taskbarText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    itemImage: {
        marginRight: 10,
        width: 80,
        height: 80,
    },
    itemTextContainer: {
        right: 30,
    },
    itemTitle: {
        fontWeight: '700',
        fontSize: 16,
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    itemDateText: {
        marginLeft: 5,
        fontSize: 12,
    },
    itemCountdownText: {
        marginLeft: 5,
        fontSize: 12,
        color: "red",
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: '#D35400',
    },
    taskbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#ffffff',
    },
    taskbarItem: {
        alignItems: 'center',
    },
    taskbarText: {
        fontSize: 12,
    },
};

export default Home15;
