/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  checkSidebar: [{type: 'autogenerated', dirName: 'check'}],

  signSidebar: [
    'sign/intro',
    'sign/getting-started',
    'sign/fundamentals',
    {
      type: 'category',
      collapsible: false,      
      label: 'Guias das APIs',
      items: [
          {type: 'autogenerated', dirName: 'sign/api-guides'},
      ],
    },
    {
      type: 'category',
      collapsible: false,      
      label: 'Recursos adicionais',
      items: [
          'sign/additional-resources/faqs',
          {
            type: 'link',
            label: 'API Reference', // The link label
            href: '/sign/additional-resources/api-reference', // The external URL
          },          
      ],
    },

   

  
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;