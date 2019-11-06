function editJson() {
    const skeleton = {
        'parent': {
            'name': 'div',
            'property': {
                'class': 'json'
            }
        },
        'children': [{
            'parent': {
                'name': 'textarea',
                'property': {
                    'class': 'json-textarea',
                    'rows': '10',
                    'cols': '70'
                },
                'event': function() {
                    this.value = JSON.stringify(chart.getJSONData(), null, 2)
                    this.addEventListener('input', (e) => {
                        chart.setJSONData(JSON.parse(e.target.value))
                    })
                }
            }
        }]
    }
document.querySelector('.aside-detail').appendChild(render(skeleton))
}