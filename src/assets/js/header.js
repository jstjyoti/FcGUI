function header() {
  const skeleton = {
      'parent': {
          'name': 'div',
          'property': {
              'class': 'head-container'
           },
      },
      'children': [{
          'parent': {
              'name': 'ul',
              'property': {
                  'class': 'head-nav'
              }
          },
          'children': [{
              'parent': {
                  'name': 'li',
                  'property': {
                      'class': 'head-logo-container'
                  }
              },
              'children': [{
                  'parent': {
                      'name': 'a',
                      'property': {
                          'class': 'head-logo-link',
                          'href':'https://www.fusioncharts.com',
                          'target':'_blank'
                      }
                  },
                  'children':[{
                    'parent': {
                        'name': 'img',
                        'property': {
                            'class': 'head-logo',
                            'src':'https://www.fusioncharts.com/dev/_nuxt/img/d427d93.svg',
                        }
                    }

                  }]
              }]
          }
        ]
       }
      ]
    }
  const header = document.getElementById('header')
  header.appendChild(render(skeleton))
}

