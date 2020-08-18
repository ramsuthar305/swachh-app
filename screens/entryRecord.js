import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Text, View, Modal, Linking, Platform, Image, Alert, FlatList } from 'react-native';
import * as Font from "expo-font";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EntryCard from '../components/entryRecordCard' 

const fetchFonts = () => {
    console.log("loading font");
    return Font.loadAsync({
        "Quicksand-regular": require("../assets/fonts/Quicksand-Regular.ttf"),
        "Quicksand-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
        "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
        "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    });
};

export default function EntryRecords({ navigation }) {

    // axios
    //     .post("https://us-central1-sahayak-a912a.cloudfunctions.net/app/get_society_detail", data)
    //     .then(async function (response) {
    //         // handle success

    //         try {
    //             const jsonValue = JSON.stringify(response.data);
    //             await AsyncStorage.setItem("value", jsonValue);
    //             console.log("data: " + jsonValue);
    //         } catch (e) {
    //             // saving error
    //             console.log("Got error while storing data to async" + e);
    //         }
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log("ERROR ON HOME", error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    var radio_props = [
        { label: 'High ', value: 0 },
        { label: 'Medium ', value: 1 },
        { label: 'Low ', value: 2 }
    ];

    const [dataLoaded, setDataLoaded] = useState(false);


    const init = async () => {
        try {
            // Keep on showing the SlashScreen

            
            await fetchFonts();
        } catch (e) {
            console.warn(e);
        } finally {
            setDataLoaded(true);
            // Hiding the SplashScreen

        }
    }

    useEffect(() => {
        init();
    }, []);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2dsffds-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48ddsf3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-47fsdf1f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46sfc2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3dsf-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-47dsf1f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    if (!dataLoaded) {
        return (
            <View>
                <Text>Loading....</Text>
            </View>
        );
    } else {
        return (
            <View style={{ paddingHorizontal: wp("4%"),backgroundColor:"white" }}>
                <View style={{ paddingBottom: "7%", paddingTop: "4%" }}>
                    <TouchableOpacity style={{ position: "absolute", top: hp("2%") }}>
                        <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{ alignItems: "center", flexGrow: 1 }}>
                        <Text style={{ fontFamily: "Quicksand-Bold", fontSize: 20, color: "black", textAlign: "center" }} >Your reports</Text>
                    </View>
                </View>
                <FlatList
                    style={{ marginBottom: hp("10%") }}
                    numColumns={1}                  // set number of columns 
                    
                    data={DATA}
                    renderItem={({ item }) => <EntryCard />}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "space-around",
    }
});