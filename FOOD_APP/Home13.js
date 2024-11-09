import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home13 = () => {
    const [bankName, setBankName] = useState('AZRAEN Bank');
    const [userName, setUserName] = useState('Itoh');
    const [cardNumber, setCardNumber] = useState('4444 3784 1380 6739');
    const [expiryDate, setExpiryDate] = useState('02/22');
    const [cvv, setCvv] = useState('877');
    const navigation = useNavigation();

    const submitForm = async () => {
        const newCard = { bankName, userName, cardNumber, expiryDate, cvv };

        // Lấy danh sách thẻ hiện có, thêm thẻ mới và lưu lại
        const existingCards = await AsyncStorage.getItem('cards');
        const cards = existingCards ? JSON.parse(existingCards) : [];
        cards.push(newCard);
        await AsyncStorage.setItem('cards', JSON.stringify(cards));

        // Chuyển đến Home14 để hiển thị danh sách thẻ đã cập nhật
        navigation.navigate('Home14');
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Add Credit Card</Text>
                </View>

                <View style={styles.cardContainer}>
                    <Image source={require('./img/card.png')} style={styles.cardImage} />
                    <Text style={styles.cardName}>{userName}</Text>
                    <Text style={styles.cardDetails}>{bankName}</Text>
                    <Text style={styles.cardNumber}>{cardNumber}</Text>
                </View>

                <View style={styles.formSection}>
                    <Text style={styles.label}>Bank Name</Text>
                    <TextInput style={styles.input} value={bankName} onChangeText={setBankName} />
                    
                    <Text style={styles.label}>Your Name</Text>
                    <TextInput style={styles.input} value={userName} onChangeText={setUserName} />
                    
                    <Text style={styles.label}>Card Number</Text>
                    <TextInput style={styles.input} value={cardNumber} onChangeText={setCardNumber} keyboardType="numeric" />
                    
                    <Text style={styles.label}>Expiry Date</Text>
                    <TextInput style={styles.input} value={expiryDate} onChangeText={setExpiryDate} />
                    
                    <Text style={styles.label}>CVV</Text>
                    <TextInput style={styles.input} value={cvv} onChangeText={setCvv} secureTextEntry={true} keyboardType="numeric" />
                </View>

                <TouchableOpacity onPress={submitForm} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tabBarItem}>
                    <Icon name="home" size={24} color="#000000" />
                    <Text style={styles.tabBarText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBarItem}>
                    <Icon name="shopping-cart" size={24} color="#000000" />
                    <Text style={styles.tabBarText}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBarItem}>
                    <Icon name="list" size={24} color="#000000" />
                    <Text style={styles.tabBarText}>My List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabBarItem, styles.activeTab]}>
                    <Icon name="user" size={24} color="#000000" />
                    <Text style={styles.tabBarText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { paddingVertical: 20 },
    header: { alignItems: 'center', marginBottom: 20 },
    headerText: { fontSize: 20, fontWeight: '700' },
    cardContainer: { alignItems: 'center', marginBottom: 20, paddingHorizontal: 20 },
    cardImage: { width: 360, height: 200, borderRadius: 10 },
    cardName: { position: 'absolute', top: 20, left: 30, fontSize: 16, color: '#fff', fontWeight: 'bold' },
    cardDetails: { position: 'absolute', top: 50, left: 30, fontSize: 12, color: '#fff' },
    cardNumber: { position: 'absolute', top: 80, left: 30, fontSize: 18, color: '#fff' },
    formSection: { paddingHorizontal: 20 },
    label: { fontSize: 14, color: '#333', marginTop: 10 },
    input: { backgroundColor: '#f0f0f0', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 8, fontSize: 16, marginTop: 5 },
    addButton: { backgroundColor: '#D35400', paddingVertical: 15, marginHorizontal: 20, borderRadius: 50, alignItems: 'center', marginTop: 20 },
    addButtonText: { fontSize: 18, color: '#FFFFFF' },
    tabBar: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', paddingVertical: 10, borderTopWidth: 1, borderColor: '#e0e0e0' },
    tabBarItem: { alignItems: 'center' },
    tabBarText: { fontSize: 12, color: '#777' },
    activeTab: { color: '#FF6F00' },
});

export default Home13;

