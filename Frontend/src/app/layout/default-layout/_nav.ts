import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: '   '
  },
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    name: 'Tareas',
    url: '/pages/task',
    iconComponent: { name: 'cil-task' },
  },
  {
    name: 'Tareas Realizadas',
    url: '/pages/task/done',
    iconComponent: { name: 'cil-check' },
  },
  {
    name: 'Configuracion',
    url: '/pages/settings',
    iconComponent: { name: 'cil-settings' },
  },
  // {
  //   name: 'Perfil',
  //   url: '/pages/profile',
  //   iconComponent: { name: 'cil-user' },
  // },
  // {
  //   name: 'usuarios',
  //   url: '/pages/users',
  //   iconComponent: { name: 'cil-people' },
  // },
  // {
  //   name: 'CoreUI Free',
  //   url: '/icons/coreui-icons',
  //   icon: 'nav-icon-bullet',
  // }
];
