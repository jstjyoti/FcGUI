// create a variable for each component like canvas, chart, dataplot, caption etc..p5.BandPass()
// inside each variable give the object as shown


// create a variable for each component like canvas, chart, dataplot, caption etc..p5.BandPass()
// inside each variable give the object as shown


const dataplot = {
    features: [{
        label: 'Colors',
        inputFieldType: 'color',
        placeholder: '#0000ff',
        value: '',
        id: 'features_paletteColors',
        note: '',
        defaultActive: '1',
        
    },{
        label: 'Round edge',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'features_useRoundEdges',
        note: '',
        defaultActive: '0',
        
    },{
        label: 'Shadow',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'features_showShadow',
        note: '',
        defaultActive: '0',
        
    },{
        label: 'Max Column Width',
        inputFieldType: 'number',
        placeholder: '10',
        value: '',
        id: 'features_maxColWidth',
        note: '',
        defaultActive: '0',
        
    }],

    border: [{
        label: 'Show Border',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'border_showPlotBorder',
        note: '',
        defaultActive: '0',
        willActivate: function(){
          //  background_plotBorderColor,background_plotBorderThickness,background_plotBorderAlpha,background_plotBorderDashed
        }
    },{
        label: 'Border Color',
        inputFieldType: 'color',
        placeholder: '#0000ff',
        value: '',
        id: 'border_plotBorderColor',
        note: '',
        defaultActive: '0',
        
    },{
        label: 'Border Thickness',
        inputFieldType: 'number',
        placeholder: 'eg-4',
        value: '',
        id: 'border_plotBorderThickness',
        note: '',
        defaultActive: '0',
        
    },{
        label: 'Border opacity',
        inputFieldType: 'range',
        min: '0',
        max: '100',
        placeholder: '',
        value: '',
        id: 'border_plotBorderAlpha',
        note: '',
        defaultActive: '0',
        
    },{
        label: 'Border dashed',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'border_plotBorderDashed',
        note: '',
        defaultActive: '0',
        willActivate: function(){
            //background_plotBorderDashLen,background_plotBorderDashGap
        } 
    },{
        label: 'Border dashed length',
        inputFieldType: 'number',
        placeholder: 'eg-5',
        value: '',
        id: 'border_plotBorderDashLen',
        note: '',
        defaultActive: '0',
        
    },{
        label: 'Border dashed gap',
        inputFieldType: 'number',
        placeholder: 'eg-3',
        value: '',
        id: 'border_plotBorderDashGap',
        note: '',
        defaultActive: '0',
    }],

    gradient: [{
        label: 'Show gradient',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'gradient_usePlotGradientColor',
        note: '',
        defaultActive: '0',
        willActivate: function(){
            // gradient_plotGradientColor,gradient_plotFillAlpha,gradient_plotFillRatio,gradient_plotFillAngle
        } 
    },{
        label: 'Color',
        inputFieldType: 'color',
        placeholder: '#ffffff',
        value: '',
        id: 'gradient_plotGradientColor',
        note: '',
        defaultActive: '0',
    },{
        label: 'Opacity',
        inputFieldType: 'range',
        placeholder: '20',
        min: '0',
        max: '100',
        value: '',
        id: 'gradient_plotFillAlpha',
        note: '',
        defaultActive: '0',
    },{
        label: 'Color ratio',
        inputFieldType: 'text',
        placeholder: 'eg-40,60',
        value: '',
        id: 'gradient_plotFillRatio',
        note: '',
        defaultActive: '0',
    },{
        label: 'Color orientation',
        inputFieldType: 'range',
        placeholder: '',
        min: '0',
        max: '360',
        value: '',
        id: 'gradient_plotFillAngle',
        note: '',
        defaultActive: '0',
    }],

    hover: [{
        label: 'Hover all elements',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'hover_showHoverEffect',
        note: 'Remove theme to apply this',
        defaultActive: '0',
        willActivate: function(){
            //hover_plotFillHoverColor, hover_plotFillHoverAlpha,hover_plotBorderHoverColor,hover_plotBorderHoverAlpha,hover_plotBorderHoverThickness,hover_plotBorderHoverDashed
        } 
    },{
        label: 'Hover data plots',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'hover_plotHoverEffect',
        note: '',
        defaultActive: '0',
        willActivate: function(){
            //hover_plotFillHoverColor, hover_plotFillHoverAlpha,hover_plotBorderHoverColor,hover_plotBorderHoverAlpha,hover_plotBorderHoverThickness,hover_plotBorderHoverDashed            
        } 
    },{
        label: 'Color',
        inputFieldType: 'color',
        placeholder: '#0000ff',
        value: '',
        id: 'hover_plotFillHoverColor',
        note: '',
        defaultActive: '0',
    },{
        label: 'Color opacity',
        inputFieldType: 'range',
        placeholder: '',
        min: '0',
        max: '100',
        value: '',
        id: 'hover_plotFillHoverAlpha',
        note: '',
        defaultActive: '0',
    },{
        label: 'Border color',
        inputFieldType: 'color',
        placeholder: '#0000ff',
        value: '',
        id: 'hover_plotBorderHoverColor',
        note: '',
        defaultActive: '0',
    },{
        label: 'Border color opacity',
        inputFieldType: 'range',
        placeholder: '',
        min: '0',
        max: '100',
        value: '',
        id: 'hover_plotBorderHoverAlpha',
        note: '',
        defaultActive: '0',
    },{
        label: 'Border thickness',
        inputFieldType: 'number',
        placeholder: '5',
        value: '',
        id: 'hover_plotBorderHoverThickness',
        note: '',
        defaultActive: '0',
    },{
        label: 'Border dashed',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'hover_plotBorderHoverDashed',
        note: '',
        defaultActive: '0',
        willActivate: function(){
            //hover_plotBorderHoverDashLen,hover_plotBorderHoverDashGap
        } 
    },{
        label: 'Border dashed length',
        inputFieldType: 'number',
        placeholder: '5',
        value: '',
        id: 'hover_plotBorderHoverDashLen',
        note: '',
        defaultActive: '0',
    },{
        label: 'Border dashed gap',
        inputFieldType: 'number',
        placeholder: '5',
        value: '',
        id: 'hover_plotBorderHoverDashGap',
        note: '',
        defaultActive: '0',
    }],


    background: [{                  //for cross-line
        label: 'Show background',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'background_drawCrossLine',
        note: '',
        defaultActive: '1',
        willActivate: function(){
            //background_crossLineColor ,background_crossLineAlpha,background_crossLineAnimation,background_crossLineAnimationDuration,background_drawCrossLineOnTop
        } 
    },{
        label: 'Color',
        inputFieldType: 'color',
        placeholder: '#0000ff',
        value: '',
        id: 'background_crossLineColor',
        note: '',
        defaultActive: '1',
    },{
        label: 'Opacity',
        inputFieldType: 'range',
        placeholder: '',
        min: '0',
        max: '100',
        value: '',
        id: 'background_crossLineAlpha',
        note: '',
        defaultActive: '1',
    },{
        label: 'Animate',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'background_crossLineAnimation',
        note: '',
        defaultActive: '1',
    },{
        label: 'Animation Duration',
        inputFieldType: 'number',
        placeholder: '2',
        value: '',
        id: 'background_crossLineAnimationDuration',
        note: '',
        defaultActive: '1', 
    },{
        label: 'Overlap',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'background_drawCrossLineOnTop',
        note: '',
        defaultActive: '0', 
    }]
}

