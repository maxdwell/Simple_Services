$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016 Q1',
            iphone: 2666,
            Techno: null,
            Samsung: 2647
        }, {
            period: '2016 Q2',
            iphone: 2778,
            Techno: 2294,
            Samsung: 2441
        }, {
            period: '2016 Q3',
            iphone: 4912,
            Techno: 1969,
            Samsung: 2501
        }, {
            period: '2016 Q4',
            iphone: 3767,
            Techno: 3597,
            Samsung: 5689
        }, {
            period: '2017 Q1',
            iphone: 6810,
            Techno: 1914,
            Samsung: 2293
        }, {
            period: '2017 Q2',
            iphone: 5670,
            Techno: 4293,
            Samsung: 1881
        }, {
            period: '2017 Q3',
            iphone: 4820,
            Techno: 3795,
            Samsung: 1588
        }, {
            period: '2017 Q4',
            iphone: 15073,
            Techno: 5967,
            Samsung: 5175
        }, {
            period: '2017 Q4',
            iphone: 10687,
            Techno: 4460,
            Samsung: 2028
        }, {
            period: '2017 Q4',
            iphone: 8432,
            Techno: 5713,
            Samsung: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'Samsung', 'Techno'],
        labels: ['iPhone', 'Samsung', 'Techno'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Phone Orders",
            value: 456
        }, {
            label: "In-Store Sales",
            value: 892
        }, {
            label: "Pre-Order's",
            value: 345
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2010',
            a: 6989,
            b: 8345
        }, {
            y: '2011',
            a: 5672,
            b: 8231
        }, {
            y: '2012',
            a: 7562,
            b: 9872
        }, {
            y: '2013',
            a: 1932,
            b: 8923
        }, {
            y: '2014',
            a: 4572,
            b: 8901
        }, {
            y: '2015',
            a: 9576,
            b: 7899
        }, {
            y: '2016',
            a: 10990,
            b: 6586
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Samsung', 'Apple'],
        hideHover: 'auto',
        resize: true
    });
    
});
