import { Text, View } from 'react-native';
import { useInternetStatus } from './useInternetStatus';

const Usage = () => {
    const { isConnected } = useInternetStatus();

    return (
        <View>
            {isConnected ? (
                <Text>You are Online ✅</Text>
            ) : (
                <>
                    {isConnected === null ? (
                        <Text>Loading...</Text>
                    ) : (
                        <Text>No Internet Connection ❌</Text>
                    )}
                </>
            )}
        </View>
    );
};

export default Usage;
