# react-native-use-internet-status
A simple React Native hook to check if the device is connected to the internet.  

## Installation
You can install the package using either **npm** or **yarn**:

### With npm
```
npm install react-native-use-internet-status
```

### With yarn
```
yarn add react-native-use-internet-status
```
### Peer dependency
This package requires [`@react-native-community/netinfo`](https://github.com/react-native-netinfo/react-native-netinfo).
If it’s not already installed in your project, install it as well:

#### With npm
```
npm install @react-native-community/netinfo
```

#### With yarn
```
yarn add @react-native-community/netinfo
```

## Usage
Import the hook and use it in your component to track internet connectivity:
```
import { Text, View } from 'react-native';
import useInternetStatus from 'react-native-use-internet-status';

const App = () => {
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

export default App;
```

## License
This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) for more details.
