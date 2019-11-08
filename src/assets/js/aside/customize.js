var parentEvent ;

function getConflictingAttributes(currentLevel, attribute, lowerLevel){
    var dict = {
        chart: ['paletteColors', 'plotFillAlpha', 'plotBorderDashed','plotFillRatio','plotFillHoverColor','plotFillHoverAlpha', 'plotHoverGradientColor', 'plotHoverRatio', 'plotHoverAngle'],
        series: ['color', 'alpha', 'dashed','ratio','hoverColor','hoverAlpha', 'hoverGradientColor', 'hoverRatio', 'hoverAngle'],
        data: ['color', 'alpha', 'dashed','ratio','hoverColor','hoverAlpha', 'hoverGradientColor', 'hoverRatio', 'hoverAngle']
    }

    let levelArr = dict[currentLevel]
    let index = levelArr.indexOf(attribute)
    return dict[lowerLevel][index]
}

function checkActive(e) {
    const children = Array.from(e.target.parentElement.children)
    for (let child of children) {
        if (child.classList.contains('active-customize')) {
            child.classList.remove('active-customize')
            break
        }
    }
    e.target.classList.add('active-customize')
}

function addNote(value, skeleton) {
    if (value['note']) {
        skeleton['children'].push({
            'parent': {
                'name': 'p',
                'property': {
                    'class': 'input-note'
                },
                'text': value['note']
            }
        })
    }
}

function createLabel(value) {
    return {
        'name': 'label',
        'text': value['label'],
        'property': {
            'class': 'input-label',
            'for': value['id']
        }
    }
}

function handleChartChanges() {
    const value = arguments[0]
    const event = arguments[1]
    function setAttr(label, value) {
        /*chart.setChartAttribute(label, value)
        chartObject = chart.getJSONData()*/
        //chart.setJSONData(filterLink())
        chartObject['chart'][label] = value
        if (label !== 'clickURL') {
            chart.setChartAttribute(label, value)
        }
    }
    if (value['location'] === 'chart') {
        let chartData = chartObject
        // let chartData = chart.getJSONData()
        //remove series and data level dependencies
        if(chartData.dataset){  // multiseries

            // find data and series level attribute
            let data_attr = getConflictingAttributes('chart', value['id'].split('_')[1], 'data')
            let series_attr = getConflictingAttributes('chart', value['id'].split('_')[1], 'series')

            // loop over chartdata.dataset , remove seriesAttr

            for(let i = 0;i < chartData.dataset.length; i++){
                delete chartData.dataset[i][series_attr]
                // loop over chartdata.dataset[index].data
                for(let j = 0;j < chartData.dataset[i].data.length; j++){
                    // remove dataattr
                    delete chartData.dataset[i].data[j][data_attr]
                }
            }
        }else{
            // find conflicting attribute
            let data_attr = getConflictingAttributes('chart', value['id'].split('_')[1], 'data')
            // loop over chartData.data 
            for(let i = 0;i < chartData.data.length; i++){
                //remove dataAttr
                delete chartData.data[i][data_attr]

            }
        }
        chart.setJSONData(filterLink())
        if (value['inputFieldType'] === 'checkbox') {
            setAttr(value['id'].split('_')[1], event.target.checked ? '1' : '0')
        } else {
            setAttr(value['id'].split('_')[1], event.target.value)
        }
    } else if (value['location'] === 'data') {
        //take json data
        //update JSON data
        //set chart data to updated JSON
        let chartData = chartObject
        let data_index = parentEvent.data.dataIndex
        let dataset_index = parentEvent.data.datasetIndex
        let data_property = value['id'].split('_')[1]

        if(value['inputFieldType'] === 'checkbox'){
            if(chartData.dataset)
            chartData.dataset[dataset_index].data[data_index][data_property] = (event.target.checked ? '1' : '0')
            else
            chartData.data[data_index][data_property] = (event.target.checked ? '1' : '0')
        }
        else {
            if(chartData.dataset)
            chartData.dataset[dataset_index].data[data_index][data_property] = event.target.value
            else
            chartData.data[data_index][data_property] = event.target.value
        } 
        // chart.setJSONData(chartData)
        chart.setJSONData(filterLink()) 

    }
    else if (value['location'] === 'series'){
        let chartData = chartObject

        //remove data related conflicting attributes
        let data_attr = getConflictingAttributes('series', value['id'].split('_')[1], 'data')
        let dataset_index = parentEvent.data.datasetIndex
        let data_index = parentEvent.data.dataIndex
        //loop over chartData.data
        for(let i = 0;i < chartData.dataset[dataset_index].data.length; i++){
            //remove chartdata.data[index].dataAttr
            delete chartData.dataset[dataset_index].data[i][data_attr]
        }
       
        let data_property = value['id'].split('_')[1]
        if(value['inputFieldType'] === 'checkbox')
        chartData.dataset[dataset_index][data_property] = (event.target.checked ? '1' : '0')
        else
        chartData.dataset[dataset_index][data_property]  = event.target.value 
        // chart.setJSONData(chartData)
        chart.setJSONData(filterLink()) 

    }else{
        // console.log(value)
        console.log('please specify location')
    }
}

