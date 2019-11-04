// create a variable for each component like canvas, chart, dataplot, caption etc..p5.BandPass()
// inside each variable give the object as shown
function showOrHide(state, nodes) {
    for (var node of nodes) {
        document.getElementById(node).disabled = state
    }
}

function handleInputs() {
    const event = arguments[1]
    const nodes = arguments[0]
    const type = event.target.classList
    if (type.contains('input-checkbox')) {
        if (event.target.checked) {
            showOrHide(false, nodes)
        } else {
            showOrHide(true, nodes)
        }
    } else if (type.contains('input-text') || type.contains('input-number') || type.contains('input-range') || type.contains('input-select')) {
        if (event.target.value.length !== 0) {
            showOrHide(false, nodes)
        } else {
            showOrHide(true, nodes)
        }
    } else if (type.contains('input-color')) {
        if (event.target.value.includes(',')) {
            showOrHide(false, nodes)
        } else {
            showOrHide(true, nodes)
        }
    }
}
const canvas = {
    'padding': [{
        'label': 'Left & Right Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 20',
        'value': '',
        'id': 'padding_canvasPadding',
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Left Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'padding_canvasLeftPadding',
        'defaultActive': '1',
        'note': 'This will override Left & Right Padding',
        'location': 'chart'
    }, {
        'label': 'Right Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'padding_canvasRightPadding',
        'defaultActive': '1',
        'note': 'This will override Left & Right Padding',
        'location': 'chart'
    }, {
        'label': 'Top Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'padding_canvasTopPadding',
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Bottom Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'padding_canvasBottomPadding',
        'defaultActive': '1',
        'location': 'chart'
    }],
    'margin': [{
        'label': 'Left Margin',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'margin_canvasLeftMargin',
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Right Margin',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'margin_canvasRightMargin',
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Top Margin',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'margin_canvasTopMargin',
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Bottom Margin',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'margin_canvasBottomMargin',
        'defaultActive': '1',
        'location': 'chart'
    }],
    'backgroundColor': [{
        'label': 'Show Background Color',
        'inputFieldType': 'checkbox',
        'value': '',
        'id': 'backgroundColor_showCanvasBg',
        'defaultActive': '1',
        'note': 'Turn off theme to see changes',
        'location': 'chart',
        'willActivate': function () {
            var self = this
            new Promise(function (resolve, reject) {
                setTimeout(() => {
                    document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['backgroundColor_canvasBgColor']))
                }, 0)
            })
        }
    }, {
        'label': 'Color',
        'inputFieldType': 'color',
        'placeholder': 'Eg:- FFCCFF,DDDDDD',
        'value': '',
        'id': 'backgroundColor_canvasBgColor',
        'defaultActive': '0',
        'location': 'chart',
        'willActivate': function () {
            const self = this
            new Promise(function (resolve, reject) {
                setTimeout(() => {
                    document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['backgroundColor_canvasBgRatio', 'backgroundColor_canvasBgAngle']))
                }, 0)
            })
        }
    }, {
        'label': 'Gradient Color Ratio',
        'inputFieldType': 'text',
        'placeholder': 'Eg:- 30,40,30',
        'value': '',
        'id': 'backgroundColor_canvasBgRatio',
        'defaultActive': '0',
        'location': 'chart'
    }, {
        'label': 'Gradient Color Orientation',
        'inputFieldType': 'range',
        'min': '0',
        'max': '360',
        'value': '',
        'id': 'backgroundColor_canvasBgAngle',
        'defaultActive': '0',
        'location': 'chart'
    }, {
        'label': 'Opacity',
        'inputFieldType': 'range',
        'min': '0',
        'max': '100',
        'value': '',
        'id': 'backgroundColor_canvasBgAlpha',
        'defaultActive': '1',
        'location': 'chart'
    }],
    'border': [{
        'label': 'Show Border',
        'inputFieldType': 'checkbox',
        'value': '',
        'id': 'border_showCanvasBorder',
        'defaultActive': '1',
        'location': 'chart',
        'willActivate': function () {
            // will add a event listener
            const self = this
            new Promise(function (resolve, reject) {
                setTimeout(() => {
                    document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['border_canvasBorderColor', 'border_canvasBorderAlpha', 'border_canvasBorderThickness']))
                }, 0)
            })
            // will activate bordercolor,borderalpha,borderthickness when checked
        }
    }, {
        'label': 'Border Color',
        'inputFieldType': 'color',
        'placeholder': 'Eg:- FFCCFF',
        'value': '',
        'id': 'border_canvasBorderColor',
        'defaultActive': '0',
        'location': 'chart'
    }, {
        'label': 'Border Opacity',
        'inputFieldType': 'range',
        'min': '0',
        'max': '100',
        'value': '',
        'id': 'border_canvasBorderAlpha',
        'defaultActive': '0',
        'location': 'chart'
    }, {
        'label': 'Border Thickness',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'border_canvasBorderThickness',
        'defaultActive': '0',
        'location': 'chart'
    }],
    'outsidePlotArea': [{
        'label': 'Font Style',
        'inputFieldType': 'text',
        'placeholder': 'Eg:- Arial',
        'value': '',
        'id': 'border_outCnvBaseFont',
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Size',
        'inputFieldType': 'range',
        'min': '5',
        'max': '72',
        'value': '',
        'id': 'border_outCnvBaseFontSize',
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Color',
        'inputFieldType': 'color',
        'placeholder': 'Eg:- ddffcc',
        'value': '',
        'id': 'outsideCanvas_outCnvBaseFontColor',
        'defaultActive': '1',
        'location': 'chart'
    }]
}

const column2d = {
    'canvas': {
        'name': 'Plot Area',
        'properties': {
            'padding': canvas['padding'],
            'margin': canvas['margin'],
            'backgroundColor': canvas['backgroundColor'],
            'border': canvas['border'],
            'outsidePlotArea': canvas['outsidePlotArea']
        }
    }
}
const area2d = {
    'canvas': column2d['canvas']
}

const bar2d = {
    'canvas': column2d['canvas']
}

const line = {
    'canvas': column2d['canvas']
}
const pie2d = {
    'canvas': {
        'name': 'Plot Area',
        'margin': canvas['margin']
    }
}