import { Text, View } from 'react-native';
import useInternetStatus from './useInternetStatus';

const Usage = () => {
    const { isConnected } = useInternetStatus();

    if (isConnected === null) {
        return <Text>Checking connection...</Text>;
    }

    return (
        <View>
            {isConnected ? (
                <Text>You are Online ✅</Text>
            ) : (
                <Text>No Internet Connection ❌</Text>
            )}
        </View>
    );
};

export default Usage;
