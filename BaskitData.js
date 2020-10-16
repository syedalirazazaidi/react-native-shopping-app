import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BaskitList from './BaskitList';
import {removeProduct} from './src/app/redux/store/slice';

const BaskitContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {products, total} = state;
  onDelete = (item) => {
    dispatch(removeProduct(item));
  };
  return (
    <View style={{paddingTop: 30, height: 330}}>
      {products && (
        <FlatList
          style={styles.container}
          data={products}
          renderItem={({item}) => (
            <BaskitList
              name={item.name}
              price={item.price}
              image={item.photo}
              onPress={() => onDelete(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // margin: 5,
  },
});

export default BaskitContainer;