const plotValue = {
    features: [{
        label: 'Show values',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'features_showValues',
        note: '',
        defaultActive: '0',
        willActivate: function(){
            //features_rotateValues,features_placeValuesInside, font-properties
        } 
    },{
        label: 'Rotate values',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'features_rotateValues',
        note: '',
        defaultActive: '0',
    },{
        label: 'Values inside',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'features_placeValuesInside',
        note: '',
        defaultActive: '1',
    },{
        label: 'Opacity',
        inputFieldType: 'range',
        placeholder: '',
        min: '0',
        max: '100',
        value: '',
        id: 'border_valueAlpha',
        note: '',
        defaultActive: '0',
    }],

    font: [{
        label: 'Color',
        inputFieldType: 'color',
        placeholder: '#ff0000',
        value: '',
        id: 'font_valueFontColor',
        note: '',
        defaultActive: '1',
    },{
        label: 'Size',
        inputFieldType: 'number',
        placeholder: '14',
        value: '',
        id: 'font_valueFontSize',
        note: '',
        defaultActive: '1',
    },{
        label: 'Bold',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'font_valueFontBold',
        note: '',
        defaultActive: '0',
    },{
        label: 'Italic',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'font_valueFontItalic',
        note: '',
        defaultActive: '0',
    },{
        label: 'Style',
        inputFieldType: 'text',
        placeholder: 'Arial',
        value: '',
        id: 'font_valueFont',
        note: '',
        defaultActive: '1',
    },{
        label: 'Outline',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'font_textOutline',
        note: '',
        defaultActive: '0',
    },{
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
        defaultActive: '0',
    },{
        label: 'Dashed',
        inputFieldType: 'checkbox',
        placeholder: '',
        value: '',
        id: 'border_valueBorderDashed',
        note: '',
        defaultActive: '0',
        willActivate: function(){
            //border_valueBorderDashLen, border_valueBorderDashGap
        } 
    },{
        label: 'Dashed length',
        inputFieldType: 'number',
        placeholder: 'eg-04',
        value: '',
        id: 'border_valueBorderDashLen',
        note: '',
        defaultActive: '0',
    },{
        label: 'Dashed gap',
        inputFieldType: 'number',
        placeholder: 'eg-04',
        value: '',
        id: 'border_valueBorderDashGap',
        note: '',
        defaultActive: '0',
    },{
        label: 'Opacity',
        inputFieldType: 'range',
        placeholder: '',
        min: '0',
        max: '100',
        value: '',
        id: 'border_valueBorderAlpha',
        note: '',
        defaultActive: '0',
    },{
        label: 'Thickness',
        inputFieldType: 'number',
        placeholder: 'eg-04',
        value: '',
        id: 'border_valueBorderThickness',
        note: '',
        defaultActive: '0',
    },{
        label: 'Padding',
        inputFieldType: 'number',
        placeholder: 'eg-04',
        value: '',
        id: 'border_valueBorderPadding',
        note: '',
        defaultActive: '0',
    },{
        label: 'Radius',
        inputFieldType: 'number',
        placeholder: 'eg-04',
        value: '',
        id: 'border_valueBorderRadius',
        note: '',
        defaultActive: '0',
    }],

    background: [{
        label: 'Color',
        inputFieldType: 'color',
        placeholder: '#0000ff',
        value: '',
        id: 'border_valueBgColor',
        note: '',
        defaultActive: '0',
    },{
        label: 'Opacity',
        inputFieldType: 'range',
        placeholder: '',
        min: '0',
        max: '100',
        value: '',
        id: 'border_valueBgAlpha',
        note: '',
        defaultActive: '0',
    }]
}