function inputCheckBox(value) {
    const skeleton = {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'input'
            }
        },
        'children': [{
            'parent': {
                'name': 'div',
            },
            'children': [{
                    'parent': createLabel(value)
                },
                {
                    'parent': {
                        'name': 'input',
                        'property': (() => {
                            const skeleton = {
                                'class': 'input-checkbox',
                                'id': value['id'],
                                'type': 'checkbox'
                            }
                            if (value['checked'] === 0) {
                                // skeleton['checked'] = will either have current value or will have 
                                // default value
                            }
                            if (+value['defaultActive'] === 0 && !skeleton['value']) {
                                skeleton['disabled'] = ''
                            }
                            if (value['willActivate']) {
                                value.willActivate()
                            }
                            return skeleton
                        })(),
                        'event': function () {
                            this.addEventListener('change', handleChartChanges.bind(null, value))
                        }
                    }
                }
            ]
        }]
    }
    addNote(value, skeleton)
    return skeleton
}

function inputText(value) {
    const skeleton = {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'input'
            },
        },
        'children': [{
            'parent': {
                'name': 'div'
            },
            'children': [{
                'parent': createLabel(value)
            }, {
                'parent': {
                    'name': 'input',
                    'property': (() => {
                        const skeleton = {
                            'class': 'input-text',
                            'id': value['id'],
                            'type': 'text'
                        }
                        if (value['placeholder'].length !== 0) {
                            skeleton['placeholder'] = value['placeholder']
                        }
                        if (value['value'] === 0) {
                            // skeleton['value'] = will either have current value or will have 
                            // default value
                        }
                        if (+value['defaultActive'] === 0 && !skeleton['value']) {
                            skeleton['disabled'] = ''
                        }
                        if (value['willActivate']) {
                            value.willActivate()
                        }
                        return skeleton
                    })(),
                    'event': function () {
                        this.addEventListener('input', handleChartChanges.bind(null, value))
                    }
                }
            }]
        }]
    }
    addNote(value, skeleton)
    return skeleton
}

function inputDropDown(value) {
    const skeleton = {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'input'
            },
        },
        'children': [{
            'parent': {
                'name': 'div'
            },
            'children': [{
                'parent': createLabel(value)
            }, {
                'parent': {
                    'name': 'select',
                    'property': (() => {
                        const skeleton = {
                            'class': 'input-select'
                        }
                        if (value['value'] === 0) {
                            // skeleton['value'] = will either have current value or will have 
                            // default value
                        }
                        if (+value['defaultActive'] === 0 && !skeleton['value']) {
                            skeleton['disabled'] = ''
                        }
                        if (value['willActivate']) {
                            value.willActivate()
                        }
                        return skeleton
                    })(),
                    'event': function() {

                        this.addEventListener('input', handleChartChanges.bind(null, value))
                    }
                },
                'children': (() => {
                    const children = []
                    if (Array.isArray(value['selectValues'])) {
                        for (var option of value['selectValues']) {
                            children.push({
                                'parent': {
                                    'name': 'option',
                                    'property': {
                                        'class': 'input-option',
                                        'value': option
                                    },
                                    'text': option
                                }
                            })
                        }
                    } else {
                        // if it is an object
                        for(var option in value['selectValues']) {
                            children.push({
                                'parent': {
                                    'name': 'option',
                                    'property': {
                                        'class': 'input-option',
                                        'value': value['selectValues'][option]
                                    },
                                    'text': option
                                }
                            })
                        }
                    }
                    return children
                })(),

                //adding event listener to dropdown
                
            }]
        }]
    }
    addNote(value, skeleton)
    return skeleton
}

