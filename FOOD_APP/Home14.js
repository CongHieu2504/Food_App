import React, { useState } from "react"; // Thêm useState vào đây
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home14 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Paypal</Text>
          
          {/* Paypal */}
          <TouchableOpacity style={styles.paymentMethod}>
            <View style={styles.paymentLeft}>
              <Image source={require('./img/paypal 1.png')} style={styles.icon} />
              <Text style={styles.paymentText}>Paypal</Text>
            </View>
            <Text style={styles.paymentDetail}>Itoh@gmail.com</Text>
           
          </TouchableOpacity>
         
        </ScrollView>

        {/* Make as Default */}
        <View style={{
                justifyContent:'center',
                alignItems:'center',
                marginBottom:20, // Sử dụng marginBottom để điều chỉnh khoảng cách
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home15')}
                style={{
                    backgroundColor:'#D35400',
                    borderRadius:30,
                    height:50,
                    width:354,
                    alignItems:'center',
                    justifyContent:'center',
                    marginHorizontal: 20, // Sử dụng marginHorizontal để tạo khoảng cách hai bên
                    marginTop:80,
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'700',
                        color:'white',
                        width:150,
                        height:27,
                    }}>Make as Default</Text>
                </TouchableOpacity>
            </View>

            {/* Remove */}
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                marginBottom:20, // Sử dụng marginBottom để điều chỉnh khoảng cách
            }}>
                <TouchableOpacity 
                style={{
                    backgroundColor:'#ECF0F1',
                    borderRadius:30,
                    width:354,
                    height:50,
                    alignItems:'center',
                    justifyContent:'center',
                    marginHorizontal: 50, // Sử dụng marginHorizontal để tạo khoảng cách hai bên
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'700',
                        color:'#000000',
                        width:80,
                        height:27,

                    }}>Remove</Text>
                </TouchableOpacity>
            </View>

            
  
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabBarItem}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Home15')}
          style={[styles.tabBarItem, styles.activeTab]}>
            <Icon name="user" size={24} color="#FF6F00" />
            <Text style={styles.tabBarText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    paymentMethod: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    paymentLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    paymentText: {
      fontSize: 16,
    },
    paymentDetail: {
      fontSize: 14,
      color: 'gray',
      marginRight: 10,
    },
    addMethod: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    tabBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: '#e0e0e0',
    },
    tabBarItem: {
      alignItems: 'center',
    },
    tabBarText: {
      fontSize: 12,
      color: '#777',
    },
    activeTab: {
      color: '#FF6F00',
    },
  });
  
  export default Home14;