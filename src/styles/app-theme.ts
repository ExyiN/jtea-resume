import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { Preset } from '@primeuix/themes/types';
import { MenubarStyle } from './menubar';

const AppTheme: Preset = definePreset(Aura, {
  components: {
    menubar: MenubarStyle,
  },
});

export default AppTheme;
