
function showHideDetail(e) {
    // console.log(e)
    let dom = e.target
    const sideNav = document.querySelector('.aside-detail')

    function deleteNode() {
        while (sideNav.hasChildNodes()) {
            sideNav.removeChild(sideNav.lastChild)
        }
    }
    while (dom.tagName !== 'LI') {
        dom = dom.parentElement
    }
    if (dom.classList.contains('aside-link-active')) {
        sideNav.classList.add('aside-detail-hide')
        deleteNode()
        dom.classList.remove('aside-link-active')
        return 0
    } else {
        // remove if someone has it
        const nodes = Array.from(document.querySelectorAll('.aside-link-container'))
        for (var node of nodes) {
            if (node.classList.contains('aside-link-active')) {
                node.classList.remove('aside-link-active')
                break;
            }
        }
        dom.classList.add('aside-link-active')
        if (sideNav.classList.contains('aside-detail-hide') === false) {
            deleteNode()
        } else {
            sideNav.classList.remove('aside-detail-hide')
        }
        return 1
    }
}

function aside() {
    const skeleton = {
        'parent': {
            'name': 'div',
            'property': {
                'class': 'aside-container'
            },
        },
        'children': [{
            'parent': {
                'name': 'ul',
                'property': {
                    'class': 'aside-nav'
                }
            },
            'children': [{
                'parent': {
                    'name': 'li',
                    'property': {
                        'class': 'aside-link-container'
                    },
                    'event': function () {
                        // onclick will open aside-detail tab, each tab
                        // will open a different width
                        // will add class
                        this.addEventListener('click', function (e) {
                            showHideDetail(e)
                        })
                    }
                },
                'children': [{
                    'parent': {
                        'name': 'a',
                        'property': {
                            'class': 'aside-link'
                        }
                    },
                    'children': [{
                        'parent': {
                            'name': 'i',
                            'property': {
                                'class': 'fa fa-table aside-icon'
                            },
                            'event': function(){
                                
                                this.addEventListener('click', function(e) {
                                    previewCSV();
                                });
                            }

                        }
                    }]
                }]
            }, 
            //{
            //     'parent': {
            //         'name': 'li',
            //         'property': {
            //             'class': 'aside-link-container'
            //         },
            //         'event': function () {
            //             // onclick will open aside-detail tab, each tab
            //             // will open a different width
            //             // will add class
            //             this.addEventListener('click', function (e) {
            //                 showHideDetail(e)
            //             })
            //         }
            //     },
            //     'children': [{
            //         'parent': {
            //             'name': 'a',
            //             'property': {
            //                 'class': 'aside-link'
            //             }
            //         },
            //         'children': [{
            //             'parent': {
            //                 'name': 'i',
            //                 'property': {
            //                     'class': 'fa fa-bar-chart aside-icon'
            //                 }
            //             }
            //         }]
            //     }]
            //},
             {
                'parent': {
                    'name': 'li',
                    'property': {
                        'class': 'aside-link-container customize'
                    },
                    'event': function () {
                        // onclick will open aside-detail tab, each tab
                        // will open a different width
                        // will add class
                        this.addEventListener('click', (e) => {
                            if (showHideDetail(e) === 1) {
                                customize(e)
                            }
                        })
                    }
                },
                'children': [{
                    'parent': {
                        'name': 'a',
                        'property': {
                            'class': 'aside-link'
                        }
                    },
                    'children': [{
                        'parent': {
                            'name': 'i',
                            'property': {
                                'class': 'fa fa-sliders aside-icon'
                            }
                        }
                    }]
                }]
            }, {
                'parent': {
                    'name': 'li',
                    'property': {
                        'class': 'aside-link-container'
                    }
                },
                'children': [{
                    'parent': {
                        'name': 'a',
                        'property': {
                            'class': 'aside-link'
                        },
                        'event': function () {
                            // onclick will open aside-detail tab, each tab
                            // will open a different width
                            // will add class
                            this.addEventListener('click', function (e) {
                                e.preventDefault()
                                exportHTML()
                            })
                        }
                    },
                    'children': [{
                        'parent': {
                            'name': 'i',
                            'property': {
                                'class': 'fa fa-download aside-icon'
                            }
                        }
                    }]
                }]
            }, {
                'parent': {
                    'name': 'li',
                    'property': {
                        'class': 'aside-link-container'
                    },
                    'event': function () {
                        // onclick will open aside-detail tab, each tab
                        // will open a different width
                        // will add class
                        this.addEventListener('click', function (e) {
                           if(showHideDetail(e) === 1) {
                               // executejson
                               editJson() 
                           }
                        })
                    },
                },
                    'children':[
                        {
                            'parent': {
                                'name': 'a',
                                'property': {
                                    'class': 'aside-link'
                                }
                            },
                            'children': [{
                                'parent': {
                                    'name': 'i',
                                    'property': {
                                        'class': 'fa fa-file-text aside-icon'
                                    }
                                }
                            }]
                        }
                    ]
                }   ]
        }, {
            'parent': {
                'name': 'div',
                'property': {
                    'class': 'aside-detail aside-detail-hide'
                }
            }
        }]
    }
    const aside = document.getElementById('aside')
    aside.appendChild(render(skeleton))
}
