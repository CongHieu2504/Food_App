import React from "react";
import { View, Text , Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import navigation

const Home1 = () => {

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
        source={require('./img/pict.png')}
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
        <TouchableOpacity>
          <View style= {{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'black',
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
        <TouchableOpacity onPress={() => navigation.navigate('Home3')}>
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

export default Home1;