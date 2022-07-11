import { View, Text } from 'react-native'
import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import tw from 'twrnc';

const Map = () => {
    // const [region, setRegion] = useState()

    // const onRegionChange = (nregion)=>{
    //     setRegion(()=>nregion)
    // }

    return (
        <MapView
            mapType="mutedStandard"
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            // onRegionChange={onRegionChange}
            style={
                tw`flex-1`
            }
        />
    )
}

export default Map