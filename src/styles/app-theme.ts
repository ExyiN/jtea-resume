import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import MenubarStyle from './menubar';

const AppTheme = definePreset(Aura, {
  components: {
    menubar: MenubarStyle,
  },
});

export default AppTheme;
