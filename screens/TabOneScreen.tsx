import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Slider from '@react-native-community/slider';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
	return (
		<View style={styles.container}>
			<Slider style={{ width: 200, height: 40 }} minimumValue={0} maximumValue={1} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
			<Text style={styles.title}>Tab One</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
