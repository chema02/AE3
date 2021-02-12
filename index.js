import { registerRootComponent } from 'expo';

import HomePantalla from './screens/HomePantalla';
import UsuarioPantalla from './screens/UsuarioPantalla';
import EventoPantalla from './screens/EventoPantalla';
import ApuestasPantalla from './screens/ApuestasPantalla';
import MercadoPantalla from './screens/MercadoPantalla'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(MercadoPantalla);
