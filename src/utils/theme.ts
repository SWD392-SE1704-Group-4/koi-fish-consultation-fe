import { Theme } from '@cloudscape-design/components/theming';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

export const theme: Theme = {
    tokens: {
       // Values are applied globally, except for visual contexts
       borderRadiusContainer: '0px',
       colorBackgroundLayoutMain: {
           // Specify value for light and dark mode
           light: 'white',
           dark: 'blue'
       },
       colorTextAccent: '#0073bb',
    },
    contexts: {
       // Values for visual contexts. Unless specified, default values will be applied
       'top-navigation': {
          tokens: {
             colorTextAccent: '#44b9d6',
          },
       },
    },
 };

export const muiTheme = extendTheme({
   components: {
     JoyChip: {
       defaultProps: {
         size: 'sm',
       },
       styleOverrides: {
         root: {
           borderRadius: '4px',
         },
       },
     },
   },
 });