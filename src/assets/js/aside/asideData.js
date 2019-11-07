// create a variable for each component like canvas, chart, dataplot, caption etc..p5.BandPass()
// inside each variable give the object as shown
//for resolving conflict
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
        '__willActivate': function () {
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
        'defaultActive': '1',
        'location': 'chart',
        '__willActivate': function () {
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
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Gradient Color Orientation',
        'inputFieldType': 'range',
        'min': '0',
        'max': '360',
        'value': '',
        'id': 'backgroundColor_canvasBgAngle',
        'defaultActive': '1',
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
        '__willActivate': function () {
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
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Border Opacity',
        'inputFieldType': 'range',
        'min': '0',
        'max': '100',
        'value': '',
        'id': 'border_canvasBorderAlpha',
        'defaultActive': '1',
        'location': 'chart'
    }, {
        'label': 'Border Thickness',
        'inputFieldType': 'number',
        'placeholder': 'Eg:- 5',
        'value': '',
        'id': 'border_canvasBorderThickness',
        'defaultActive': '1',
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

const dataplot = {
  chart: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'chart_paletteColors',
    note: '',
    defaultActive: '1',
    location: 'chart'
  },{
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '20',
    min: '0',
    max: '100',
    value: '',
    id: 'features_plotFillAlpha',
    note: '',
    defaultActive: '1',
    location: 'chart'
  },{
    label: 'Round edge',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'features_useRoundEdges',
    note: '',
    defaultActive: '1',
    location: 'chart'

  },{
    label: 'Shadow',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'features_showShadow',
    note: '',
    defaultActive: '1',
    location: 'chart'
  },{
    label: 'Max Column Width',
    inputFieldType: 'number',
    placeholder: '10',
    value: '',
    id: 'features_maxColWidth',
    note: '',
    defaultActive: '1',
    location: 'chart'

  },{
    label: 'Show Border',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'border_showPlotBorder',
    note: '',
    defaultActive: '1',

    location: 'chart',
    willActivate: function () {
        // var self = this
        // new Promise(function (resolve, reject) {
        //     setTimeout(() => {
        //         document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['background_plotBorderColor', 'background_plotBorderThickness' ,'background_plotBorderAlpha','background_plotBorderDashed']))
        //     }, 0)
        // })

    

    //   //  background_plotBorderColor,background_plotBorderThickness,background_plotBorderAlpha,background_plotBorderDashed
    }
  }, {

    label: 'Border Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'border_plotBorderColor',
    note: '',
    defaultActive: '1',
    location: 'chart'

  },{
    label: 'Border Thickness',
    inputFieldType: 'number',
    placeholder: 'eg-4',
    value: '',
    id: 'border_plotBorderThickness',
    note: '',
    defaultActive: '1',
    location: 'chart'
  },{
    label: 'Border opacity',
    inputFieldType: 'range',
    min: '0',
    max: '100',
    placeholder: '',
    value: '',
    id: 'border_plotBorderAlpha',
    note: '',
    defaultActive: '1',
    location: 'chart'
  },{
    label: 'Border dashed',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'border_plotBorderDashed',
    note: 'Applicable when show border is checked',
    defaultActive: '1',

    location: 'chart',
    
  },{


    _willActivate: function () {
      var self = this
      new Promise(function (resolve, reject) {
          setTimeout(() => {
              document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['background_plotBorderDashLen', 'background_plotBorderDashGap']))
          }, 0)
      })
      //background_plotBorderDashLen,background_plotBorderDashGap
    }

  }, {

    label: 'Border dashed length',
    inputFieldType: 'number',
    placeholder: 'eg-5',
    value: '',
    id: 'border_plotBorderDashLen',
    note: '',
    defaultActive: '1',
    location: 'chart',

  }, {
    label: 'Border dashed gap',
    inputFieldType: 'number',
    placeholder: 'eg-3',
    value: '',
    id: 'border_plotBorderDashGap',
    note: '',
    defaultActive: '1',
    location: 'chart',
  },{
    label: 'Show gradient',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'gradient_usePlotGradientColor',
    note: '',
    defaultActive: '1',

    location: 'chart',
    


    _willActivate: function () {
      var self = this
      new Promise(function (resolve, reject) {
          setTimeout(() => {
              document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['gradient_plotGradientColor' , 'gradient_plotFillAlpha' , 'gradient_plotFillRatio' ,'gradient_plotFillAngle']))
          }, 0)
      })
    }

  }, {
    label: 'Gradient Color',
    inputFieldType: 'color',
    placeholder: '#ffffff',
    value: '',
    id: 'gradient_plotGradientColor',
    note: '',
    defaultActive: '1',
    location: 'chart',

  },{
    label: 'Gradient Color ratio',
    inputFieldType: 'text',
    placeholder: 'eg-40,60',
    value: '',
    id: 'gradient_plotFillRatio',
    note: '',
    defaultActive: '1',
    location: 'chart',
  },{
    label: 'Color orientation',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '360',
    value: '',
    id: 'gradient_plotFillAngle',
    note: '',
    defaultActive: '1',
    location: 'chart',
  },{
    label: 'Hover all elements',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'hover_showHoverEffect',
    note: 'Remove theme to apply this',
    defaultActive: '1',

    location: 'chart',
    willActivate: function () {
      var self = this
      // new Promise(function (resolve, reject) {
      //     setTimeout(() => {
      //         document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['hover_plotFillHoverColor', 'hover_plotFillHoverAlpha','hover_plotBorderHoverColor','hover_plotBorderHoverAlpha','hover_plotBorderHoverThickness','hover_plotBorderHoverDashed']))
      //     }, 0)
      // })
      //'hover_plotFillHoverColor', 'hover_plotFillHoverAlpha','hover_plotBorderHoverColor','hover_plotBorderHoverAlpha','hover_plotBorderHoverThickness','hover_plotBorderHoverDashed'
    }
  },{


    _willActivate: function () {
      var self = this
      new Promise(function (resolve, reject) {
          setTimeout(() => {
              document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['hover_plotFillHoverColor', 'hover_plotFillHoverAlpha','hover_plotBorderHoverColor','hover_plotBorderHoverAlpha','hover_plotBorderHoverThickness','hover_plotBorderHoverDashed']))
          }, 0)
      })
      //'hover_plotFillHoverColor', 'hover_plotFillHoverAlpha','hover_plotBorderHoverColor','hover_plotBorderHoverAlpha','hover_plotBorderHoverThickness','hover_plotBorderHoverDashed'
    }

  }, {

    label: 'Hover data plots',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'hover_plotHoverEffect',
    note: '',
    defaultActive: '1',

    location: 'chart',

    willActivate: function () {
      var self = this
      // new Promise(function (resolve, reject) {
      //     setTimeout(() => {
      //         document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['hover_plotFillHoverColor', 'hover_plotFillHoverAlpha','hover_plotBorderHoverColor','hover_plotBorderHoverAlpha','hover_plotBorderHoverThickness','hover_plotBorderHoverDashed']))
      //     }, 0)
      // })
      //hover_plotFillHoverColor, hover_plotFillHoverAlpha,hover_plotBorderHoverColor,hover_plotBorderHoverAlpha,hover_plotBorderHoverThickness,hover_plotBorderHoverDashed            
    }
  },{
    label: 'Hover Color',


  

  }, {
    label: 'Color',

    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'hover_plotFillHoverColor',
    note: '',
    defaultActive: '1',
    location: 'chart',

  },{
    label: 'Color opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'hover_plotFillHoverAlpha',
    note: '',
    defaultActive: '1',
    location: 'chart',

  },{
    label: 'Hover Border color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'hover_plotBorderHoverColor',
    note: '',
    defaultActive: '1',
    location: 'chart',

  },{
    label: 'Border color opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'hover_plotBorderHoverAlpha',
    note: '',
    defaultActive: '1',
    location: 'chart',
  }],

  series: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'series_color',
    note: '',
    defaultActive: '1',
    location: 'series'
  },{
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '20',
    min: '0',
    max: '100',
    value: '',
    id: 'features_alpha',
    note: '',
    defaultActive: '1',
    location: 'series'
  },{
    label: 'Series border dashed',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'border_dashed',
    note: 'Applicable when show border is checked',    
    defaultActive: '1',
    location: 'series',
    willActivate: function () {
      var self = this
      // new Promise(function (resolve, reject) {
      //     setTimeout(() => {
      //         document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['background_plotBorderDashLen', 'background_plotBorderDashGap']))
      //     }, 0)
      // })
      //background_plotBorderDashLen,background_plotBorderDashGap
    }
  },{
    label: 'Series Color ratio',
    inputFieldType: 'text',
    placeholder: 'eg-40,60',
    value: '',
    id: 'gradient_ratio',
    note: '',
    defaultActive: '1',
    location: 'series',
  },{
    label: 'Hover Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'hover_hoverColor',
    note: '',
    defaultActive: '1',
    location: 'series',

  },{
    label: 'Series Color opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'hover_hoverAlpha',
    note: '',
    defaultActive: '1',
    location: 'series',

  }],

  data: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'data_color',
    note: '',
    defaultActive: '1',
    location: 'data'
  },{
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '20',
    min: '0',
    max: '100',
    value: '',
    id: 'features_alpha',
    note: '',
    defaultActive: '1',
    location: 'data'
  },{
    label: 'Data border dashed',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'border_dashed',
    note: 'Applicable when show border is checked',
    defaultActive: '1',
    location: 'data',
    willActivate: function () {
      var self = this
      // new Promise(function (resolve, reject) {
      //     setTimeout(() => {
      //         document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['background_plotBorderDashLen', 'background_plotBorderDashGap']))
      //     }, 0)
      // })
      //background_plotBorderDashLen,background_plotBorderDashGap
    }
  },{
    label: 'Data Color ratio',
    inputFieldType: 'text',
    placeholder: 'eg-40,60',
    value: '',
    id: 'gradient_ratio',
    note: '',
    defaultActive: '1',
    location: 'data',
  }, {
    label: 'Hover Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'hover_hoverColor',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Color opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'hover_hoverAlpha',
    note: '',
    defaultActive: '1',
    location: 'data',

  }],

  hover: [{
    label: 'Border thickness',
    inputFieldType: 'number',
    placeholder: '5',
    value: '',
    id: 'hover_plotBorderHoverThickness',
    note: '',
    defaultActive: '1',
    location: 'chart',

  }, {
    label: 'Border dashed',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'hover_plotBorderHoverDashed',
    note: '',
    defaultActive: '1',

    location: 'chart',



    _willActivate: function () {
      var self = this
      new Promise(function (resolve, reject) {
          setTimeout(() => {
              document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['hover_plotBorderHoverDashLen','hover_plotBorderHoverDashGap']))
          }, 0)
      })
      //hover_plotBorderHoverDashLen,hover_plotBorderHoverDashGap
    }


  }, {
    label: 'Border dashed length',
    inputFieldType: 'number',
    placeholder: '5',
    value: '',
    id: 'hover_plotBorderHoverDashLen',
    note: '',
    defaultActive: '1',
    location: 'chart',

  }, {
    label: 'Border dashed gap',
    inputFieldType: 'number',
    placeholder: '5',
    value: '',
    id: 'hover_plotBorderHoverDashGap',
    note: '',
    defaultActive: '1',
    location: 'chart',

  }],


  background: [{ //for cross-line
    label: 'Show background',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'background_drawCrossLine',
    note: '',
    defaultActive: '1',

    location: 'chart',
    willActivate: function () {
      // var self = this
      // new Promise(function (resolve, reject) {
      //     setTimeout(() => {
      //         document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['background_crossLineColor' ,'background_crossLineAlpha', 'background_crossLineAnimation', 'background_crossLineAnimationDuration' ,'background_drawCrossLineOnTop']))
      //     }, 0)
      // })
      //background_crossLineColor ,background_crossLineAlpha,background_crossLineAnimation,background_crossLineAnimationDuration,background_drawCrossLineOnTop
    }

  }, {
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'background_crossLineColor',
    note: '',
    defaultActive: '1',
    location: 'chart',
  }, {
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'background_crossLineAlpha',
    note: '',
    defaultActive: '1',
    location: 'chart',
  }, {
    label: 'Animate',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'background_crossLineAnimation',
    note: '',
    defaultActive: '1',
    location: 'chart',

  }, {
    label: 'Animation Duration',
    inputFieldType: 'number',
    placeholder: '2',
    value: '',
    id: 'background_crossLineAnimationDuration',
    note: '',
    defaultActive: '1',
    location: 'chart',

  }, {
    label: 'Overlap',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'background_drawCrossLineOnTop',
    note: '',
    defaultActive: '1',
    location: 'chart',

  },{
    label: 'Show value',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'background_showValue',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Display value',
    inputFieldType: 'text',
    placeholder: '',
    value: '',
    id: 'background_displayValue',
    note: 'If show value is checked',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Hover text',
    inputFieldType: 'text',
    placeholder: 'eg-data',
    value: '',
    id: 'background_toolText',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Data value',
    inputFieldType: 'number',
    placeholder: 'eg-200',
    value: '',
    id: 'background_value',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Link',
    inputFieldType: 'text',
    placeholder: '',
    value: '',
    id: 'background_link',
    note: '',
    defaultActive: '1',
    location: 'data',

  },]
}

