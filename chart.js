function showChart(container, data) {
    container.highcharts({
        credits: { enabled: false},
        title: {
            text: data.name
        },
        exporting: { enabled: false},
        xAxis: {
            categories: sourceData.recordDate,
            labels: {
                rotation: 45,
                step: 2
            }
        },
        yAxis: [{
            opposite: true,
            title: { text: null},
            min: 0,
            max: 6
        }, {
            title: { text: null},
            min: 0
        }],
        tooltip: {
            valueSuffix: '星'
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '单场',
            data: data.recent,
            type: 'column',
            yAxis: 0
        }, {
            name: '累计',
            data: data.eachTotalScore,
            yAxis: 1
        }],
        tooltip: {
            valueSuffix: '星'
        }
    });
}

function scoreChart(container, data, title, yAxisMin) {
    container.highcharts({
        credits: { enabled: false},
        title: {
            text: title
        },
        exporting: { enabled: false},
        xAxis: {
            categories: sourceData.recordDate.slice(-15),
            labels: {
                rotation: 45,
            }
        },
        yAxis: [{
            title: { text: null},
            min: yAxisMin
        }],
        tooltip: {
            valueSuffix: '星'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: data,
        tooltip: {
            valueSuffix: '星'
        }
    });
}