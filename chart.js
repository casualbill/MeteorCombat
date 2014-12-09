function showChart(container, index) {
    var chartData = sourceData.scoreData[index]; 
    chartData.totalScore = [];

    for (var i = 0; i < sourceData.recordDate.length; i++) {
        chartData.totalScore[i] = 0;
        for (var j = 0; j < i + 1; j++) {
            chartData.totalScore[i] += chartData.recent[j];
        }
    }

    container.highcharts({
        credits: { enabled: false},
        title: {
            text: chartData.name
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
            data: chartData.recent,
            type: 'column',
            yAxis: 0
        }, {
            name: '累计',
            data: chartData.totalScore,
            yAxis: 1
        }],
        tooltip: {
            valueSuffix: '星'
        }
    });
}