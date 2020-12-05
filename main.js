Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/us-population-density.json', function (data) {

    // Make codes uppercase to match the map data
    data.forEach(function (p) {
        p.code = p.code.toUpperCase();
    });

    // Instantiate the map
    Highcharts.mapChart('map', {

        chart: {
            map: 'countries/us/us-all',
            borderWidth: 1
        },

        title: {
            text: 'US population density (/km²)'
        },

        exporting: {
            sourceWidth: 600,
            sourceHeight: 500
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#F5B7B1',
            maxColor: '#78281F',
            stops: [
                [0, '#F5B7B1'],
                [0.67, '#EC7063 '],
                [1, '#78281F']
            ]
        },

        series: [{
            animation: {
                duration: 1000
            },
            data: data,
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Population density',
            tooltip: {
                pointFormat: '{point.code}: {point.value}/km²'
            }
        }]
    });
});
<!-- Write your comments here -->