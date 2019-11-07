var chartObject; 
var cloneChart ;
function filterLink() {
    let modifiedObject = JSON.stringify(chartObject)
    modifiedObject = JSON.parse(modifiedObject)
    if (modifiedObject['chart']['clickURL']) {
        delete modifiedObject['chart']['clickURL']   
    }

    function checkType() {
        const type = chart.chartType()
        const types = {
            'singleseries': ['column2d', 'area2d', 'line', 'bar2d'],
            'mutliseries': ['mscolumn2d']
        }
        for (let t in types) {
            for (let series in types[t]) {
                if (series === type) {
                    debugger
                    return series
                }
            }
        }
    }
    let dataSeries = checkType()
    if (dataSeries === 'singleseries') {
        for(let value of modifiedObject['data']) {
            if (value['link']) {
                delete value['link']
            }
        }
    } else if (dataSeries === 'multiseries') {
        for(let depth1 of modifiedObject['dataset']) {
            for(let depth2 of depth1['data']) {
                if (depth2['link']) {
                    delete depth2['link']
                }
            }
        }
    }
    return modifiedObject
}