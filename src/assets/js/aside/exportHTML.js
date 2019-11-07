function exportHTML(e) {
    const type = chart.chartType()
    const html = '<html><head>\
    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>\
    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script></head>\
    <body>\
    <div id="fc"></div>\
    <script>\
    FusionCharts.ready(function(){\
        var fusioncharts = new FusionCharts({\
        type:'+'"'+type+'"'+','+
        'renderAt: "fc",'+
        'width: "700",'+
        'height: "400",'+
        'dataFormat: "json",'+
        'dataSource:'+JSON.stringify(chartObject)+
        '}).render()'+
    '})'+
    '</script>\
    </body></html>'


    const blob = new Blob([html], {type: 'text/html'})
    downloadFile(blob, "FC" + type)
}
function downloadFile(blob, filename="FusionChart") {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a')
    a.href = url
    a.download = filename

    document.body.append(a)
    a.click()
    document.body.removeChild(a)
}