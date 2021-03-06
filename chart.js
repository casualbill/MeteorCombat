function showChart(container, data) {
    console.log(data);
    container.highcharts({
        credits: { enabled: false},
        title: {
            text: data.name
        },
        exporting: { enabled: false},
        xAxis: {
            categories: sourceData.recordDate.slice(-50),
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
            title: { text: null}
        }],
        tooltip: {
            valueSuffix: '星'
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '单场',
            data: data.recent.slice(-50),
            type: 'column',
            yAxis: 0
        }, {
            name: '累计',
            data: data.eachTotalScore.slice(-50),
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