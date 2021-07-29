  $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
        console.log(JSON.stringify(data, null, 2));
    });
