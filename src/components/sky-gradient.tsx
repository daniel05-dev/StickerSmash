import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { skyGradient } from '@/constants/theme';

/**
 * Cielo acuoso Frutiger Aero.
 *
 * Arranca en aqua profundo (la zona tras la barra de estado, pensada para
 * contenido claro) y se aclara hasta el fondo general de la app.
 */
export default function SkyGradient() {
  return (
    <LinearGradient
      colors={[...skyGradient.colors]}
      locations={[...skyGradient.locations]}
      style={StyleSheet.absoluteFill}
    />
  );
}
