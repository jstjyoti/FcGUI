var skeleton = {
    parent: {
        name: 'table',
        property: {
            class: 'dataTable'
        }
    },
    children: []
}

function createROW(){
    var row = {
        parent: {
            name: 'tr',
            property: {
                class: 'records'
            },
            event: function(){},
        },
        children: []
    }
    return row
}

function createCELL(text){
    var cell = {
        parent: {
            name: 'td',
            text: text
        },
        children: []
    }
    return cell
}


function getDataTable(){
    var chartData = chart.getJSONData()
    if(chartData.categories){
        //multiseries data
    }else{
        var headerRow = createROW() 
        var label = createCELL(chartData.chart.xaxisname)
        var value = createCELL(chartData.chart.yaxisname)

        headerRow.children.push(label)
        headerRow.children.push(value)
        skeleton.children.push(headerRow)
        for(let i = 0;i < chartData.data.length; i++){
            var row = createROW()
            row.children.push(createCELL(chartData.data[i].label))
            row.children.push(createCELL(chartData.data[i].value))
            skeleton.children.push(row)
        }
    }
}