const plotValue = {
  features: [{
    label: 'Show values',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'features_showValues',
    note: '',
    defaultActive: '1',

    _willActivate: function () {
      var self = this
      new Promise(function (resolve, reject) {
          setTimeout(() => {
              document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['features_rotateValues','features_placeValuesInside', 'font-properties']))
          }, 0)
      })
      //features_rotateValues,features_placeValuesInside, font-properties
    }

  }, {
    label: 'Rotate values',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'features_rotateValues',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Values inside',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'features_placeValuesInside',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'border_valueAlpha',
    note: '',
    defaultActive: '1',
  }],

  font: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#ff0000',
    value: '',
    id: 'font_valueFontColor',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Size',
    inputFieldType: 'number',
    placeholder: '14',
    value: '',
    id: 'font_valueFontSize',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Bold',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'font_valueFontBold',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Italic',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'font_valueFontItalic',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Style',
    inputFieldType: 'text',
    placeholder: 'Arial',
    value: '',
    id: 'font_valueFont',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Outline',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'font_textOutline',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'font_valueFontAlpha',
    note: '',
    defaultActive: '1',
  }],

  border: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'border_valueBorderColor',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Dashed',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'border_valueBorderDashed',
    note: '',
    defaultActive: '1',

    _willActivate: function () {
      var self = this
      new Promise(function (resolve, reject) {
          setTimeout(() => {
              document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['border_valueBorderDashLen', 'border_valueBorderDashGap']))
          }, 0)
      })
      //border_valueBorderDashLen, border_valueBorderDashGap
    }

  }, {
    label: 'Dashed length',
    inputFieldType: 'number',
    placeholder: 'eg-04',
    value: '',
    id: 'border_valueBorderDashLen',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Dashed gap',
    inputFieldType: 'number',
    placeholder: 'eg-04',
    value: '',
    id: 'border_valueBorderDashGap',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'border_valueBorderAlpha',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Thickness',
    inputFieldType: 'number',
    placeholder: 'eg-04',
    value: '',
    id: 'border_valueBorderThickness',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Padding',
    inputFieldType: 'number',
    placeholder: 'eg-04',
    value: '',
    id: 'border_valueBorderPadding',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Radius',
    inputFieldType: 'number',
    placeholder: 'eg-04',
    value: '',
    id: 'border_valueBorderRadius',
    note: '',
    defaultActive: '1',
  }],

  background: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'border_valueBgColor',
    note: '',
    defaultActive: '1',
  }, {
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'border_valueBgAlpha',
    note: '',
    defaultActive: '1',
  }]
}

