
var data,datacsv,selectedX="";
 var selectedY=[];
 function fileClick(e) {

     document.getElementById('fileUpload').click();
    //TODO do something with fileList. 
    //console.log(fileList);
 }
 function savePath(e){
     selectedX=undefined;
     selectedY=[];
     const path=document.getElementById('fileUpload');
     const fileText=document.getElementById('fileText');
    const reader = new FileReader();
    reader.onload = function(){
        let lines;
        var p = new Promise(function(resolve,reject){
            datacsv=reader.result;
            lines = reader.result.split("\n").map(function(lines)
            {
            return lines.split(',');
            })
            resolve(function(){
                chart = new FusionCharts({
                    type: 'column2d',
                    'width': '500',
                    'height': '400',
                    renderAt: 'main',
                    dataFormat: 'json',
                    
                    events: {
                        'dataLabelClick': function (e) {
                            handleClicks(e, parent)
                        },
                        'dataPlotClick': function (e) {
                            handleClicks(e, parent)
                        },
                        'legendItemClicked': function (e) {
                            handleClicks(e, parent)
                        },
                        'drawComplete': function (e, d) {
                            parent = document.getElementById('main')
                            parent.addEventListener('click', handleClicks)
                        },
                        'rendered': function(e, d){
                            chartObject = chart.getJSONData();
                            cloneChart = chart.clone();
                        }
                    }
                }).render()

                    createChartSelect();
                    
            }
            )
            
        })
        p.then(function(val) {
            val();
        //console.log(datacsv);

        })
        data=lines;
        fileText.innerHTML=path.files[0].name;
       // console.log(data);

    }
    if(path.files.length>0)
    {
        reader.readAsText(path.files[0])
    }
       
      
 }
 function createChartSelect(){
    if(document.getElementById('selectChart-container').hasChildNodes())
    {
        document.getElementById('selectChart-container').removeChild(document.getElementById("chartType"))      
        //delete the select and then create again i.e.,  it should be deleting if already exist
    }
    const opt=document.createElement('option');
    opt.innerHTML="Select Chart Type";
    opt.selected=true;
    opt.disabled=true;
    const select=document.createElement('select');
    select.setAttribute('id','chartType');
    select.appendChild(opt)
    const chartType=["line","area2d","pie2d","pie3d","column2d","column3d","bar2d","bar3d","mscolumn2d","mscolumn3d","msbar2d","msbar3d"]
    for(var i of chartType){
        const opt1= document.createElement('option');
        opt1.setAttribute('value',i);
        opt1.innerHTML=i;
        select.appendChild(opt1);
        
    }
    document.getElementById('selectChart-container').appendChild(select);
    document.getElementById('chartType').addEventListener('input', function(){
        type = $(this).val();
        // csvJSONSingleSeries(datacsv);
        chart.chartType(type);
        createXSelect();
        createYSelect();
    });

    
 }
 function createYSelect(){
    if(document.getElementById('selecty-container').hasChildNodes())
    {
        document.getElementById('selecty-container').removeChild(document.getElementById("yAxis"))      
        //delete the select and then create again i.e.,  it should be deleting if already exist
    }
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
    document.getElementById('selecty-container').appendChild(selectY);
    document.getElementById('yAxis').addEventListener('input', function(){
        selectedY = $(this).val();
        // csvJSONSingleSeries(datacsv);
        canHaveJson(selectedX,selectedY);
    });
 }

 function createXSelect(){
    
    if(document.getElementById('selectx-container').hasChildNodes())
    {
        document.getElementById('selectx-container').removeChild(document.getElementById("xAxis"))      //delete the select and then create again i.e.,  it should be deleting if already exist
    }
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
        
        document.getElementById('selectx-container').appendChild(selectX);
       
        document.getElementById('xAxis').addEventListener('input', function(){
           selectedX = $(this).val();
           canHaveJson(selectedX,selectedY);
     }); 
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
                
                'id':'selectChart-container',
            }
        }
    },
    {
        'parent':{
            'name':'div',
            'property':{
                
                'id':'selectx-container',
            }
        }
    },
    {
        'parent':{
            'name':'div',
            'property':{
                
                'id':'selecty-container',
            }
        }
    },
   
]
  }

  const nav = document.getElementById('nav')
  nav.appendChild(render(skeleton))
}

