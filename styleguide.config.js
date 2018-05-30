module.exports = {
    components: 'src/components/**/*.js',
    ignore: ['**/components/TableOfContents.js', '**/components/AuthMainContainer.js'],
    ribbon: {
      url: 'http://github.com/drteresavasquez',
      text: 'See App In Action'
    },
    template: {
      favicon: './public/favicon.ico',
      head: {
        links: [
          {
            rel: 'stylesheet',
            href: './node_modules/semantic-ui-css/semantic.min.css'
          },
          {
            rel: 'stylesheet',
            href: './src/styles/styleguidist.css'
          }
        ]
      }
    },
    theme: {
        color: {
          link: 'white',
          linkHover: 'salmon',
          sidebarBackground: '#000000',
        },
        fontFamily: {
          base: '"Droid Sans"',
        }, 
        fontSize:{
          small: 13,
        }
      }
};