import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from "@rneui/themed";

const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen"
    }
]


const NavOptions = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        horizontal
        renderItem={({item})=>{
            return (
                <TouchableOpacity
                    style={tw`p-2 pl6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                >
                    <View>
                        <Image
                            source={{
                                uri:item.image
                            }}


                            style={{
                                width:100,
                                height:100,
                                resizeMode:'contain'
                            }}
                        />


                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                        <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright" 
                            color="white"
                            type="antdesign"/>
                    </View>
                </TouchableOpacity>
            )
        }}
      />
    </View>
  )
}

export default NavOptions