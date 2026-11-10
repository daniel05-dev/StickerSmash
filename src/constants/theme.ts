/**
 * Identidad visual "Frutiger Aero" de StickerSmash.
 *
 * Cristal, agua y césped: paleta acuosa luminosa, superficies de vidrio,
 * botones glossy y tipografía humanista redondeada (Nunito Sans).
 *
 * Todos los componentes importan sus colores, radios y espaciados de aquí.
 * Ningún archivo de src/ debe definir colores sueltos.
 */

export const colors = {
  /** Cielo acuoso claro (fondo general de la app). */
  background: '#E9F6FA',
  /** Aqua profundo: arranque del degradado y zona tras la barra de estado. */
  backgroundDeep: '#0B6E97',
  /** Aqua medio del horizonte. */
  backgroundHorizon: '#7FCBE3',
  /** Vidrio pulido (tarjetas). */
  surface: '#FFFFFF',
  /** Vidrio esmerilado (hojas modales, listas). */
  surfaceAlt: '#F2FAFD',
  /** Tinta azul-verdosa (texto principal). */
  text: '#123842',
  /** Texto secundario. */
  textMuted: '#52707B',
  /** Aqua profundo para controles y pestaña activa (5.1:1 con blanco). */
  accent: '#007899',
  /** Aqua cielo: botones glossy y brillos (6.3:1 con la tinta). */
  accentBright: '#39C8E4',
  /** Aqua pálido para degradados y halos. */
  accentGlow: '#7FDCEF',
  /** Verde césped para acentos decorativos. */
  secondary: '#59B22F',
  /** Texto sobre accent. */
  onAccent: '#FFFFFF',
  /** Texto (tinta) sobre accentBright. */
  onAccentBright: '#123842',
  /** Borde de vidrio. */
  border: '#BFE2EC',
  /** Vidrio translúcido para superposiciones. */
  glass: 'rgba(255, 255, 255, 0.55)',
  /** Vidrio translúcido más opaco (bordes glossy). */
  glassStrong: 'rgba(255, 255, 255, 0.75)',
  /** Sombra azulada de las tarjetas de cristal. */
  shadow: '#4A93AC',
  /** Indicador de la pestaña activa (Android y web). */
  tabIndicator: 'rgba(0, 120, 153, 0.12)',
  /** Onda al pulsar una pestaña (Android). */
  tabRipple: 'rgba(0, 120, 153, 0.25)',
} as const;

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  /** Botones pastilla. */
  pill: 999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const typography = {
  display: 'NunitoSans-Bold',
  body: 'NunitoSans-Regular',
  sizeSm: 13,
  sizeMd: 16,
  sizeLg: 20,
  sizeXl: 28,
} as const;

/** Degradado del cielo: arranca en aqua profundo (barra de estado con
 * contenido claro) y se aclara hasta el cielo de la app. */
export const skyGradient = {
  colors: [colors.backgroundDeep, colors.backgroundHorizon, colors.accentGlow, colors.background],
  locations: [0, 0.12, 0.28, 0.5],
} as const;

/** Sombra suave de las tarjetas de cristal. */
export const glassShadow = {
  shadowColor: colors.shadow,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.25,
  shadowRadius: 12,
  elevation: 6,
} as const;
