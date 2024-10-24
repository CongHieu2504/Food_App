import React, { useState } from "react"; 
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home13 = () => {
     //Khởi tạo chọn màu
     const [selectedImage, setSelectedImage] = useState(null);
     const navigation = useNavigation();
  return (
    <View style={{flex:2}}>
    <ScrollView contentContainerStyle={styles.container}>
    <View style={{             
                alignItems:'center',
                justifyContent:'center',
                width:200,
                height:60,
                left:100,
                marginTop: 5,
                
            }}>
                <Text style={{fontSize:20, fontWeight:700}}>Add Credit Card</Text>
            </View>
      <View style={styles.profileSection}>

        <Image
           source={require('./img/card.png')}
          style={styles.profileImage}
        />
        
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Bank name</Text>
          <Text style={styles.menuText}>AZANEN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Your name</Text>
        <Text style={styles.menuText}>Ioth</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Card number</Text>
        <Text style={styles.menuText}>4444 3784 1380 6739</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Data</Text>
        <Text style={styles.menuText}>02/22</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>CVV</Text>
        <Text style={styles.menuText}>877</Text>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home14')}
      style={styles.signOutButton}>
        <Text style={styles.signOutText}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
    <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home8')}
        style={styles.tabBarItem}>
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
        <TouchableOpacity 
        style={[styles.tabBarItem, styles.activeTab]}>
        <Icon name="user" size={24} color="#000000" />
          <Text style={styles.tabBarText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:'#FFFFFF',
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 360,
    height: 200,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profilePhone: {
    fontSize: 16,
    color: 'gray',
  },
  menuSection: {
    marginHorizontal: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuText: {
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: '#D35400',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,

    
  },
  signOutText: {
    fontSize: 18,
    color: '#FFFFFF',
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

export default Home13;