function inputColor(value) {
    let parentOfColorPicker;
    const skeleton = {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'input'
            },
        },
        'children': [{
            'parent': {
                'name': 'div',
            },
            'children': [{
                'parent': createLabel(value)
            }, {
                'parent': {
                    'name': 'div',
                    'property': {
                        'class': 'flex-row'
                    },
                    'event': function () {
                        parentOfColorPicker = this
                    }
                },
                'children': [{
                    'parent': {
                        'name': 'input',
                        'property': (() => {
                            const skeleton = {
                                'class': 'input-color',
                                'id': value['id'],
                            }
                            if (value['value'] === 0) {
                                // skeleton['value'] = will either have current value or will have 
                                // default value
                            }
                            if (+value['defaultActive'] === 0 && !skeleton['value']) {
                                skeleton['disabled'] = ''
                            }
                            if (value['willActivate']) {
                                value.willActivate()
                            }
                            return skeleton
                        })(),
                        'event': function () {
                            this.addEventListener('input', handleChartChanges.bind(null, value))
                            // create an observer instance
                            var observer = new MutationObserver(function (mutations) {
                                mutations.forEach(function (mutation) {
                                    if (mutation.type === 'attributes') {
                                        // console.log(mutation.target.value)
                                        handleChartChanges(value, mutation)
                                    }
                                    // or do whatever you want here
                                });
                            });
                            // configuration of the observer:
                            var config = { attributes: true, characterData: true, attributeFilter:['value'] };
                            // pass in the target node, as well as the observer options
                            observer.observe(this, config);
                        }
                    }
                }, {
                    'parent': {
                        'name': 'span',
                        'event': function () {
                            var self = this
                            new Promise(function (resolve, reject) {
                                setTimeout(() => {
                                    const pickr = Pickr.create({
                                        el: self,
                                        theme: 'nano',
                                        container: parentOfColorPicker,
                                        swatches: [
                                            'rgba(244, 67, 54, 1)',
                                            'rgba(233, 30, 99, 0.95)',
                                            'rgba(156, 39, 176, 0.9)',
                                            'rgba(103, 58, 183, 0.85)',
                                            'rgba(63, 81, 181, 0.8)',
                                            'rgba(33, 150, 243, 0.75)'
                                        ],

                                        components: {
                                            // Main components
                                            preview: true,
                                            opacity: true,
                                            hue: true,

                                            // Input / output Options
                                            interaction: {
                                                hex: true,
                                                rgba: true,
                                                hsla: true,
                                                hsva: true,
                                                cmyk: true,
                                                input: true,
                                                clear: false,
                                                save: true
                                            }
                                        }
                                    });

                                    function changeColor(e) {
                                        const element = pickr.options.container.childNodes[0]
                                        const value = e.toHEXA().toString()
                                        if (!element.disabled) {
                                            if (element.value.length !== 0) {
                                                element.value += ',' + value
                                                element.setAttribute('value', element.value+',' + value)
                                            } else {
                                                element.value = value
                                                element.setAttribute('value', value)
                                            }
                                        }
                                    }

                                    function handleSaveNClear(e) {
                                        changeColor(e)
                                        pickr.hide()
                                    }
                                    pickr.on('save', handleSaveNClear)
                                    pickr.on('clear', handleSaveNClear)
                                }, 200)
                            })
                        }
                    }
                }]
            }]
        }]
    }
    addNote(value, skeleton)
    return skeleton
}

