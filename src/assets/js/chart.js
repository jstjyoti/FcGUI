const asideContainer = document.getElementById('aside')
let prevWidth = asideContainer.offsetWidth
var chart = new FusionCharts({
    type: 'column2d',
    'width': '500',
    'height': '400',
    renderAt: main,
    dataFormat: 'json',
    dataSource: sample_column2d
}).render()
