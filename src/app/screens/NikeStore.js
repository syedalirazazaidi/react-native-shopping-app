import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import NikeComponent from '../components/nikestore';
import Icon from 'react-native-vector-icons/EvilIcons';
import color from '../assets/Constants/colors';
// import {ScrollView} from 'react-native-gesture-handler';

export default function NikeStore() {
  let [shoes, setShoes] = React.useState([]);
  const [search, onSearch] = React.useState('');
  const [loading, onLoading] = React.useState(false);
  const [error, onError] = React.useState(null);
  let fetchUsers = async () => {
    try {
      let res = await fetch('/api/shoes');
      let data = await res.json();
      setShoes(data);
      onError(error || null);
      onLoading(false), (arrayholder = data);
    } catch (error) {
      // console.log(error);
      onError(error);
      onLoading(false);
    }
  };
  searchFilterFunction = (text) => {
    const newData = arrayholder.filter((item) => {
      const itemData = `${item.name.toUpperCase()} `;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setShoes(newData);
  };
  React.useEffect(() => {
    fetchUsers();
  }, []);
  if (!shoes.length)
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  return (
    <SafeAreaView style={styles.tainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => searchFilterFunction(text)}
          autoCorrect={false}
          placeholder="Find shoes"
        />
        <Icon style={styles.icon} name="search" size={39} />
      </View>
      <ScrollView>
        <Text style={{marginTop: 20}}>
          {shoes && (
            <FlatList
              data={shoes}
              renderItem={({item}) => <NikeComponent item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  textInput: {
    backgroundColor: color.white,
    borderRadius: 25,
    paddingLeft: 23,
    width: '100%',
    fontSize: 18,
    padding: 15,
    position: 'relative',
    marginRight: 15,
  },
  icon: {
    borderRadius: 25,
    padding: 4,
    marginTop: 10,
    margin: -6,
    width: 44,
    height: 44,
    backgroundColor: color.darkBlue,
    position: 'absolute',
    left: 330,
    right: 30,
    bottom: 13,
    color: color.white,
  },
});