function inputRange(value) {
    const skeleton = {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'input'
            }
        },
        'children': [{
            'parent': {
                'name': 'div'
            },
            'children': [{
                    'parent': createLabel(value)
                },
                {
                    'parent': {
                        'name': 'div',
                        'property': {
                            'class': 'flex-row'
                        }
                    },
                    'children': [{
                        'parent': {
                            'name': 'input',
                            'property': (() => {
                                const skeleton = {
                                    'class': 'input-range',
                                    'id': value['id'],
                                    'type': 'range',
                                    'min': value['min'],
                                    'max': value['max']
                                }
                                if (value['value'] === 0) {
                                    // skeleton['value'] = will either have current value or will have 
                                    // default value
                                }
                                if (+value['defaultActive'] === 0 && !skeleton['value']) {
                                    skeleton['disabled'] = ''
                                }
                                if (value['willActivate']) {
                                    value.willActivate()
                                }
                                return skeleton
                            })(),
                            'event': function () {
                                this.addEventListener('input', handleChartChanges.bind(null, value))
                                this.addEventListener('input', (e) => {
                                    this.nextSibling.innerHTML = e.target.value
                                })
                            }
                        }
                    }, {
                        'parent': {
                            'name': 'span',
                            'property': {
                                'class': 'number'
                            },
                            'text': value['value']
                        }
                    }]
                }
            ]
        }]
    }
    addNote(value, skeleton)
    return skeleton
}
function inputURL(value){
    const skeleton= {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'input'
            },
        },
        'children': [{
            'parent': {
                'name': 'div'
            },
            'children': [{
                'parent': createLabel(value)
            }, {
                'parent': {
                    'name': 'input',
                    'property': (() => {
                        const skeleton = {
                            'class': 'input-text',
                            'id': value['id'],
                            'type': 'url'
                        }
                        if (value['placeholder'].length !== 0) {
                            skeleton['placeholder'] = value['placeholder']
                        }
                        if (value['value'] === 0) {
                            // skeleton['value'] = will either have current value or will have 
                            // default value
                        }
                        if (+value['defaultActive'] === 0 && !skeleton['value']) {
                            skeleton['disabled'] = ''
                        }
                        if (value['willActivate']) {
                            value.willActivate()
                        }
                        return skeleton
                    })(),
                    'event': function () {
                        //this.addEventListener('input', (e) =>console.log(e.target.value))
                        this.addEventListener('input', handleChartChanges.bind(null, value))
                    }
                }
            }]
        }]
    }
    addNote(value, skeleton)
    return skeleton
}

function inputNumber(value) {
    const skeleton = {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'input'
            }
        },
        'children': [{
            'parent': {
                'name': 'div'
            },
            'children': [{
                'parent': createLabel(value)
            }, {
                'parent': {
                    'name': 'input',
                    'property': (() => {
                        const skeleton = {
                            'class': 'input-number',
                            'id': value['id'],
                            'type': 'number'
                        }
                        if (value['placeholder'].length !== 0) {
                            skeleton['placeholder'] = value['placeholder']
                        }
                        if (value['value'] === 0) {
                            // skeleton['value'] = will either have current value or will have 
                            // default value
                        }
                        if (+value['defaultActive'] === 0 && !skeleton['value']) {
                            skeleton['disabled'] = ''
                        }
                        if (value['willActivate']) {
                            value.willActivate()
                        }
                        return skeleton
                    })(),
                    'event': function () {
                        this.addEventListener('input', handleChartChanges.bind(null, value))
                    }
                }
            }]
        }]
    }
    addNote(value, skeleton)
    return skeleton
}

