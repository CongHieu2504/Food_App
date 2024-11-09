import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home14 = () => {
    const [cards, setCards] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const loadCards = async () => {
            const storedCards = await AsyncStorage.getItem('cards');
            setCards(storedCards ? JSON.parse(storedCards) : []);
        };
        loadCards();
    }, []);

    const deleteCard = async (index) => {
        const updatedCards = [...cards];
        updatedCards.splice(index, 1);
        setCards(updatedCards);
        await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Credit Card Details</Text>
                {cards.map((card, index) => (
                    <View key={index} style={styles.cardDetails}>
                        <Text>Bank Name: {card.bankName}</Text>
                        <Text>Cardholder Name: {card.userName}</Text>
                        <Text>Card Number: {card.cardNumber}</Text>
                        <Text>Expiry Date: {card.expiryDate}</Text>
                        <Text>CVV: {card.cvv}</Text>

                        {/* Nút "Make as Default" */}
                        <TouchableOpacity style={styles.defaultButton} onPress={() => navigation.navigate('Home15')}>
                            <Text style={styles.defaultButtonText}>Make as Default</Text>
                        </TouchableOpacity>

                        {/* Nút "Remove" */}
                        <TouchableOpacity onPress={() => deleteCard(index)} style={styles.removeButton}>
                            <Text style={styles.removeButtonText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tabBarItem}>
                    <Icon name="home" size={24} color="#000" />
                    <Text style={styles.tabBarText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBarItem}>
                    <Icon name="shopping-cart" size={24} color="#000" />
                    <Text style={styles.tabBarText}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBarItem}>
                    <Icon name="list" size={24} color="#000" />
                    <Text style={styles.tabBarText}>My List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabBarItem, styles.activeTab]}>
                    <Icon name="user" size={24} color="#FF6F00" />
                    <Text style={styles.tabBarText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexGrow: 1, backgroundColor: '#f5f5f5', padding: 20 },
    title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    cardDetails: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
    cardText: { fontSize: 16, color: '#333', marginBottom: 5 },
    defaultButton: { backgroundColor: '#D35400', paddingVertical: 15, borderRadius: 30, alignItems: 'center', marginBottom: 10 },
    defaultButtonText: { fontSize: 18, color: '#FFFFFF' },
    removeButton: { backgroundColor: '#ECF0F1', paddingVertical: 15, borderRadius: 30, alignItems: 'center' },
    removeButtonText: { fontSize: 18, color: '#000000' },
    tabBar: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#e0e0e0' },
    tabBarItem: { alignItems: 'center' },
    tabBarText: { fontSize: 12, color: '#777' },
    activeTab: { color: '#FF6F00' },
});

export default Home14;
