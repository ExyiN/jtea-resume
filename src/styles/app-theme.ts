import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { Preset } from '@primeuix/themes/types';
import { ButtonStyle } from './button';
import { MenubarStyle } from './menubar';
import { TooltipStyle } from './tooltip';

const AppTheme: Preset = definePreset(Aura, {
  components: {
    button: ButtonStyle,
    menubar: MenubarStyle,
    tooltip: TooltipStyle,
  },
});

export default AppTheme;