function plotArea(type, part) {
    const dom = document.querySelector('.customize-input-field')
    while (dom.hasChildNodes()) {
        dom.removeChild(dom.lastChild)
    }
    for (var property in type[part]['properties']) {
        const skeleton = {
            'parent': {
                'name': 'li'
            },
            'children': [{
                    'parent': {
                        'name': 'h2',
                        'property': {
                            'class': 'input-heading'
                        },
                        'text': property
                    }
                },
                {
                    'parent': {
                        'name': 'ul'
                    },
                    'children': (() => {
                        const children = []
                        const values = type[part]['properties'][property]
                        for (var value of values) {
                            if (value['inputFieldType'].toLowerCase() === 'text') {
                                children.push(inputText(value))
                            } else if (value['inputFieldType'].toLowerCase() === 'number') {
                                children.push(inputNumber(value))
                            } else if (value['inputFieldType'].toLowerCase() === 'select') {
                                children.push(inputDropDown(value))
                            } else if (value['inputFieldType'].toLowerCase() === 'range') {
                                children.push(inputRange(value))
                            } else if (value['inputFieldType'].toLowerCase() === 'color') {
                                children.push(inputColor(value))
                            } else if (value['inputFieldType'].toLowerCase() === 'checkbox') {
                                children.push(inputCheckBox(value))
                            }
                            else if(value['inputFieldType'].toLowerCase() === 'url') {
                                children.push(inputURL(value))
                            }
                        }
                        return children
                    })()
                }
            ]
        }
        dom.appendChild(render(skeleton))
    }
}

function checkActive(e) {
    const children = Array.from(e.target.parentElement.children)
    for(let child of children) {
        if (child.classList.contains('active-customize')) {
            child.classList.remove('active-customize')
            break
        }
    }
    e.target.classList.add('active-customize')
}
function customize() {
    const chartType = chart.chartType()
    var type
    if (chartType === 'column2d') {
        type = column2d
    } else if (chartType === 'line') {
        type = line
    } else if (chartType === 'area2d') {
        type = area2d
    } else if (chartType === 'bar2d') {
        type = bar2d
    } else if (chartType === 'pie2d') {
        type = pie2d
    }
    else if (chartType === 'pie3d') {
        type = pie3d
    }
    else if (chartType === 'column3d') {
        type = column3d
    }
    else if(chartType==='mscolumn2d'){
        type=mscolumn2d
    }
    else if(chartType==='msbar2d'){
        type=msbar2d
    }
    else if(chartType==='msbar3d'){
        type=msbar3d
    }
    else if(chartType==='mscolumn3d'){
        type=mscolumn3d
    }
    else if(chartType==='bar3d'){
        type=bar3d
    }

    const skeleton = {
        'parent': {
            'name': 'div',
            'property': {
                'class': 'aside-customize'
            }
        },
        'children': [{
            'parent': {
                'name': 'ul',
                'property': {
                    'class': 'customize-type-list'
                },
            },
            'children': (() => {
                const children = []
                for (let part in type) {
                    const dom = {
                        'parent': {
                            'name': 'li',
                            'property': {
                                'class': 'customize-item ' + part 
                            },
                            'text': type[part]['name'],
                            'event': function () {
                                this.addEventListener('click', checkActive)
                                 //if part=dataplot, then call other function in event listener
                                if(part === 'dataplot')
                                this.addEventListener('click', levelDropdown.bind(null, type, type[part]))
                                else
                                this.addEventListener('click', plotArea.bind(null, type, part))
                            }
                        }
                    }
                    children.push(dom)
                }
                return children
            })()
        }, {
            'parent': {
                'name': 'ul',
                'property': {
                    'class': 'customize-input-field'
                }
            }
        }]
    }
    document.querySelector('.aside-detail').appendChild(render(skeleton))
}

function levelDropdown(type, part){
    const value = {
        label: 'Level',
        inputFieldType: 'select',
        placeholder: 'chart',
        value: '',
        id: '',
        note: '',
        defaultActive: '1',
        location: '',
        selectValues : ['chart', 'data', 'series'],  
    }
    const dom = document.querySelector('.customize-input-field')
    while (dom.hasChildNodes()) {
        dom.removeChild(dom.lastChild)
    }

    //prepare skeleton for level select
    const skeleton = LevelinputDropDown(value, part)

    // skeleton.children[0].children[1]['event'] = function(){
    //     this.addEventListener('change', plotLevelArea.bind(null, part))
    // }()
    
    dom.appendChild(render(skeleton))

    //add default features of 'chart' level

    const featuresBoxSkeleton = createFeaturesBox(part, 'chart')
    // console.log(featuresBoxSkeleton)

    dom.appendChild(render(featuresBoxSkeleton))
    
}

