// create a variable for each component like canvas, chart, dataplot, caption etc..p5.BandPass()
// inside each variable give the object as shown
const canvas = {
    'padding': [{
        'label': 'Left & Right Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 20',
        'value': '',
        'id': 'padding_canvasPadding',
        'defaultActive': '1',
    }, {
        'label': 'Left Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'padding_canvasLeftPadding',
        'defaultActive': '1',
        'note': 'This will override Left & Right Padding'
    }, {
        'label': 'Right Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'padding_canvasRightPadding',
        'defaultActive': '1',
        'note': 'This will override Left & Right Padding'
    }, {
        'label': 'Top Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'padding_canvasTopPadding',
        'defaultActive': '1'
    }, {
        'label': 'Bottom Padding',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'padding_canvasBottomPadding',
        'defaultActive': '1'
    }],
    'margin': [{
        'label': 'Left Margin',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'margin_canvasLeftMargin',
        'defaultActive': '1',
    }, {
        'label': 'Right Margin',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'margin_canvasRightMargin',
        'defaultActive': '1',
    }, {
        'label': 'Top Margin',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'margin_canvasTopMargin',
        'defaultActive': '1',
    }, {
        'label': 'Bottom Margin',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'margin_canvasBottomMargin',
        'defaultActive': '1',
    }],
    'backgroundColor': [{
        'label': 'Show Background Color',
        'inputFieldType': 'checkbox',
        'placeholder': '',
        'value': '',
        'id': 'backgroundColor_showCanvasBg',
        'defaultActive': '1',
        'note': 'Turn off theme to see changes',
        'willActivate': function () {
            // will have a event listener
            // will activate color when checked
        }
    }, {
        'label': 'Color',
        'inputFieldType': 'color',
        'placeholder': 'Eg:- FFCCFF,DDDDDD',
        'value': '',
        'id': 'backgroundColor_canvasBgColor',
        'defaultActive': '0',
        'willActivate': function () {
            // will have a event listener
            // when multiple colors are selected then color ratio will be online
        }
    }, {
        'label': 'Gradient Color Ratio',
        'inputFieldType': 'text',
        'placeholder': 'Eg:- 30,40,30',
        'value': '',
        'id': 'backgroundColor_canvasBgRatio',
        'defaultActive': '0',
    }, {
        'label': 'Gradient Color Orientation',
        'inputFieldType': 'range',
        'min': '0',
        'max': '360',
        'placeholder': '',
        'value': '',
        'id': 'backgroundColor_canvasBgAngle',
        'defaultActive': '0',
    }, {
        'label': 'Opacity',
        'inputFieldType': 'range',
        'min': '0',
        'max': '100',
        'placeholder': '',
        'value': '',
        'id': 'backgroundColor_canvasBgAlpha',
        'defaultActive': '1',
    }],
    'border': [{
        'label': 'Show Border',
        'inputFieldType': 'checkbox',
        'placeholder': '',
        'value': '',
        'id': 'border_showCanvasBorder',
        'defaultActive': '1',
        'willActivate': function () {
            // will add a event listener
            // will activate bordercolor,borderalpha,borderthickness when checked
        }
    }, {
        'label': 'Border Color',
        'inputFieldType': 'color',
        'placeholder': 'Eg:- FFCCFF',
        'value': '',
        'id': 'border_canvasBorderColor',
        'defaultActive': '0',
    }, {
        'label': 'Border Opacity',
        'inputFieldType': 'range',
        'min': '0',
        'max': '100',
        'placeholder': '',
        'value': '',
        'id': 'border_canvasBorderAlpha',
        'defaultActive': '0'
    }, {
        'label': 'Border Thickness',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'border_canvasBorderThickness',
        'defaultActive': '0',
    }],
    'outsidePlotArea': [{
        'label': 'Font Style',
        'inputFieldType': 'text',
        'placeholder': 'Eg:- Arial',
        'value': '',
        'id': 'border_outCnvBaseFont',
        'defaultActive': '1',
    }, {
        'label': 'Size',
        'inputFieldType': 'range',
        'min': '5',
        'max': '72',
        'placeholder': '',
        'value': '',
        'id': 'border_outCnvBaseFontSize',
        'defaultActive': '1'
    }, {
        'label': 'Color',
        'inputFieldType': 'color',
        'placeholder': 'Eg:- ddffcc',
        'value': '',
        'id': 'outsideCanvas_outCnvBaseFontColor',
        'defaultActive': '1',
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