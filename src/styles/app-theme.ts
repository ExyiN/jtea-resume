import { definePreset, palette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { Preset } from '@primeuix/themes/types';
import { ButtonStyle } from './button';
import { MenubarStyle } from './menubar';
import { PanelStyle } from './panel';
import { TooltipStyle } from './tooltip';

const AppTheme: Preset = definePreset(Aura, {
  semantic: {
    primary: palette('{indigo}'),
  },
  components: {
    button: ButtonStyle,
    menubar: MenubarStyle,
    panel: PanelStyle,
    tooltip: TooltipStyle,
  },
});

export default AppTheme;
