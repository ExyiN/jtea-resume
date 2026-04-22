import { definePreset, palette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { Preset } from '@primeuix/themes/types';
import { ButtonStyle } from './button';
import { ChipStyle } from './chip';
import { MenubarStyle } from './menubar';
import { PanelStyle } from './panel';
import { TagStyle } from './tag';
import { TooltipStyle } from './tooltip';

const AppTheme: Preset = definePreset(Aura, {
  semantic: {
    primary: palette('{indigo}'),
  },
  components: {
    button: ButtonStyle,
    chip: ChipStyle,
    menubar: MenubarStyle,
    panel: PanelStyle,
    tag: TagStyle,
    tooltip: TooltipStyle,
  },
});

export default AppTheme;
