import React, { useState, useRef, useEffect } from "react";
import { Header } from "react-native-elements";

export default function CamHeader() {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Inventory Scanner', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}