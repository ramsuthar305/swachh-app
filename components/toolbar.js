import React, { useState } from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../constants/styles';

export default function Toolbar({ cameraRef, setImage, navigation }) {

    const [capturing, setCapturing] = useState(false)
    const [picdata, setPicdata] = useState(null)
    const [IsImage, setIsImage] = useState(false)

    async function takePicture() {

        if (cameraRef) {
            setCapturing(true)
            const options = { quality: 0.1, base64: true, uri: true };
            let photo = await cameraRef.takePictureAsync(options);
            setCapturing(false)
            setIsImage(true)
            await cameraRef.pausePreview()
            console.log('This is the photo :\n', photo.uri)
        }

    }
    async function resume() {
        setIsImage(false)
        await cameraRef.resumePreview()
    }

    async function account() {
        navigation.navigate('Profile')
    }

    return (
        <Grid style={styles.bottomToolbar}>
            <Row>
                <Col style={styles.alignCenter}>
                    <TouchableOpacity onPress={() => navigation.navigate('EntryRecords')}>
                    <MaterialIcons name="history" size={30} color="white" />
                    </TouchableOpacity>
                </Col>

                <Col size={2} style={styles.alignCenter}>
                    <TouchableWithoutFeedback
                        onPress={takePicture}>
                        <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                            {capturing && <View style={styles.captureBtnInternal} />}
                        </View>
                    </TouchableWithoutFeedback>


                </Col>
                {
                    IsImage ?
                        <Col style={styles.alignCenter}>
                            <TouchableOpacity onPress={resume}>
                                <Feather name="check" size={30} color="white" />
                            </TouchableOpacity>
                        </Col> : <Col style={styles.alignCenter}>
                            <TouchableOpacity onPress={account}>
                            <MaterialCommunityIcons name="account" size={30} color="white" />
                            </TouchableOpacity>
                        </Col>
                }
            </Row>
        </Grid>);
}