import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home16 = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>Payment Successful!</Text>
            <Icon name="check-circle" size={100} color="#27AE60" style={{ marginBottom: 20 }} />
            <Text style={{ fontSize: 16, color: "#888888", marginBottom: 40 }}>Thank you for your purchase.</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home8')}
                style={{
                    backgroundColor: '#D35400',
                    width: 200,
                    height: 50,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#FFFFFF' }}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home16;