function plotLevelArea(){
    // console.log(arguments)
    const part = arguments[0]
    // const parentEvent = arguments[1]
    const event = arguments[1]

    if(!parentEvent){
        if(event.target.value === 'data' || event.target.value === 'series'){
            // add a note 
            let dom = document.getElementsByClassName('features-box')
            while (dom[0].hasChildNodes()) {
                dom[0].removeChild(dom[0].lastChild)
            }

            if(event.target.value === 'data')
            text = 'Note: Please click on data plot to see the changes'
            else
            text = 'Note: Please click on series to see the changes'
            const note = {
                'parent': {
                    'name': 'div',
                    'text': text

                },            }
            dom[0].appendChild(render(note))
        }else{
            addFeatures()
        }
    }else{
        addFeatures()
    }

    function addFeatures(){
        const skeleton1 = createFeaturesBox(part, event.target.value)

        //add it to customize-input-field
        const dom = document.querySelector('.customize-input-field')

        //remove previous added features of different level

        let elements = document.getElementsByClassName('features-box')
        for(elem of elements){
            dom.removeChild(elem)
        }
        dom.appendChild(render(skeleton1))
    }
}

function createFeaturesBox(part, level){
  
    const values = part['properties'][level]
    const skeleton = {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'features-box'
            }
        },
        'children': [
            {
                'parent': {
                    'name': 'ul'
                },
                'children': (() => {
                    const children = []
                    // const values = type[part]['properties'][property]
                    for (var value of values) {
                        if (value['inputFieldType'].toLowerCase() === 'text') {
                            children.push(inputText(value))
                        } else if (value['inputFieldType'].toLowerCase() === 'number') {
                            children.push(inputNumber(value))
                        } else if (value['inputFieldType'].toLowerCase() === 'select') {
                            children.push(inputDropDown(value))
                        } else if (value['inputFieldType'].toLowerCase() === 'range') {
                            children.push(inputRange(value))
                        } else if (value['inputFieldType'].toLowerCase() === 'color') {
                            children.push(inputColor(value))
                        } else if (value['inputFieldType'].toLowerCase() === 'checkbox') {
                            children.push(inputCheckBox(value))
                        }
                        else if(value['inputFieldType'].toLowerCase()==='url'){
                            children.push(inputURL(value))
                        }
                    }
                    return children
                })()
            }
        ]
    }
    return skeleton
}


function LevelinputDropDown(value, part) {
    const skeleton = {
        'parent': {
            'name': 'li',
            'property': {
                'class': 'input'
            },
        },
        'children': [{
            'parent': {
                'name': 'div'
            },
            'children': [{
                'parent': createLabel(value)
            }, {
                'parent': {
                    'name': 'select',
                    'property': (() => {
                        const skeleton = {
                            'class': 'input-select'
                        }
                        if (value['value'] === 0) {
                            // skeleton['value'] = will either have current value or will have 
                            // default value
                        }
                        if (+value['defaultActive'] === 0 && !skeleton['value']) {
                            skeleton['disabled'] = ''
                        }
                        if (value['willActivate']) {
                            value.willActivate()
                        }
                        return skeleton
                    })(),
                    'event': function() {

                        this.addEventListener('change', plotLevelArea.bind(null, part))
                        
                    }
                },
                'children': (() => {
                    const children = []
                    if (Array.isArray(value['selectValues'])) {
                        for (var option of value['selectValues']) {
                            children.push({
                                'parent': {
                                    'name': 'option',
                                    'property': {
                                        'class': 'input-option',
                                        'value': option
                                    },
                                    'text': option
                                }
                            })
                        }
                    } else {
                        // if it is an object
                        for(var option in value['selectValues']) {
                            children.push({
                                'parent': {
                                    'name': 'option',
                                    'property': {
                                        'class': 'input-option',
                                        'value': value['selectValues'][option]
                                    },
                                    'text': option
                                }
                            })
                        }
                    }
                    return children
                })(),

                //adding event listener to dropdown
                
            }]
        }]
    }
    addNote(value, skeleton)
    return skeleton
}