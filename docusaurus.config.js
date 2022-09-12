// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mrcsvg', // Usually your GitHub org/user name.
  projectName: 'unico-docs-stage', // Usually your repo name.

  plugins: [    
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // Options here
      // docsRouteBasePath: '/',
      // language: "pt",
    }]    
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],


    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            // spec: 'https://sign-core-uat.acesso.io/swagger/v1/swagger.json',
            spec: 'openapi/swagger.json',
            route: '/sign/additional-resources/api-reference/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],


    

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/unico-color.svg',
        },
        items: [

          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            product: 'all',
            items: [
              {
                type: 'doc',
                label: 'Unico Check',
                docId: 'check/guias/web/release-notes',
              },
              {
                type: 'doc',
                label: 'Unico Sign',
                docId: 'sign/intro',
              },

          
              
            ]
          },

          
          {
            href: 'https://github.com/unico-labs/',
            label: 'GitHub',
            position: 'right',
          },

          

         

          
          



          {
            type: 'localeDropdown',
            position: 'right',
          },

        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Institucional',
            items: [
              {
                label: 'Sobre nós',
                href: 'https://unico.io/quem-somos/',
              },
              {
                label: 'Carreiras',
                href: 'https://carreiras.unico.io/',
              },
              {
                label: 'Imprensa',
                href: 'https://unico.io/',
              },
              {
                label: 'Política de privacidade e OptOut',
                href: 'https://unico.io/politica-de-privacidade/',
              },
            ],
          },
          {
            title: 'Soluções',
            items: [
              {
                label: 'unico | check',
                href: 'https://unico.io/unico-check/',
              },
              {
                label: 'unico | people',
                href: 'https://unico.io/unico-people/',
              },
            ],
          },
          {
            title: 'Blogs',
            items: [
              {
                label: 'unico | check',
                href: 'https://unico.io/unicocheck/blog',
              },
              {
                label: 'unico | people',
                href: 'https://www.unico.io/unicopeople/blog',
              },
            ],
          },
          {
            title: 'Acompanhe',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/unicoidtech',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/unicoidtech/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/acesso-digital/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/unicoidtech',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} unico. All rights reserved. Built with Docusaurus.`,
      },


      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
