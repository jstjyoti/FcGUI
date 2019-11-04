 function fileClick(e) {

     document.getElementById('fileUpload').click();
    //TODO do something with fileList. 
    //console.log(fileList);
 }
 function savePath(e){
     const path=document.getElementById('fileUpload');
     const fileText=document.getElementById('fileText');
    //  if(path.value){
    //     fileText.innerHTML=path.value;
    // }
     if(path.files[0].name){
         fileText.innerHTML=path.files[0].name;
     }
     else{
        fileText.innerHTML="No file Chosen";
     }
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
                  
                  
              },
              'children':[
                 {
                    'parent':{
                        'name' : 'input',
                        'property':{
                            'type':'file',
                            'id':'fileUpload',
                            'class':'filestyle',
                            'data-classButton':"btn btn-primary",
                            'data-input':"false",
                            'data-classIcon':"icon-plus",
                            'data-buttonText':"Upload CSV",
                            'accept':'.csv',
                            'hidden':'hidden'
                        },
                        'event':function(){
                            this.addEventListener("change",function(e){
                                savePath(e)
                            })
                        }
                    }
                 },
                 {
                     'parent':{
                         'name':'button',
                         'property':{
                            'type':'button',
                            'id':'fileButton'
                         },
                         'text':'Choose CSV file',
                         'event':function(){
                            this.addEventListener("click",function(e){
                                fileClick(e);
                            })
                        }
                     }
                 },
                 {
                    'parent':{
                        'name':'span',
                        'property':{
                           'id':'fileText'
                        },
                        "text":'No File Chosen yet'
                    }
                },

              ]
              
      }]
    }]
  }

  const nav = document.getElementById('nav')
  nav.appendChild(render(skeleton))
}
