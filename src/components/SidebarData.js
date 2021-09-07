import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Nuestra Marca',
    path: '/',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Propósito',
        path: '/nuestra-marca/proposito'
      },
      {
        title: 'Propuesta de valor',
        path: '/nuestra-marca/propuesta-de-valor'
      },
      {
        title: 'Personalidad',
        path: '/nuestra-marca/personalidad'
      },
      {
        title: 'Relación con clientes',
        path: '/nuestra-marca/relacion-clientes'
      },
      {
        title: 'Nuestros Formatos',
        path: '/nuestra-marca/nuestros-formatos'
      }
    ]
  },
  {
    title: 'Colores',
    path: '/colores',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Paleta de colores',
        path: '/colores/paleta-de-colores',
        cName: 'sub-nav'
      },
      {
        title: 'Accesibilidad',
        path: '/colores/accesibilidad',
        cName: 'sub-nav'
      },
      {
        title: 'Buenas prácticas',
        path: '/colores/buenas-practicas',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Logos',
    path: '/logos',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Lider',
        path: '/logos/lider',
        cName: 'sub-nav'
      },
      {
        title: 'Lider.cl',
        path: '/logos/lider-cl',
        cName: 'sub-nav'
      },
      {
        title: 'Express de Lider',
        path: '/logos/express',
        cName: 'sub-nav'
      },
      {
        title: 'Pickup',
        path: '/logos/pickup',
        cName: 'sub-nav'
      },
      {
        title: 'Spark',
        path: '/logos/spark',
        cName: 'sub-nav'
      },
      {
        title: 'Descargas',
        path: '/logos/descargas',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Tipografía y Botones',
    path: '/tipografia-botones',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tipografía',
        path: '/tipografia-botones/tipografia',
        cName: 'sub-nav'
      },
      {
        title: 'Tamaños para digital',
        path: '/tipografia-botones/tamanos',
        cName: 'sub-nav'
      },
      {
        title: 'Botones',
        path: '/tipografia-botones/botones',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Voz y tono',
    path: '/voz-tono',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Momentos del viaje',
        path: '/voz-tono/momentos-viaje'
      },
    ]
  },
  {
    title: 'Recursos de diseño',
    path: '/recursos',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Supermercado',
        path: '/recursos/supermercado'
      },
      {
        title: 'Catálogo',
        path: '/recursos/catalogo'
      },
      {
        title: 'Mail',
        path: '/recursos/mail'
      }
    ]
  }
];
