var type;
var json,datasource,newchart,categories;
var dataformat="json";
var axis;
String.prototype.trimRight = function(charlist) {
  if (charlist === undefined)
    charlist = "\s";

  return this.replace(new RegExp("[" + charlist + "]+$"), "");
};

function canHaveJson(selectedX,selectedY){
  //if selected y is selected in x then show message and deselect Y
  if(selectedY==null){
    alert("select some columns in y axis")
  }
  else if(selectedX&&selectedY.length>0)
  {
    if((type.indexOf("ms")!=-1)&&(selectedY.length>1))
     csvJSONMultiSeries(datacsv);
    else
      csvJSONSingleSeries(datacsv);
     
  }

}
function csvJSONSingleSeries(csv){

  let lines=csv.split("\n");

  let result = [];
 axis=[];
  var headers=lines[0].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); //ignore "," 
  axis.push(selectedX)
  for (i=0;i< selectedY.length;i++){
    axis.push(selectedY[i]);
  }
  for(var i=1;i<lines.length;i++){

	  let obj = {};
	  let currentline=lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    
	  for(var j=0;j< axis.length;j++ ){
      if(currentline[headers.indexOf(axis[j])].indexOf("\r")!=-1)
        currentline[headers.indexOf(axis[j])]=currentline[headers.indexOf(axis[j])].trimRight("\r")
      if(j==0){
        obj["label"] = currentline[headers.indexOf(axis[j])];
      }
      else 
        obj["value"] = currentline[headers.indexOf(axis[j])];
      
	  }

	  result.push(obj);

  }
  
  json=JSON.parse(JSON.stringify(result)); //JSON
  createDataSource();
}

function csvJSONMultiSeries(csv){
  json=[],
    categories=[];
   
    let category=[];
    let lines=csv.split("\n");

    let data = [];
    var obj;
 axis=[];
  var headers=lines[0].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  axis.push(selectedX)
  for (var i=0;i< selectedY.length;i++){
    axis.push(selectedY[i]);
  }
  for(i=1;i<lines.length;i++){
     obj = { };
    let currentline=lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    if(currentline[headers.indexOf(axis[0])].indexOf("\r")!=-1)
      currentline[headers.indexOf(axis[0])]=currentline[headers.indexOf(axis[0])].trimRight("\r")
    obj["label"] = currentline[headers.indexOf(axis[0])];
    category.push(obj);
   
  } 
  categories.push({
    "category" : category
  });
  
    
  for(var j=1;j< axis.length;j++ ){
    data=[]
    for( i=1;i<lines.length;i++)
    {
  
      obj = {};
      let currentline=lines[i].split(",");
      if(currentline[headers.indexOf(axis[j])].indexOf("\r")!=-1)
        currentline[headers.indexOf(axis[j])]=currentline[headers.indexOf(axis[j])].trimRight("\r")
        obj["value"] = currentline[headers.indexOf(axis[j])];
        data.push(obj);
      
    }
    json.push({"seriesname":axis[j],"data":data})
    
  }

  
  createDataSource();

}

function createDataSource(){
  const dataset=json;
  
  const chartobj={
   
    "xaxisname":selectedX,
    "yaxisname":selectedY[selectedY.length-1],

  }
  if(type.indexOf("ms")==-1)
  {
    datasource={
      "chart":chartobj,
      "data":dataset,
    }
  }
  else
  {
    datasource={
      "chart":chartobj,
      "categories":categories,
      "dataset":dataset,
    };
  }
  
  if(chartObject && chartObject["chart"]["caption"])
  {
    datasource["chart"]["caption"]=chartObject["chart"]["caption"];
  }
  if(chartObject && chartObject["chart"]["subcaption"])
  {
    datasource["chart"]["subcaption"]=chartObject["chart"]["subcaption"];
  }
  //chart.chartType(type);
  chartObject = datasource;
  chart.setJSONData(filterLink())
  // chart.setJSONData(datasource);
}