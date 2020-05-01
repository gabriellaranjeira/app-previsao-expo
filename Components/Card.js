import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    
    return (
    <View style={{ ...styles.card, ...props.styles }}>
		{props.children}
    </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
			width: 0,
			height: 2
		},
		marginBottom: 5,
		marginTop: 15,
		shadowRadius: 6,
		shadowOpacity: 0.32,
		backgroundColor: '#000',
		elevation: 4,
		padding: 12,
		borderRadius: 12,
		borderWidth: 3,
		borderStyle: 'dotted',
		borderRadius: 10,
    }
});

export default Card;