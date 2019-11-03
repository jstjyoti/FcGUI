// create a variable for each component like canvas, chart, dataplot, caption etc..p5.BandPass()
// inside each variable give the object as shown

const caption= {
    captionText:[
        {
            label:'Heading',
            inputfieldType:'text',
            placeholder:'My Heading',
            value:'',
            id: 'caption_caption',
            note:'',
            defaultActive:'1',
            willActivate: function(){
                document.getElementById(this.id).addEventListener('change',()=>{

                })   
            }.bind(null,'caption_captionAlignment','caption_alignCaptionWithCanvas','caption_captionOnTop',
            'caption_captionHorizontalPadding','caption_captionFontSize','caption_captionFont',
            'caption_captionFontColor','caption_captionFontBold')
        },
    ],
    captionFont:[
        {
            label:'Font Size',
            inputfieldType:"range",
            min:'6',
            max:'72',
            value:'',
            placeholder:'14',
            id: 'caption_captionFontSize',
            note:'',
            defaultActive:'1'
        },
        {
            label:'Font Style',
            inputfieldType:"text",
            value:'',
            placeholder:'Arial',
            id: 'caption_captionFont',
            note:'',
            defaultActive:'1'
        },
        {
            label:'Font Color',
            inputfieldType:"color",
            value:'',
            placeholder:'#dddddd',
            id: 'caption_captionFontColor',
            note:'',
            defaultActive:'1'
        },
        {
            label:'Font Bold',
            inputfieldType:"checkbox",
            value:'',
            id: 'caption_captionFontBold',
            note:'',
            defaultActive:'1'
        },
    ]
}
const subCaption= {
    subCaptionText:[
        {
            label:'Sub-Heading',
            inputfieldType:'text',
            placeholder:'My Sub Heading',
            value:'',
            id: 'caption_subCaption',
            note:'',
            defaultActive:'1',
            willActivate: function(){
                document.getElementById(this.id).addEventListener('change',()=>{

                })   
            }.bind(null,'caption_captionAlignment','caption_alignCaptionWithCanvas','caption_captionOnTop',
            'caption_captionHorizontalPadding','caption_subCaptionFontSize','caption_subCaptionFont',
            'caption_subCaptionFontColor','caption_subCaptionFontBold')
        },
    ],
    subCaptionFont:[
        {
            label:'Font Size',
            inputfieldType:"range",
            min:'6',
            max:'72',
            value:'',
            placeholder:'14',
            id: 'caption_subCaptionFontSize',
            note:'',
            defaultActive:'1'
        },
        {
            label:'Font Style',
            inputfieldType:"text",
            value:'',
            placeholder:'Arial',
            id: 'caption_subCaptionFont',
            note:'',
            defaultActive:'1'
        },
        {
            label:'Font Color',
            inputfieldType:"color",
            value:'',
            placeholder:'#dddddd',
            id: 'caption_subCaptionFontColor',
            note:'',
            defaultActive:'1'
        },
        {
            label:'Font Bold',
            inputfieldType:"checkbox",
            value:'',
            id: 'caption_subCaptionFontBold',
            note:'',
            defaultActive:'1'
        },
    ]

const chart = {
  "animation":[
    {
      "label": "Enable",
      "inputfieldType": "check",
      "placeHolder": "",
      "value": "",
      "id": "animation_animation",
      "note": "",
      "defaultActive": "1",
      "willActivate": ()=> {
        //enable Animation Duration
      }
    },
    {
      "label": "Time",
      "inputfieldType": "number",
      "placeHolder": "1",
      "value": "",
      "id": "animation_animationDuration",
      "note": "Time in seconds taken to draw the chart in Animation",
      "defaultActive": "0",
    }
  ],
  "padding": [

    {
      "label": "Padding",
      "inputfieldType": "number",
      "placeHolder": "5",
      "value": "",
      "id": "padding_chartPadding",
      "note": "",
      "defaultActive": "1",
    },
  ],
  "margin": [{
    "label": "Margin",
    "inputfieldType": "number",
    "placeHolder": "0",
    "value": "",
    "id": "margin_chartMargin",
    "note": "",
    "defaultActive": "1",
  }, ],
  "ChartColors": [{
      "label": "Combination",
      "inputfieldType": "select",
      "selectValues": ["1", "2", "3", "4", "5"],
      "placeHolder": "2",
      "value": "",
      "id": "ChartColors_palette",
      "note": "each set has different combination of colors for elementation",
      "defaultActive": "1",
    },

  ],
  "background": [{
      "label": "Color",
      "inputfieldType": "color",
      "placeHolder": "pick a color or give a Hexcode",
      "value": "",
      "id": "background_bgColor",
      "note": "",
      "defaultActive": "1",
      "willActivate": () => {
        //event Listeners
      }

    },
     {
      "label": " ColorOpacity",
      "inputfieldType": "range",
      "min": "0",
      "max": "100",
      "placeHolder": "0 to 100",
      "value": "",
      "id": "background_bgAlpha",
      "note": "",
      "defaultActive": "0",

    },
    {
      "label": " GradientColorRatio",
      "inputfieldType": "text",
      "placeHolder": "40,60",
      "value": "",
      "id": "background_bgAlpha",
      "note": "comma separated Value ",
      "defaultActive": "0"
    },
    {
      "label": " ColorOrientation",
      "inputfieldType": "range",
      "min": "0",
      "max": "360",
      "placeHolder": "select angle",
      "value": "",
      "id": "background_bgAngle",
      "note": "angle value to change orienatation of background",
      "defaultActive": "0",

    },
    {
      "label": "Image",
      "inputfieldType": "url",
      "placeHolder": "paset the url to the image ",
      "value": "",
      "id": "background_bgImage",
      "note": "",
      "defaultActive": "1",
      "willActivate": () => {
        //event Listeners
      }
    },

    {
      "label": "ImageOpacity",
      "inputfieldType": "range",
      "min": "0",
      "max": "100",
      "placeHolder": "select a value",
      "value": "",
      "id": "background_bgImageAlpha",
      "note": "",
      "defaultActive": "0",

    },
    {
      "label": "ImageFit",
      "inputfieldType": "select",
      "selectArray": ["fit", "fill", "tile", "center", "none"],
      "placeHolder": "fit",
      "value": "",
      "id": "background_bgImageDisplayMode",
      "note": "",
      "defaultActive": "0",

    },
    {
      "label": "ImageVerticalAlignment",
      "inputfieldType": "select",
      "selectArray": ["top", "middle", "center"],
      "placeHolder": "middle",
      "value": "",
      "id": "background_bgImageVAlign",
      "note": "",
      "defaultActive": "0",

    },
    {
      "label": "ImageHorizontalAlignment",
      "inputfieldType": "select",
      "selectArray": ["left", "middle", "right"],
      "placeHolder": "middle",
      "value": "",
      "id": "background_bgImageHAlign",
      "note": "",
      "defaultActive": "0",

    },
    {
      "label": "Image Size scale",
      "inputfieldType": "range",
      "min": "1",
      "max": "300",
      "placeHolder": "",
      "value": "",
      "id": "background_bgImageScale",
      "note": "works only if background image Fit set to tile,center or none",
      "defaultActive": "0",

    },

  ],
  "GeneralFont": [{
      "label": "GeneralFont",
      "inputfieldType": "text",
      "placeHolder": "write Fontname",
      "value": "",
      "id": "baseFont_baseFont",
      "note": "",
      "defaultActive": "1",

    },
    {
      "label": "FontSize",
      "inputfieldType": "range",
      "min": 4,
      "max": 72,
      "placeHolder": "Eg 4-72",
      "value": "",
      "id": "baseFont_baseFontSize",
      "note": "",

    },
    {
      "label": "FontColor",
      "inputfieldType": "color",
      "placeHolder": "pick a color",
      "value": "",
      "id": "baseFont_baseFontColor",
      "note": "",
      "defaultActive": "1",


    },

  ],
  "chartBorder": [{
      "label": "BorderActive",
      "inputfieldType": "checkbox",
      "placeHolder": "",
      "value": "",
      "id": "chartBorder_showborder",
      "note": "",
      "defaultActive": "1",
      "willActivate": () => {
        //event Listeners
      }

    },
    {
      "label": "Color",
      "inputfieldType": "color",
      "placeHolder": "",
      "value": "",
      "id": "chartBorder_borderColor",
      "note": "",
      "defaultActive": "1",

    },
    {
      "label": "Thickness",
      "inputfieldType": "number",
      "placeHolder": "eg: 5",
      "value": "",
      "id": "chartBorder_borderThickness",
      "note": "",
      "defaultActive": "0s",
    },
    {
      "label": "Opacity",
      "inputfieldType": "range",
      "min": "0",
      "max": "100",
      "placeHolder": "eg 50",
      "value": "",
      "id": "chartBorder_borderAlpha",
      "note": "",
      "defaultActive": "0",
    },
  ],
  captionAlignment: [{
      label: 'Alignment',
      inputfieldType: "select",
      selectArray: ["left", "center", "right"],
      placeholder: 'center',
      value: '',
      id: 'caption_captionAlignment',
      note: '',
      defaultActive: '1',
      willActivate: function () {
        document.getElementById(this.id).addEventListener('change', () => {})
      }.bind(null, 'caption_captionHorizontalPadding')
    },
    {
      label: 'Alignment wrt Plot Area',
      inputfieldType: "checkbox",
      value: '',
      id: 'caption_alignCaptionWithCanvas',
      note: 'Align heading with plot area or with the whole chart area',
      defaultActive: '1'
    },
  ],
  captionPosition: [{
    label: 'Position',
    inputfieldType: "checkbox",
    value: '',
    id: 'caption_captionOnTop',
    note: '',
    defaultActive: '1'
  }, ],
  captionPadding: [{
    label: 'Padding',
    inputfieldType: "number",
    placeholder: '30',
    value: '',
    id: 'caption_captionHorizontalPadding',
    note: 'Applicable only for left and right alignment',
    defaultActive: '1',
  }, 
  ],
  "logo": [{
      "label": "SourceLink",
      "inputfieldType": "url",
      "placeHolder": "",
      "value": "",
      "id": "logo_logoURL",
      "note": "",
      "defaultActive": "1",
      "willActivate": () => {
        //event Listeners
      }

    },
    {
      "label": "LeftMargin",
      "inputfieldType": "number",
      "placeHolder": "eg 5",
      "value": "",
      "id": "logo_logoLeftMargin",
      "note": "",
      "defaultActive": "0",
    },
    {
      "label": "RightMargin",
      "inputfieldType": "number",
      "placeHolder": "eg 6",
      "value": "",
      "id": "logo_logoRightMargin",
      "note": "",
      "defaultActive": "0",
    },
    {
      "label": "Position",
      "inputfieldType": "select",
      "selectValues":{"Top-Left":"TL","Top-Right":"TR","Bottom-Left":"BL","Bottom-Right":"BR","Center":"CC"},
      "placeHolder": "TL",
      "value": "",
      "id": "logo_logoPosition",
      "note": "",
      "defaultActive": "0",
    },
    {
      "label": "Opacity",
      "inputfieldType": "range",
      "min":"0",
      "max":"1",
      "placeHolder": "Select",
      "value": "",
      "id": "logo_logoAlpha",
      "note": "",
      "defaultActive": "0",
    },
    {
      "label": "LinkOnClick",
      "inputfieldType": "url",
      "placeHolder": "",
      "value": "",
      "id": "logo_logoLink",
      "note": "",
      "defaultActive": "0",
    },
    {
      "label": "Scale",
      "inputfieldType": "range",
      "min":"1",
      "max":"300",
      "placeHolder": "",
      "value": "",
      "id": "logo_logoScale",
      "note": "",
      "defaultActive": "0",
    },

  ],
  "rightToLeftText": [
    {
      "label": "isLanguageHavingRightTOLeftText",
      "inputfieldType": "check",
      "placeHolder": "",
      "value": "",
      "id": "rightToLeftText_chartPadding",
      "note": "for Urdu, arabic and Japanese Text",
      "defaultActive": "1",
    }

  ],

  "Export": [
    {
      "label": "Enable",
      "inputfieldType": "check",
      "placeHolder": "",
      "value": "",
      "id": "Export_exportEnable",
      "note": "",
      "defaultActive": "1",
      
    }

  ],
  "PrintMenu": [
    {
      "label": "Enable",
      "inputfieldType": "check",
      "placeHolder": "",
      "value": "",
      "id": "PrintMenu_showPrintMenuItem",
      "note": "",
      "defaultActive": "1",
      
    }

  ],

}