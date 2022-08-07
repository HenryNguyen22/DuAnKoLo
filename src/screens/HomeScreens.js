import {
  StyleSheet, TextInput, View, Image, Text, ScrollView
} from "react-native"
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const images = [
  'https://i.pinimg.com/564x/6f/60/7c/6f607c309ef9023cee96827200b6e020.jpg',
  'https://i.pinimg.com/736x/83/cc/d8/83ccd845930f04089eb3325011a0fcdf.jpg',
  'https://i.pinimg.com/564x/ea/57/e5/ea57e5b0d32bd766e808b3f8152192c3.jpg'
]

const HomeScreens = () => {

  const [imgActive, setImgActive] = useState(0);

  const [search, setSearch] = useState('');

  onchange = (nativeEvent) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide != imgActive) {
      setImgActive(slide);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 20, position: 'absolute', left: 10, top: 20 }}>
          <Image source={require('../Images/search.png')} style={{ height: 24, width: 24 }} />
        </View>
        <TextInput
          style={styles.textSearch}
          value={search}
          placeholder="Tìm kiếm trên KoLo"
          fontSize={20}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      {/* Slide show */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SafeAreaView style={styles.container1}>
            <View style={styles.wrap}>
              <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                horizontal
                style={styles.wrap}
              >
                {
                  images.map((e, index) =>
                    <Image
                      key={e}
                      resizeMode='cover'
                      style={styles.wrap}
                      source={{ uri: e }}
                    />
                  )
                }
              </ScrollView>
              <View style={styles.wrapDot}>
                {
                  images.map((e, index) =>
                    <Text
                      key={e}
                      style={imgActive == index ? styles.dotActive : styles.dot}
                    >●</Text>
                  )
                }
              </View>
            </View>
          </SafeAreaView>
        </View>

        {/* Khám phá danh mục */}
        <View style={styles.container2} >
          <Text style={styles.text}>Khám phá danh mục</Text>
          <Text style={{ fontSize: 15, color: '#FF7C32' }}>Xem thêm...</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
          <View style={styles.container3}>
            <Image style={styles.imgProduct} source={require('../Images/vega.jpg')} />
            <Text style={styles.text1}>Vegan Resto</Text>
            <Text style={styles.text2}>12 Mins</Text>
          </View>

          <View style={styles.container3}>
            <Image style={styles.imgProduct} source={require('../Images/heathy.jpg')} />
            <Text style={styles.text1}>Healthy Food</Text>
            <Text style={styles.text2}>12 Mins</Text>
          </View>

          <View style={styles.container3}>
            <Image style={styles.imgProduct} source={require('../Images/candy.jpg')} />
            <Text style={styles.text1}>Good Food</Text>
            <Text style={styles.text2}>12 Mins</Text>
          </View>

          <View style={styles.container3}>
            <Image style={styles.imgProduct} source={require('../Images/cutery.jpg')} />
            <Text style={styles.text1}>Smart Resto</Text>
            <Text style={styles.text2}>12 Mins</Text>
          </View>
        </ScrollView>

        {/* Kolo có gì mới? */}

        <View style={styles.container2}>
          <Text style={styles.text}>KoLo có gì mới?</Text>
        </View>

        <View style={styles.container5} >
          <View style={styles.container4}>
            <Image style={styles.imgVegan} source={require('../Images/vega.jpg')} />
          </View>

          <View style={styles.container4}>
            <Image style={styles.imgVegan} source={require('../Images/candy.jpg')} />
          </View>
        </View>

        <View style={styles.container6}>
          <View style={styles.container4}>
            <Image style={styles.imgVegan1} source={require('../Images/cutery.jpg')} />
          </View>

          <View style={styles.container4}>
            <Image style={styles.imgVegan1} source={require('../Images/heathy.jpg')} />
          </View>

          <View style={styles.container4}>
            <Image style={styles.imgVegan1} source={require('../Images/vega.jpg')} />
          </View>
        </View>

        {/* danh mục sản phẩm */}

        <View style={styles.container2}>
          <Text style={styles.text}>Danh mục sản phẩm</Text>
        </View>
        <View style={styles.container7}>
          <View style={styles.borderImg}>
            <Image style={styles.imgCandy} source={require('../Images/candy.jpg')} />
            <Text numberOfLines={1} style={styles.text4}>Đây là demo thôi bala bala</Text>
            <Text style={styles.text5}>123.000.000 đ</Text>
          </View>
          <View style={styles.borderImg}>
            <Image style={styles.imgCandy} source={require('../Images/cutery.jpg')} />
            <Text numberOfLines={1} style={styles.text4}>Đây là demo thôi bala bala</Text>
            <Text style={styles.text5}>123.000.000 đ</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
  imgVegan: {
    height: 90,
    width: 185,
    borderRadius: 15,
  },
  imgVegan1: {
    height: 80,
    width: 120,
    borderRadius: 15,
  },
  imgCandy: {
    height: 150,
    width: 150,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 18,
  },
  borderImg: {
    borderWidth: 0.2,
    height: 250,
    width: 185,
    marginVertical: 10,
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    //backgroundColor:'#FFD700',
  },
  // slide show
  container1: {
    // flex: 1,
    alignItems: 'center',
    borderRadius: 16,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  container3: {
    marginHorizontal: 5,
    height: 150,
    width: 100,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
  },
  imgProduct: {
    height: 100,
    width: 100,
  },
  container4: {
    marginHorizontal: 5,
  },
  container5: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 5,

  },
  container6: {
    flexDirection: 'row',
  },
  container7: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  text2: {
    fontSize: 15,
    color: 'grey'
  },

  text3: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  wrap: {
    width: 392,
    height: 200,
    borderRadius: 16,
    marginVertical: 2,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    color: 'white',
    margin: 3,
  },
  dot: {
    color: 'grey',
    margin: 3,
  },

  search: {
    height: '9%',
    width: '100%',
    backgroundColor: '#fef6ed',
    flexDirection: 'row',
    // position: 'relative',
    paddingLeft: 20,
  },
  textSearch: {
    borderWidth: 1,
    height: 40,
    width: '70%',
    borderColor: '#000000',
    borderRadius: 6,
    marginVertical: 10,
    paddingLeft: 60,
  },
  searchIcon: {
    height: 30,
    width: 30,
    position: 'absolute',
  },
  text4: {
    fontSize: 15,
    color: '#000000',
    marginHorizontal: 20,
  },
  text5: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 20,
  }
})