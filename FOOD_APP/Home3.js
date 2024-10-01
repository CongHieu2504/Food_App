import React from "react";
import { View, Text , Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import navigation

const Home3 = () => {

    // khai báo navigation
    const navigation = useNavigation(); // Khởi tạo navigation

  return (
    <View style={{
      flex:2,
      backgroundColor: '#D35400',
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Image
        source={require('./img/hinh3.png')}
        style={{with:271, height:312}}
      />

      {/* Tạo nút điều hướng */}
      <View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        marginTop: 200,
      }}>
        {/* Nút 1 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <View style= {{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
          }}>
          </View>
        </TouchableOpacity>

          {/* Nút 2 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <View style= {{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
          }}>
          </View>
        </TouchableOpacity>

        {/* Nút 3 */}
        <TouchableOpacity>
          <View style= {{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
          }}>
          </View>
        </TouchableOpacity>

        {/* Nút 4 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
          <View style= {{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'white',
          }}>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Home3;