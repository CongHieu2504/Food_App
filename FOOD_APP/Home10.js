import React, { useState } from "react"; 
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home10 = () => {
     //Khởi tạo chọn màu
     const [selectedImage, setSelectedImage] = useState(null);
     const navigation = useNavigation();
  return (
    <View style={{flex:2,backgroundColor:'#FFFFFF'}}>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
           source={require('./img/Ellipse 6.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Itoh</Text>
        <Text style={styles.profilePhone}>+1 11229382748</Text>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My Profile</Text>
          <Image
           source={require('./img/Vectorphai.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Change Password</Text>
          <Image
           source={require('./img/Vectorphai.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Payment Settings</Text>
          <Image
           source={require('./img/Vectorphai.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My Voucher</Text>
          <Image
           source={require('./img/Vectorphai.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notification</Text>
          <Image
           source={require('./img/Vectorphai.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>About Us</Text>
          <Image
           source={require('./img/Vectorphai.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Contact Us</Text>
          <Image
           source={require('./img/Vectorphai.png')}
        />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home11')}
      style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
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
        <TouchableOpacity style={[styles.tabBarItem, styles.activeTab]}>
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
    //backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    backgroundColor:'#FFFFFF'
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
    backgroundColor: '#e0e0e0',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  signOutText: {
    fontSize: 16,
    color: '#000',
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

export default Home10;
