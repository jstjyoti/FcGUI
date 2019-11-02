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
}