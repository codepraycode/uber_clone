import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

// Widgets
import SafeAreaView from '../widgets/safeArea';

// Components
import NavOptions from '../components/NavOptions';

// Store
import { setDestination,setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispath = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        
        <Image 
          source={{
            uri:'https://links.papareact.com/gzs',
          }}

          style={{
            width:100,
            height:100,
            resizeMode:'contain'
          }}
        />


        <GooglePlacesAutocomplete
          placeholder='Where From?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          styles={{
            container:{
              flex:0
            },
            textInput:{
              fontSize:18,
            }
          }}

          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            dispath(setOrigin({
              location:details.geometry.location,
              description:data.description,
            }))


            dispath(setDestination(null))
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={3}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />

        <NavOptions />
      </View>


      
    </SafeAreaView>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  text:{
    color:"blue",
  }
})