var state = 0

function handleClicks(e, parent) {
    let outputString
    const asideCustomize = document.querySelector('.customize')
    if (!asideCustomize.classList.contains('aside-link-active')) {
        asideCustomize.click()
    }
    if (parent) {
        if (e.type === 'dataplotclick') {
            document.querySelector('.dataplot').click()
            outputString = e.data.value
        } else if (e.type === 'datalabelclick') {
            outputString = e.data.text
        } else if (e.type === 'legenditemclicked') {
            outputString = e.data.datasetName
        }
        state = 1
        console.log(outputString)
    } else if (e.target.tagName === 'tspan' || e.target.tagName === 'text' && state === 0) {        
        var x = e.target
        while (x.parentElement.classList && !x.parentElement.classList.value.includes('-caption') && !x.parentElement.classList.value.includes('-datalabel')) {
            x = x.parentElement
        }
        if (x.parentElement.classList.value.includes('-caption')) {
            const text = findText()
            if(chart.getChartAttribute('caption') && chart.getChartAttribute('caption') === text) {
                // caption
                document.querySelector('.caption').click()
            } else if (chart.getChartAttribute('subCaption') && chart.getChartAttribute('subCaption') === text) {
                // subcaption
                document.querySelector('.subcaption').click()
            }
        } else if (x.parentElement.classList.value.includes('-datalabel')) {
            document.querySelector('.plotValue').click()
        }
        function findText() {
            const tagName = e.target.tagName
            let outputString
            if (tagName.toLowerCase() === 'tspan') {
                const parent = e.target.parentElement
                const children = Array.from(parent.children)
                let finalString = ''
                for (let child of children) {
                    finalString += ' ' + child.innerHTML
                }
                outputString = finalString
            } else if (tagName.toLowerCase() === 'text') {
                outputString = e.target.innerHTML
            }
            if (outputString) {
                return outputString.trim()
            }
        }
    } else {
        for (let node of e.path) {
            // 1. if class name is canvas
            if (node.classList && node.classList.value.includes('-canvas')) {
                document.querySelector('.canvas').click()
                console.log('canvas')
                return
            }
            // 2. if class name is axisReferenceVisualsMiddle
            if (node.classList && node.classList.value.includes('-axisReferenceVisualsMiddle')) {
                console.log('TrendZone')
                return
            }
            if (node.classList && node.classList.value.includes('-axisReferenceVisualsFloor')) {
                console.log('Alternate Grid')
                return
            }
            if (node.classList && node.classList.value.includes('-parentgroup')) {
                if (state === 0) {
                    document.querySelector('.chartDS').click()
                    console.log('chart')
                } else {
                    state = 0
                }
                return
            }
        }
    }
}
const asideContainer = document.getElementById('aside')
let prevWidth = asideContainer.offsetWidth
var chart ;
setInterval(() => {
    if (asideContainer.offsetWidth !== prevWidth) {
        prevWidth = asideContainer.offsetWidth;
        if(chart)
            chart.resizeTo(0.9 * (window.innerWidth - prevWidth), 400)
    }
}, 100)
