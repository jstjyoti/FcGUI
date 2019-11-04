// function showHideDetail(e) {
//   let dom = e.target
//   const sideNav = document.querySelector('.nav-detail')
//   function deleteNode() {
//       while (sideNav.hasChildNodes()) {
//           sideNav.removeChild(sideNav.lastChild)
//       }
//   }
//   while (dom.tagName !== 'LI') {
//       dom = dom.parentElement
//   }
//   if (dom.classList.contains('nav-link-active')) {
//       sideNav.classList.add('nav-detail-hide')
//       deleteNode()
//       dom.classList.remove('nav-link-active')
//       return 0
//   } else {
//       // remove if someone has it
//       const nodes = Array.from(document.querySelectorAll('.nav-link-container'))
//       for (var node of nodes) {
//           if (node.classList.contains('nav-link-active')) {
//               node.classList.remove('nav-link-active')
//               break;
//           }
//       }
//       dom.classList.add('nav-link-active')
//       if (sideNav.classList.contains('nav-detail-hide') === false) {
//           deleteNode()
//       } else {
//           sideNav.classList.remove('nav-detail-hide')
//       }
//       return 1
//   }
// }
function uploadCSV(e){
    const dom=e.target;
    const actionelement=document.querySelector('.nav-dataloadButton-container');
    console.log(actionelement.hasChildNodes()) 
    
    const input={
        'parent':{
            'name' : 'input',
            'property':{
                'type':'file',
                'accept':'.csv'
            }
        }
    }
    dom.appendChild(render(input));
    remove

} 
function nav() {
  const skeleton = {
      'parent': {
          'name': 'div',
          'property': {
              'class': 'navbar-container'
          },
      },
      'children': [{
          'parent': {
              'name': 'ul',
              'property': {
                  'class': 'navbar-nav'
              }
          },
          'children': [{
              'parent': {
                  'name': 'li',
                  'property': {
                      'class': 'nav-dataloadButton-container'
                  },
                  "text":"Upload CSV"
                  ,
                  'event': function () {
                      // onclick will open nav-detail tab, each tab
                      // will open a different width
                      // will add class
                      this.addEventListener('click', function (e) {
                          uploadCSV(e);
                      })

                  }
              },
              
      }]
    }]
  }

  const nav = document.getElementById('nav')
  nav.appendChild(render(skeleton))
}
