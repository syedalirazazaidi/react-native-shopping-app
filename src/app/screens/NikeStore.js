import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import NikeComponent from '../components/nikestore';
export default function NikeStore() {
  let [shoes, setShoes] = React.useState([]);
  let fetchUsers = async () => {
    try {
      let res = await fetch('/api/shoes');
      let data = await res.json();
      setShoes(data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchUsers();
  }, []);
  if (!shoes.length)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (shoes.length)
    return (
      <SafeAreaView>
        <Text>
          {shoes.map((item) => (
            <Text key={item.id}>
              <NikeComponent item={item} />
            </Text>
          ))}
        </Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    // padding: 40,
    // justifyContent: 'space-between',
  },
});
