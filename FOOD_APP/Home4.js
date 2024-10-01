import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import navigation

const Home4 = () => {

    // khai báo navigation
    const navigation = useNavigation(); // Khởi tạo navigation

  return (
    <View style={{
      flex: 2,
      backgroundColor: '#D35400',
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Image
        source={require('./img/hinh4.png')}
        style={{ width: 271, height: 312 }} // Chỉnh lại width thay vì with
      />

      {/* Tạo nút điều hướng */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center', 
        width: 200,
        marginTop: 200,
      }}>
        {/* Nút 1 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <View style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
            marginHorizontal: 5, // Tạo khoảng cách giữa các nút
          }}>
          </View>
        </TouchableOpacity>

        {/* Nút 2 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <View style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
            marginHorizontal: 5, // Tạo khoảng cách giữa các nút
          }}>
          </View>
        </TouchableOpacity>

        {/* Nút 3 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home3')}>
          <View style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
            marginHorizontal: 5, // Tạo khoảng cách giữa các nút
          }}>
          </View>
        </TouchableOpacity>

        {/* Nút 4 */}
        <TouchableOpacity>
          <View style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
            marginHorizontal: 5, // Tạo khoảng cách giữa các nút
          }}>
          </View>
        </TouchableOpacity>

        {/* Nút mũi tên điều hướng */}
        <TouchableOpacity onPress={() => navigation.navigate('Home5')}>
          <View style={{
            width: 0,
            height: 0,
            borderTopWidth: 10,
            borderBottomWidth: 10,
            borderLeftWidth: 15,
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'white',
            marginLeft: 15, // Tạo khoảng cách với nút tròn
          }}>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Home4;
