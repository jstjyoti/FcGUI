const sample_area2d = {
    "chart": {
        "caption": "Sales of Liquor",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "Sales (In USD)",
        "numberPrefix": "$",
        "showValues": "1"
    },
    "data": [
        {
            "label": "Mon",
            "value": "4123"
        },
        {
            "label": "Tue",
            "value": "4633"
        },
        {
            "label": "Wed",
            "value": "5507"
        },
        {
            "label": "Thu",
            "value": "4910"
        },
        {
            "label": "Fri",
            "value": "5529"
        },
        {
            "label": "Sat",
            "value": "5803"
        },
        {
            "label": "Sun",
            "value": "6202"
        }
    ]
}
const sample_bar2d = {
    "chart": {
        "caption": "Top 5 Stores by Sales",
        "subCaption": "Last month",
        "yAxisName": "Sales (In USD)",
        "numberPrefix": "$"
    },
    "data": [
        {
            "label": "Bakersfield Central",
            "value": "880000"
        },
        {
            "label": "Garden Groove harbour",
            "value": "730000"
        },
        {
            "label": "Los Angeles Topanga",
            "value": "590000"
        },
        {
            "label": "Compton-Rancho Dom",
            "value": "520000"
        },
        {
            "label": "Daly City Serramonte",
            "value": "330000"
        }
    ]
}
const sample_column2d = {
    "chart": {
        "caption": "www.google.com",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Month",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$"
    },
    "data": [
        {
            "label": "Jan",
            "value": "420000"
        },
        {
            "label": "Feb",
            "value": "810000"
        },
        {
            "label": "Mar",
            "value": "720000"
        },
        {
            "label": "Apr",
            "value": "550000"
        },
        {
            "label": "May",
            "value": "910000"
        },
        {
            "label": "Jun",
            "value": "510000"
        },
        {
            "label": "Jul",
            "value": "680000"
        },
        {
            "label": "Aug",
            "value": "620000"
        },
        {
            "label": "Sep",
            "value": "610000"
        },
        {
            "label": "Oct",
            "value": "490000"
        },
        {
            "label": "Nov",
            "value": "900000"
        },
        {
            "label": "Dec",
            "value": "730000"
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startvalue": "700000",
                    "valueOnRight": "1",
                    "displayvalue": "Monthly Target"
                }
            ]
        }
    ]
}
const sample_line2d = {
    "chart": {
        "caption": "Total footfall in Bakersfield Central",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "lineThickness": "2"
    },
    "data": [
        {
            "label": "Mon",
            "value": "15123"
        },
        {
            "label": "Tue",
            "value": "14233"
        },
        {
            "label": "Wed",
            "value": "23507"
        },
        {
            "label": "Thu",
            "value": "9110"
        },
        {
            "label": "Fri",
            "value": "15529"
        },
        {
            "label": "Sat",
            "value": "20803"
        },
        {
            "label": "Sun",
            "value": "19202"
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startvalue": "18500",
                    "color": "#1aaf5d",
                    "displayvalue": "Average{br}weekly{br}footfall",
                    "valueOnRight": "1",
                    "thickness": "2"
                }
            ]
        }
    ]
}
const sample_bubble = {
    "chart": {
        "caption": "Total footfall in Bakersfield Central",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "lineThickness": "2"
    },
    "data": [
        {
            "label": "Mon",
            "value": "15123"
        },
        {
            "label": "Tue",
            "value": "14233"
        },
        {
            "label": "Wed",
            "value": "23507"
        },
        {
            "label": "Thu",
            "value": "9110"
        },
        {
            "label": "Fri",
            "value": "15529"
        },
        {
            "label": "Sat",
            "value": "20803"
        },
        {
            "label": "Sun",
            "value": "19202"
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startvalue": "18500",
                    "color": "#1aaf5d",
                    "displayvalue": "Average{br}weekly{br}footfall",
                    "valueOnRight": "1",
                    "thickness": "2"
                }
            ]
        }
    ]
}
const sample_scatter = {
    "chart": {
        "caption": "Sales of Beer & Ice-cream vs Temperature",
        "subCaption": "Los Angeles Topanga",
        "baseFont": "Helvetica Neue,Arial",
        "xAxisName": "Average Day Temperature",
        "yAxisName": "Sales (In USD)",
        "xAxisMinValue": "23",
        "xAxisMaxValue": "95",
        "yNumberPrefix": "$",
        "xNumberSuffix": "&deg; F",
        "theme": "fusion"
    },
    "categories": [
        {
            "verticalLineDashed": "1",
            "verticalLineDashLen": "1",
            "verticalLineDashGap": "1",
            "verticalLineThickness": "1",
            "verticalLineColor": "#000000",
            "category": [
                {
                    "x": "23",
                    "label": "23° F",
                    "showverticalline": "0"
                },
                {
                    "x": "32",
                    "label": "32° F",
                    "showverticalline": "1"
                },
                {
                    "x": "50",
                    "label": "50° F",
                    "showverticalline": "1"
                },
                {
                    "x": "68",
                    "label": "68° F",
                    "showverticalline": "1"
                },
                {
                    "x": "80",
                    "label": "80° F",
                    "showverticalline": "1"
                },
                {
                    "x": "95",
                    "label": "95° F",
                    "showverticalline": "1"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Ice Cream",
            "showregressionline": "1",
            "data": [
                {
                    "x": "23",
                    "y": "1560"
                },
                {
                    "x": "24",
                    "y": "1500"
                },
                {
                    "x": "24",
                    "y": "1680"
                },
                {
                    "x": "25",
                    "y": "1780"
                },
                {
                    "x": "25",
                    "y": "1620"
                },
                {
                    "x": "26",
                    "y": "1810"
                },
                {
                    "x": "27",
                    "y": "2310"
                },
                {
                    "x": "29",
                    "y": "2620"
                },
                {
                    "x": "31",
                    "y": "2500"
                },
                {
                    "x": "32",
                    "y": "2410"
                },
                {
                    "x": "35",
                    "y": "2880"
                },
                {
                    "x": "36",
                    "y": "3910"
                },
                {
                    "x": "34",
                    "y": "3960"
                },
                {
                    "x": "38",
                    "y": "4080"
                },
                {
                    "x": "40",
                    "y": "4190"
                },
                {
                    "x": "41",
                    "y": "4170"
                },
                {
                    "x": "42",
                    "y": "4280"
                },
                {
                    "x": "54",
                    "y": "5180"
                },
                {
                    "x": "53",
                    "y": "5770"
                },
                {
                    "x": "55",
                    "y": "5900"
                },
                {
                    "x": "56",
                    "y": "5940"
                },
                {
                    "x": "58",
                    "y": "6090"
                },
                {
                    "x": "61",
                    "y": "6086"
                },
                {
                    "x": "67",
                    "y": "6100"
                },
                {
                    "x": "68",
                    "y": "6200"
                },
                {
                    "x": "70",
                    "y": "6360"
                },
                {
                    "x": "75",
                    "y": "6450"
                },
                {
                    "x": "79",
                    "y": "6650"
                },
                {
                    "x": "80",
                    "y": "6710"
                },
                {
                    "x": "79",
                    "y": "6975"
                },
                {
                    "x": "82",
                    "y": "7000"
                },
                {
                    "x": "85",
                    "y": "7150"
                },
                {
                    "x": "86",
                    "y": "7160"
                },
                {
                    "x": "86",
                    "y": "7200"
                },
                {
                    "x": "88",
                    "y": "7230"
                },
                {
                    "x": "87",
                    "y": "7210"
                },
                {
                    "x": "86",
                    "y": "7480"
                },
                {
                    "x": "89",
                    "y": "7540"
                },
                {
                    "x": "89",
                    "y": "7400"
                },
                {
                    "x": "90",
                    "y": "7500"
                },
                {
                    "x": "92",
                    "y": "7640"
                }
            ]
        },
        {
            "seriesname": "Beer",
            "showregressionline": "1",
            "data": [
                {
                    "x": "23",
                    "y": "3160"
                },
                {
                    "x": "24",
                    "y": "3000"
                },
                {
                    "x": "24",
                    "y": "3080"
                },
                {
                    "x": "25",
                    "y": "3680"
                },
                {
                    "x": "25",
                    "y": "3320"
                },
                {
                    "x": "26",
                    "y": "3810"
                },
                {
                    "x": "27",
                    "y": "5310"
                },
                {
                    "x": "29",
                    "y": "3620"
                },
                {
                    "x": "31",
                    "y": "4100"
                },
                {
                    "x": "32",
                    "y": "3910"
                },
                {
                    "x": "35",
                    "y": "4280"
                },
                {
                    "x": "36",
                    "y": "4210"
                },
                {
                    "x": "34",
                    "y": "4160"
                },
                {
                    "x": "38",
                    "y": "4480"
                },
                {
                    "x": "40",
                    "y": "4890"
                },
                {
                    "x": "41",
                    "y": "4770"
                },
                {
                    "x": "42",
                    "y": "4880"
                },
                {
                    "x": "54",
                    "y": "4980"
                },
                {
                    "x": "53",
                    "y": "4770"
                },
                {
                    "x": "55",
                    "y": "4900"
                },
                {
                    "x": "56",
                    "y": "4940"
                },
                {
                    "x": "58",
                    "y": "4990"
                },
                {
                    "x": "61",
                    "y": "5086"
                },
                {
                    "x": "67",
                    "y": "5100"
                },
                {
                    "x": "68",
                    "y": "4700"
                },
                {
                    "x": "70",
                    "y": "5360"
                },
                {
                    "x": "75",
                    "y": "5150"
                },
                {
                    "x": "79",
                    "y": "5450"
                },
                {
                    "x": "80",
                    "y": "5010"
                },
                {
                    "x": "79",
                    "y": "4975"
                },
                {
                    "x": "82",
                    "y": "5400"
                },
                {
                    "x": "85",
                    "y": "5150"
                },
                {
                    "x": "86",
                    "y": "5460"
                },
                {
                    "x": "86",
                    "y": "5000"
                },
                {
                    "x": "88",
                    "y": "5200"
                },
                {
                    "x": "87",
                    "y": "5410"
                },
                {
                    "x": "86",
                    "y": "5480"
                },
                {
                    "x": "89",
                    "y": "5440"
                },
                {
                    "x": "89",
                    "y": "5300"
                },
                {
                    "x": "90",
                    "y": "5500"
                },
                {
                    "x": "92",
                    "y": "5240"
                }
            ]
        }
    ],
    "vtrendlines": [
        {
            "line": [
                {
                    "startvalue": "23",
                    "endvalue": "32",
                    "istrendzone": "1",
                    "displayvalue": " ",
                    "color": "#adebff",
                    "alpha": "25"
                },
                {
                    "startvalue": "23",
                    "endvalue": "32",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Very cold"
                },
                {
                    "startvalue": "32",
                    "endvalue": "50",
                    "istrendzone": "1",
                    "displayvalue": " ",
                    "color": "#adebff",
                    "alpha": "15"
                },
                {
                    "startvalue": "32",
                    "endvalue": "50",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Cold"
                },
                {
                    "startvalue": "50",
                    "endvalue": "68",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Moderate"
                },
                {
                    "startvalue": "68",
                    "endvalue": "80",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Hot"
                },
                {
                    "startvalue": "68",
                    "endvalue": "80",
                    "istrendzone": "1",
                    "displayvalue": " ",
                    "color": "#f2a485",
                    "alpha": "15"
                },
                {
                    "startvalue": "80",
                    "endvalue": "95",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Very hot"
                },
                {
                    "startvalue": "80",
                    "endvalue": "95",
                    "istrendzone": "1",
                    "displayvalue": " ",
                    "color": "#f2a485",
                    "alpha": "25"
                }
            ]
        }
    ]
}
const sample_pie2d = {
    "chart": {
        "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "use3DLighting": "0",
        "showPercentValues": "1",
        "decimals": "1",
        "useDataPlotColorForLabels": "1",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Teenage",
            "value": "1250400"
        },
        {
            "label": "Adult",
            "value": "1463300"
        },
        {
            "label": "Mid-age",
            "value": "1050700"
        },
        {
            "label": "Senior",
            "value": "491000"
        }
    ]
}
const sample_mscolumn2d = {
    "chart": {
        "caption": "Comparison of Quarterly Revenue",
        "xAxisname": "Quarter",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "plotFillAlpha": "80",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Q1"
                },
                {
                    "label": "Q2"
                },
                {
                    "label": "Q3"
                },
                {
                    "label": "Q4"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Previous Year",
            "data": [
                {
                    "value": "10000"
                },
                {
                    "value": "11500"
                },
                {
                    "value": "12500"
                },
                {
                    "value": "15000"
                }
            ]
        },
        {
            "seriesname": "Current Year",
            "data": [
                {
                    "value": "25400"
                },
                {
                    "value": "29800"
                },
                {
                    "value": "21800"
                },
                {
                    "value": "26800"
                }
            ]
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startvalue": "12250",
                    "color": "#0075c2",
                    "displayvalue": "Previous{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Previous year quarterly target  : $13.5K"
                },
                {
                    "startvalue": "25950",
                    "color": "#1aaf5d",
                    "displayvalue": "Current{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Current year quarterly target  : $23K"
                }
            ]
        }
    ]
}