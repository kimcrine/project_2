// Create function to get data and plot
function getPlot(name) {
    
    // Read the json file to get data
    d3.json("fifa21.json").then((data)=> {
        console.log(data)
        //var wfreq = data.metadata.map(d => d.wfreq)
        //console.log(`Washing Freq: ${wfreq}`)

        // Filter players values by name
        var players = data.players.filter(s => s.name.toString() === name)[0];

        console.log(players);

        // Get the top 10 players
        //var topPlayers = players.topPlayers.slice(0, 10).reverse();

        // Get the top 10 otu ids
        //var idValues = (samples.otu_ids.slice(0, 10)).reverse();
        
        // Get the player attritbutes to the desired form for plotting
        var attributes = playerAttributes.map(d => "Attributes " + d)

        console.log(`Attributes: ${attributes}`)

        // Get the attribute labels for the plot
        var labels = players.attribute_labels.slice(0, 10);

        //console.log(`Sample Values: ${sampleValues}`)
        //console.log(`Id Values: ${idValues}`)
                
        // Create trace variable for the plot
        var trace = {
            x: players,
            y: attributes,
            text: labels,
            type:"bar",
            orientation: "h",
        };

        // Create data variable
        var data = [trace];

        // Create layout variable to set plots layout
        var layout = {
            title: "Top Players",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 30,
                b: 20
            }
        };

         // Create the bar plot
         Plotly.newPlot("bar", data, layout);

// Create function for the change event
function optionChanged(id) {
    getPlot(name);
}

// Create function for the initial data rendering
function init() {
    // Select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // Read the data 
    d3.json("fifa21.json").then((data)=> {
        console.log(data)

        // Get the id data into the dropdown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // Call functions to display data with plots
        getPlot(data.names[0]);
        getInfo(data.names[0]);
    });
}

init();