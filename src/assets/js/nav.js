
 var data,selectedY;
 var selectedX;
 function fileClick(e) {

     document.getElementById('fileUpload').click();
    //TODO do something with fileList. 
    //console.log(fileList);
 }
 function savePath(e){
     const path=document.getElementById('fileUpload');
     const fileText=document.getElementById('fileText');
    const reader = new FileReader();
    reader.onload = function(){
        let lines;
        var p = new Promise(function(resolve,reject){
            lines = reader.result.split("\n").map(function(lines)
            {
            return lines.split(',');
            })
            resolve(function(){
                    createXSelect();
                    createYSelect();
            }
            )
            
        })
        p.then(function(val) {
            val();
        console.log(lines);

        })
        data=lines;
        fileText.innerHTML=path.files[0].name;

    }
    reader.readAsText(path.files[0])
      
 }
 function createYSelect(){
    const optD=document.createElement('option');
    optD.innerHTML="Select Y axis";
    optD.selected=true;
    optD.disabled=true;
    const selectY=document.createElement('select');
     selectY.setAttribute('class',"selectpicker");
     selectY.setAttribute('id','yAxis');
    selectY.setAttribute('data-live-search',"true");
    selectY.multiple=true;
    selectY.appendChild(optD);
    // selectY.setAttribute('style',"{display:block!important}");
    for (j=0;j<data[0].length;j++){
        //console.log(i,opt);
       const opt= document.createElement('option');
       opt.setAttribute('value',data[0][j]);
     opt.innerHTML=data[0][j];
       opt.setAttribute("style","padding:5px")
       selectY.appendChild(opt);
       
    }
    document.getElementById('navbar-container').appendChild(selectY);
    document.getElementById('yAxis').addEventListener('change', function(){
        selectedY = $(this).val();
    });
 }

 function createXSelect(){
    
    // if(document.getElementById('xAxis'))
    // {
    //     while(document.getElementById('xAxis').hasChildNodes()) {
    //         document.getElementById('xAxis').removeChild(document.getElementById('xAxis').lastChild);
    //         document.getElementById('yAxis').removeChild(document.getElementById('yAxis').lastChild)
    //     }
    // }
    const opt=document.createElement('option');
    opt.innerHTML="Select X axis";
    opt.selected=true;
    opt.disabled=true;
    const selectX=document.createElement('select');
        
    //selectX.setAttribute('class','selectpicker');
    selectX.setAttribute('id','xAxis');
    selectX.appendChild(opt);
    for (j=0;j<data[0].length;j++){
        //console.log(i,opt);
        const opt1= document.createElement('option');
        opt1.setAttribute('value',data[0][j]);
        opt1.innerHTML=data[0][j];
        
        selectX.appendChild(opt1);
       
    }   
    
   
    //if(!document.getElementById('xAxis').hasChildNodes()){
        
        document.getElementById('selectx-container').appendChild(selectX);
       
        document.getElementById('xAxis').addEventListener('change', function(){
           selectedX = $(this).val();
            //console.log(selectedX);
            //selectedX=selected;
        
    });
    //}
}


function nav() {
  const skeleton = {
      'parent': {
          'name': 'div',
          'property': {

              'class': 'navbar-container',
              'id':'navbar-container'

          },
      },
      'children': [{
          'parent': {
              'name': 'ul',
              'property': {
                  'class': 'navbar-nav',
                  
              }
          },
          'children': [
            {
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
                                 savePath(e);
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
              
            },
           
          ],
    },
    {
        'parent':{
            'name':'div',
            'property':{
                
                'id':'selectx-container',
            }
        }
    }
   
]
  }

  const nav = document.getElementById('nav')
  nav.appendChild(render(skeleton))
}

 