const mscolumn2d = {
  'dataplot': {
    'name': 'Data Plots',
    'properties': {
      'features': dataplot['features'],
      'border': dataplot['border'],
      'gradient': dataplot['gradient'],
      'hover': dataplot['hover'],
      'background': dataplot['background'],
      'chart': dataplot['chart'],
      'data': dataplot['data'],
      'series': dataplot['series']
    }
  }
}



const caption = {
  captionText: [{
    label: 'Heading',
    inputFieldType: 'text',
    placeholder: 'My Heading',
    value: '',
    id: 'caption_caption',
    note: '',
    defaultActive: '1',
    location:'chart',
  }],
  captionFont: [{
      label: 'Font Size',
      inputFieldType: "range",
      min: '6',
      max: '72',
      value: '',
      placeholder: '14',
      id: 'caption_captionFontSize',
      note: '',
      location:'chart',
      defaultActive: '1'
    },
    {
      label: 'Font Style',
      inputFieldType: "text",
      value: '',
      placeholder: 'Arial',
      id: 'caption_captionFont',
      note: '',
      location:'chart',
      defaultActive: '1'
    },
    {
      label: 'Font Color',
      inputFieldType: "color",
      value: '',
      placeholder: '#dddddd',
      id: 'caption_captionFontColor',
      location:'chart',
      note: '',
      defaultActive: '1'
    },
    {
      label: 'Font Bold',
      inputFieldType: "checkbox",
      value: '',
      id: 'caption_captionFontBold',
      note: '',
      location:'chart',
      defaultActive: '1'
    },
  ],
  captionAlignment: [{
    label: 'Alignment',
    inputFieldType: "select",
    selectValues: ["left", "center", "right"],
    placeholder: 'center',
    value: '',
    id: 'caption_captionAlignment',
    note: '',
    defaultActive: '1',
    location:'chart',
    _willActivate: function () {
      // document.getElementById(this.id).addEventListener('change', handleInputs.bind(null, ['caption_captionHorizontalPadding']))
    }
  },
  {
    label: 'Alignment wrt Plot Area',
    inputFieldType: "checkbox",
    value: '',
    location:'chart',
    id: 'caption_alignCaptionWithCanvas',
    note: 'Align heading with plot area or with the whole chart area',
    defaultActive: '1'
  },
],
  captionPosition: [{
    label: 'Position',
    inputFieldType: "checkbox",
    value: '',
    id: 'caption_captionOnTop',
    note: '',
    location:'chart',
    defaultActive: '1'
  }, ],
  captionPadding: [{
    label: 'Padding',
    inputFieldType: "number",
    placeholder: '30',
    value: '',
    id: 'caption_captionHorizontalPadding',
    note: 'Applicable only for left and right alignment',
    location:'chart',
    defaultActive: '1',
  }, ],
}
const subCaption = {
  subCaptionText: [{
    label: 'Sub-Heading',
    inputFieldType: 'text',
    placeholder: 'My Sub Heading',
    value: '',
    id: 'caption_subCaption',
    note: '',

    location:'chart',

    defaultActive: '1'
  }, ],
  subCaptionFont: [{
      label: 'Font Size',
      inputFieldType: "range",
      min: '6',
      max: '72',
      value: '',
      placeholder: '14',
      id: 'caption_subCaptionFontSize',
      note: '',
      location:'chart',
      defaultActive: '1'
    },
    {
      label: 'Font Style',
      inputFieldType: "text",
      value: '',
      placeholder: 'Arial',
      id: 'caption_subCaptionFont',
      note: '',
      location:'chart',
      defaultActive: '1'
    },
    {
      label: 'Font Color',
      inputFieldType: "color",
      value: '',
      placeholder: '#dddddd',
      id: 'caption_subCaptionFontColor',
      note: '',
      location:'chart',
      defaultActive: '1'
    },
    {
      label: 'Font Bold',
      inputFieldType: "checkbox",
      value: '',
      id: 'caption_subCaptionFontBold',
      note: '',
      location:'chart',
      defaultActive: '1'
    },
  ]
}
const chartDS = {
  "animation": [{
      "label": "Enable",
      "location":"chart",
      "inputFieldType": "checkbox",
      "placeholder": "",
      "value": "",
      "id": "animation_animation",
      "note": "",
      "defaultActive": "1",
      
      "_willActivate": () => {
        var self = this
      new Promise(function (resolve, reject) {
          setTimeout(() => {
              document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ['animation_animationDuration']))
          }, 0)
      })

      
    
      //   //enable Animation Duration
       }
    },
    {
      "label": "Time",
      "location":"chart",
      "inputFieldType": "number",
      "placeholder": "1",
      "value": "",
      "id": "animation_animationDuration",
      "note": "Time in seconds taken to draw the chart in Animation",
      "defaultActive": "1"
    }
  ],
  "padding": [

    {
      "label": "Padding",
      "location":"chart",
      "inputFieldType": "number",
      "placeholder": "5",
      "value": "",
      "id": "padding_chartPadding",
      "note": "",
      "defaultActive": "1",
      "location": "chart",

    },
  ],
  "margin": [{
    "label": "Margin",
    "location":"chart",
    "inputFieldType": "number",
    "placeholder": "0",
    "value": "",
    "id": "margin_chartMargin",
    "note": "",
    "defaultActive": "1",
  }, ],
  "ChartColors": [{
      "label": "Combination",
      "location":"chart",
      "inputFieldType": "select",
      "selectValues": ["1", "2", "3", "4", "5"],
      "value": "",
      "id": "ChartColors_palette",
      "note": "each set has different combination of colors for elementation",
      "defaultActive": "1",
      'location': 'chart'
    },

  ],
  "background": [{
      "label": "Color",
      "location":"chart",
      "inputFieldType": "color",
      "placeholder": "pick a color or give a Hexcode",
      "value": "",
      "id": "background_bgColor",
      "note": "",
      "defaultActive": "1",

      "_willActivate": () => {
        var self = this
        new Promise(function (resolve, reject) {
            setTimeout(() => {
                document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ["background_bgAlpha","background_bgRatio","background_bgAngle"]))
            }, 0)
        })

        
      }

    },
    {
      "label": " ColorOpacity",
      "location":"chart",
      "inputFieldType": "range",
      "min": "0",
      "max": "100",
      "placeholder": "0 to 100",
      "value": "",
      "id": "background_bgAlpha",
      "note": "",
      "defaultActive": "1",

    },
    {
      "label": " GradientColorRatio",
      "inputFieldType": "text",
      "placeholder": "40,60",
      "value": "",
      "id": "background_bgRatio",
      "note": "comma separated Value ",
      "defaultActive": "1",
      "location":"chart",
    },
    {
      "label": " ColorOrientation",
      "inputFieldType": "range",
      "min": "0",
      "max": "360",
      "placeholder": "select angle",
      "value": "",
      "id": "background_bgAngle",
      "note": "angle value to change orienatation of background",
      "defaultActive": "1",
      "location":"chart",

    },
    {
      "label": "Image",
      "inputFieldType": "text",//url
      "placeholder": "paset the url to the image ",
      "value": "",
      "id": "background_bgImage",
      "note": "",
      "defaultActive": "1",

      "_willActivate": () => {
        var self = this
        new Promise(function (resolve, reject) {
            setTimeout(() => {
                document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ["background_bgImageAlpha","background_bgImageDisplayMode","background_bgImageVAlign","background_bgImageHAlign","background_bgImageScale"]))
            }, 0)
        })

        
      }
      
    },

    {
      "label": "ImageOpacity",
      "inputFieldType": "range",
      "min": "0",
      "max": "100",
      "placeholder": "select a value",
      "value": "",
      "id": "background_bgImageAlpha",
      "note": "",
      "location":"chart",
      "defaultActive": "1",

    },
    {
      "label": "ImageFit",
      "inputFieldType": "select",
      "selectValues": ["fit", "fill", "tile", "center", "none"],
      "placeholder": "fit",
      "value": "",
      "id": "background_bgImageDisplayMode",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
    },
    {
      "label": "ImageVerticalAlignment",
      "inputFieldType": "select",
      "selectValues": ["top", "middle", "center"],
      "placeholder": "middle",
      "value": "",
      "id": "background_bgImageVAlign",
      "note": "",
      "defaultActive": "1",
      "location":"chart",

    },
    {
      "label": "ImageHorizontalAlignment",
      "inputFieldType": "select",
      "selectValues": ["left", "middle", "right"],
      "placeholder": "middle",
      "value": "",
      "id": "background_bgImageHAlign",
      "note": "",
      "defaultActive": "1",
      "location":"chart",

    },
    {
      "label": "Image Size scale",
      "inputFieldType": "range",
      "min": "1",
      "max": "300",
      "placeholder": "",
      "value": "",
      "id": "background_bgImageScale",
      "note": "works only if background image Fit set to tile,center or none",
      "defaultActive": "1",
      "location":"chart",
    },

  ],
  "GeneralFont": [{
      "label": "GeneralFont",
      "inputFieldType": "text",
      "placeholder": "write Fontname",
      "value": "",
      "id": "baseFont_baseFont",
      "note": "",
      "defaultActive": "1",
      "location":"chart",

    },
    {
      "label": "FontSize",
      "inputFieldType": "range",
      "min": 4,
      "max": 72,
      "placeholder": "Eg 4-72",
      "value": "",
      "id": "baseFont_baseFontSize",
      "note": "",
      "location":"chart",

    },
    {
      "label": "FontColor",
      "inputFieldType": "color",
      "placeholder": "pick a color",
      "value": "",
      "id": "baseFont_baseFontColor",
      "note": "",
      "defaultActive": "1",
      "location":"chart",


    },

  ],
  "chartBorder": [{
      "label": "BorderActive",
      "inputFieldType": "checkbox",
      "placeholder": "",
      "value": "",
      "id": "chartBorder_showborder",
      "note": "",
      "defaultActive": "1",

      "_willActivate": () => {
        var self = this
        new Promise(function (resolve, reject) {
            setTimeout(() => {
                document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ["chartBorder_borderColor","chartBorder_borderThickness","chartBorder_borderAlpha"]))
            }, 0)
        })

      
      }

    },
    {
      "label": "Color",
      "inputFieldType": "color",
      "placeholder": "",
      "value": "",
      "id": "chartBorder_borderColor",
      "note": "",
      "defaultActive": "1",
      "location":"chart",

    },
    {
      "label": "Thickness",
      "inputFieldType": "number",
      "placeholder": "eg: 5",
      "value": "",
      "id": "chartBorder_borderThickness",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
    },
    {
      "label": "Opacity",
      "inputFieldType": "range",
      "min": "0",
      "max": "100",
      "placeholder": "eg 50",
      "value": "",
      "id": "chartBorder_borderAlpha",
      "note": "",
      "defaultActive": "1",
    },
  ],

  captionAlignment: [{
      label: 'Alignment',
      inputFieldType: "select",
      selectValues: ["left", "center", "right"],
      placeholder: 'center',
      value: '',
      id: 'caption_captionAlignment',
      note: '',
      defaultActive: '1',
      // willActivate: function () {
      //   // document.getElementById(this.id).addEventListener('change', handleInputs.bind(null, ['caption_captionHorizontalPadding']))
      // }
    },
    {
      label: 'Alignment wrt Plot Area',
      inputFieldType: "checkbox",
      value: '',
      id: 'caption_alignCaptionWithCanvas',
      note: 'Align heading with plot area or with the whole chart area',
      defaultActive: '1'
    },
  ],
  captionPosition: [{
    label: 'Position',
    inputFieldType: "checkbox",
    value: '',
    id: 'caption_captionOnTop',
    note: '',
    defaultActive: '1'
  }, ],
  captionPadding: [{
    label: 'Padding',
    inputFieldType: "number",
    placeholder: '30',
    value: '',
    id: 'caption_captionHorizontalPadding',
    note: 'Applicable only for left and right alignment',
    defaultActive: '1',
  }, ],

  "logo": [{
      "label": "SourceLink",
      "inputFieldType": "url",
      "placeholder": "",
      "value": "",
      "id": "logo_logoURL",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
      "_willActivate": () => {

      
      // "willActivate": () => {

  
      //   var self = this
      //   new Promise(function (resolve, reject) {
      //       setTimeout(() => {
      //           document.getElementById(self['id']).addEventListener('input', handleInputs.bind(null, ["logo_logoLeftMargin","logo_logoRightMargin","logo_logoPosition","logo_logoAlpha","logo_logoLink","logo_logoScale"]))
      //       }, 0)
        // })
      }

    },
    {
      "label": "LeftMargin",
      "inputFieldType": "number",
      "placeholder": "eg 5",
      "value": "",
      "id": "logo_logoLeftMargin",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
    },
    {
      "label": "RightMargin",
      "inputFieldType": "number",
      "placeholder": "eg 6",
      "value": "",
      "id": "logo_logoRightMargin",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
    },
    {
      "label": "Position",
      "inputFieldType": "select",
      "selectValues": {
        "Top-Left": "TL",
        "Top-Right": "TR",
        "Bottom-Left": "BL",
        "Bottom-Right": "BR",
        "Center": "CC"
      },
      "placeholder": "TL",
      "value": "",
      "id": "logo_logoPosition",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
    },
    {
      "label": "Opacity",
      "inputFieldType": "range",
      "min": "0",
      "max": "1",
      "placeholder": "Select",
      "value": "",
      "id": "logo_logoAlpha",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
    },
    {
      "label": "LinkOnClick",
      "inputFieldType": "url",
      "placeholder": "",
      "value": "",
      "id": "logo_logoLink",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
    },
    {
      "label": "Scale",
      "inputFieldType": "range",
      "min": "1",
      "max": "300",
      "placeholder": "",
      "value": "",
      "id": "logo_logoScale",
      "note": "",
      "defaultActive": "1",
      "location":"chart",
    },

  ],
  "rightToLeftText": [{
      "label": "isLanguageHavingRightTOLeftText",
      "inputFieldType": "checkbox",
      "placeholder": "",
      "value": "",
      "id": "rightToLeftText_chartPadding",
      "note": "for Urdu, arabic and Japanese Text",
      "defaultActive": "1",
      "location":"chart",
    }

  ],

  "Export": [{
      "label": "Enable",
      "inputFieldType": "checkbox",
      "placeholder": "",
      "value": "",
      "id": "Export_exportEnable",
      "note": "",
      "defaultActive": "1",
      "location":"chart",

    }

  ],
  "PrintMenu": [{
      "label": "Enable",
      "inputFieldType": "checkbox",
      "placeholder": "",
      "value": "",
      "id": "PrintMenu_showPrintMenuItem",
      "note": "",
      "defaultActive": "1",
      "location":"chart",

    }

  ]

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
  },
  'dataplot': {
    'name': 'DataPlot',
    'properties': {
      'chart': dataplot['chart'],
      'data': dataplot['data'],
      'series': dataplot['series'],
    }
  }, 
  'plotValue': {
    'name': 'DataValue',
    'properties': {
      'features': plotValue['features'],
      'font': plotValue['font'],
      'border': plotValue['border'],
      'background': plotValue['background']
    }
  },
  'caption': {
    'name': 'Caption',
    'properties': {
      'captionText': caption['captionText'],
      'captionFont': caption['captionFont'],
      'captionAlignment': caption['captionAlignment'],
      'captionPosition': caption['captionPosition'],
      'captionPadding': caption['captionPadding'],
    }
  },
  'subcaption': {
    'name': 'Sub Caption',
    'properties': {
      'subCaptionText': subCaption['subCaptionText'],
      'subCaptionFont': subCaption['subCaptionFont']
    }
  },
  'chartDS': {
    'name': 'Chart',
    'properties': {
      'animtion': chartDS['animation'],
      'padding': chartDS['padding'],
      'margin': chartDS['margin'],
      'ChartColors': chartDS['ChartColors'],
      'background': chartDS['background'],
      'GeneralFont': chartDS['GeneralFont'],
      'chartBorder': chartDS['chartBorder'],
      'logo': chartDS['logo'],
      'rightToLeftText': chartDS['rightToLeftText'],
      'Export': chartDS['Export'],
      'PrintMenu': chartDS['PrintMenu']

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
