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
    debugger
    const value = arguments[0]
    const event = arguments[1]
    if (value['location'] === 'chart') {
        if (value['inputFieldType'] === 'checkbox') {
            chart.setChartAttribute(value['id'].split('_')[1], event.target.checked ? '1' : '0')
        } else {
            chart.setChartAttribute(value['id'].split('_')[1], event.target.value)
        }
    } else if (typeof value['location'] === 'object') {

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
                            this.addEventListener('input', handleChartChanges.bind(null, value))
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
                        debugger
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
                })()
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
                        }
                        return children
                    })()
                }
            ]
        }
        dom.appendChild(render(skeleton))
    }
}

function customize() {
    const type = column2d
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
                                'class': 'customize-item'
                            },
                            'text': type[part]['name'],
                            'event': function () {
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