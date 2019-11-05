const asideContainer = document.getElementById('aside')
let prevWidth = asideContainer.offsetWidth
const chart = new FusionCharts({
    type: 'column2d',
    'width': '500',
    'height': '400',
    renderAt: main,
    dataFormat: 'json',
    dataSource: sample_column2d
}).render()
setInterval(() => {
    if (asideContainer.offsetWidth !== prevWidth) {
        prevWidth = asideContainer.offsetWidth
        chart.resizeTo(0.9 * (window.innerWidth - prevWidth), 400)
    }
}, 100)

