import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import store from './store/store';
import { Provider } from 'react-redux';
import { init } from './database/SQliteConfig';
import { MD2DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { LightScheme as ImportedLightScheme } from './theme/lightScheme.js';
import { DarkScheme as ImportedDarkScheme } from './theme/darkScheme.js';
import { useColorScheme } from 'react-native';

// Inicializar la base de datos
init()
  .then(() => console.log('Database initialized'))
  .catch(err => console.log('Database initialized failed', err));

// Definir temas personalizados
const LightTheme = {
  ...MD3LightTheme,
  colors: ImportedLightScheme,
};

const DarkTheme = {
  ...MD2DarkTheme,
  colors: ImportedDarkScheme,
};

export default function App() {
  // Obtener el esquema de color del sistema
  const colorScheme = useColorScheme();

  // Seleccionar el tema adecuado
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainNavigator />
      </PaperProvider>
    </Provider>
  );
}
