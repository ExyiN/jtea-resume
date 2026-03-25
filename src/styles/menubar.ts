import { MenubarDesignTokens } from '@primeuix/themes/types/menubar';
import { MenubarPassThrough } from 'primeng/menubar';

export const MenubarStyle: MenubarDesignTokens = {
  root: {
    borderRadius: '1rem',
    padding: '0.25rem 1rem',
  },
  submenu: {
    borderRadius: '1rem',
  },
  baseItem: {
    borderRadius: '1rem',
  },
  mobileButton: {
    borderRadius: '1rem',
  },
};

export const MenubarPT: MenubarPassThrough = {
  rootList: {
    class: 'max-md:!mt-2'
  },
  button: {
    class: 'p-3 !size-auto',
  },
};
