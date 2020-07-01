var OutdoorTempDict = {};
var OutdoorTempList = [];
var OTBoolean = [false,false,false,false,false];
var OutdoorTempData = new Array(12);;
var RHumidityDict = {};
var RHumidityList = [];
var RHBoolean = [false,false,false,false,false];
var RHumidityData = new Array(12);;
var AATemperatureDict = {};
var AATemperatureList = [];
var AABoolean = [false,false,false,false,false];
var AATemperatureData = new Array(12);;

var checkGetCity = false;

var trial = [0, 0, ,0 ,0, 0];

var SO2Dict = {};
var SO2List = []; 
var SO2Boolean = [false,false,false,false,false];
var SO2YearAverage = [0, 0, 0, 0, 0];
var SO2Data = new Array(12);;

var NO2Dict = {};
var NO2List = []; 
var NO2Boolean = [false,false,false,false,false];
var NO2YearAverage = [0, 0, 0, 0, 0];
var NO2Data = new Array(12);;

var O3Dict = {};
var O3List = []; 
var O3Boolean = [false,false,false,false,false];
var O3YearAverage = [0, 0, 0, 0, 0];
var O3Data = new Array(12);;

var PM10Dict = {};
var PM10List = []; 
var PM10Boolean = [false,false,false,false,false];
var PM10YearAverage = [0, 0, 0, 0, 0];
var PM10Data = new Array(12);;

var PM25Dict = {};
var PM25List = []; 
var PM25Boolean = [false,false,false,false,false];
var PM25YearAverage = [0, 0, 0, 0, 0];
var PM25Data = new Array(12);;

var sulfate25Dict = {};
var sulfate25List = []; 
var sulfate25Boolean = [false,false,false,false,false];
var sulfate25Data = new Array(12);;
var sulfate25 = 0;
var ammonium25Dict = {};
var ammonium25List = []; 
var ammonium25Boolean = [false,false,false,false,false];
var ammonium25Data = new Array(12);;
var ammonium25 = 0;
var totalNitrate25Dict = {};
var totalNitrate25List = []; 
var totalNitrate25Boolean = [false,false,false,false,false];
var totalNitrate25Data = new Array(12);;
var totalNitrate25=0;
var EC25Dict = {};
var EC25List = []; 
var EC25Boolean = [false,false,false,false,false];
var EC25Data = new Array(12);;
var EC25=0;
var OC25Dict = {};
var OC25List = []; 
var OC25Boolean = [false,false,false,false,false];
var OC25Data = new Array(12);;
var OC25=0;

var sulfate10Dict = {};
var sulfate10List = []; 
var sulfate10Boolean = [false,false,false,false,false];
var sulfate10Data = new Array(12);;
var sulfate10 = 0;
var ammonium10Dict = {};
var ammonium10List = []; 
var ammonium10Boolean = [false,false,false,false,false];
var ammonium10Data = new Array(12);;
var ammonium10 = 0;
var totalNitrate10Dict = {};
var totalNitrate10List = []; 
var totalNitrate10Boolean = [false,false,false,false,false];
var totalNitrate10Data = new Array(12);;
var totalNitrate10=0;
var EC10Dict = {};
var EC10List = []; 
var EC10Boolean = [false,false,false,false,false];
var EC10Data = new Array(12);;
var EC10=0;
var OC10Dict = {};
var OC10List = []; 
var OC10Boolean = [false,false,false,false,false];
var OC10Data = new Array(12);;
var OC10=0;

var cityName=0;
var stateName=0;
var areaCode=0;

var EPAKey = "aquagazelle78"

setupTabs();
var meteoInterval = setInterval(meteodraw, 5000);
var SO2Interval = setInterval(SO2DrawMonth, 5000);
var SO2AverageInterval = setInterval(SO2DrawYear, 5000);
var NO2Interval = setInterval(NO2DrawMonth, 5000);
var NO2AverageInterval = setInterval(NO2DrawYear, 5000);
var O3Interval = setInterval(O3DrawMonth, 5000);
var O3AverageInterval = setInterval(O3DrawYear, 5000);
var PM10Interval = setInterval(PM10DrawMonth, 5000);
var PM10AverageInterval = setInterval(PM10DrawYear, 5000);
var PM25Interval = setInterval(PM25DrawMonth, 5000);
var PM25AverageInterval = setInterval(PM25DrawYear, 5000);
var PM25PieInterval = setInterval(PM25PieDraw, 5000);
// var PM10PieInterval = setInterval(PM10PieDraw, 5000);


function clearValue() {
    document.getElementById("weather-data").innerHTML="";
    document.getElementById("Meteorological").innerHTML="";
    document.getElementById("AQIdata").innerHTML="";
    document.getElementById("weather-atlas").innerHTML="";
    document.getElementById("criteria").innerHTML="";
    document.getElementById("weather-data").innerHTML="";
}

function getWeather(city){
    cityName = city;
	if (city) {
        OutdoorTempData = new Array(12);
        RHumidityData = new Array(12);
        AATemperatureData = new Array(12);
        SO2Data = new Array(12);
        O3Data = new Array(12);
        PM25Data = new Array(12);
        PM10Data = new Array(12);
        NO2Data = new Array(12);
        sulfate25Data = new Array(12);
        totalNitrate25 = new Array(12);
        ammonium25Data = new Array(12);
        EC25Data = new Array(12);
        OC25Data = new Array(12);
        // meteoInterval = setInterval(meteodraw, 5000);
        // SO2Interval = setInterval(SO2Draw, 5000);
        // NO2Interval = setInterval(NO2Draw, 5000);
        // O3Interval = setInterval(O3Draw, 5000);
        // PM10Interval = setInterval(PM10Draw, 5000);
        // PM25Interval = setInterval(PM25Draw, 5000);
        // PM25PieInterval = setInterval(PM25PieDraw, 5000);
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (this.status==200 && this.readyState==4) {
			var formattedData=formatWeather(JSON.parse(xhr.responseText));
			document.getElementById("weather-data").innerHTML=formattedData;
		}
	};
    xhr.open("GET","http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=d610395e85b50074b834a0234b0776db");
    xhr.send();
  }
  else{
  	var error='<div class="alert alert-danger alert-dismissible text-center" role="alert">';
		error+='<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		error+='You must enter a city name!</div>';
	document.getElementById('error').innerHTML=error;
  }
  console.log("Get weather done");
  return 0;
}

function formatWeather(data){
	return "<h2>Current Weather for " + data.name + ", " + data.sys.country + "</h2>" + 
			"<p>Weather: " + data.weather[0].main+ "</p>" + 
			"<p>Weather Description: " + data.weather[0].description +"<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'/>" + "</p>" + 
			"<p>Temperature: " + data.main.temp + "&deg;C</p>" + 
			"<p>Pressure: " + data.main.pressure + "hPa</p>" + 
			"<p>Humidity: " + data.main.humidity + "%</p>" + 
			"<p>Min Temperature: " + data.main.temp_min + "&deg;C</p>" + 
			"<p>Max Temperature: " + data.main.temp_max + "&deg;C</p>" + 
			"<p>Wind Speed: " + data.wind.speed + "m/s</p>" +
    "<p style='font-size: 10px;'>source from <a target='_blank' style='color: black;' href='http://openweathermap.org'>OpenWeatherMap (http://openweathermap.org)</a></p>";
}

function capitalizeLetter(str){
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

function decapitalizeLetter(str){
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toLowerCase() + str[i].substr(1);
    }
    return str.join(" ");
}

function getAQI(city){
	if (city) {
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (this.status==200 && this.readyState==4) {
            var formattedAQI=formatAQI(JSON.parse(xhr.responseText));
            document.getElementById("AQIdata").innerHTML=formattedAQI;
		}
	};
    xhr.open("GET","http://api.waqi.info/feed/" + city + "/?token=e8f352d31d2758c074b786eb1d65a1ace5ec0903");
    xhr.send();
    }
    else{
        var error='<div class="alert alert-danger alert-dismissible text-center" role="alert">';
          error+='<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
          error+='You must enter a city name!</div>';
      document.getElementById('error').innerHTML=error;
    }
    console.log("Get AQI done")
    return 0;
}

function formatAQI(result){
    console.log(result);
    var pm25 = result.data.iaqi.pm25;
    var pm10 = result.data.iaqi.pm10;
    var o3 = result.data.iaqi.o3;
    var no2 = result.data.iaqi.no2;
    var so2 = result.data.iaqi.so2;
    var co = result.data.iaqi.co;

    if ( pm25 == undefined ){
        pm25 = "-";
    }
    else{
        pm25 = pm25.v;
    }
    if ( pm10 == undefined ){
        pm10 = "-";
    }
    else{
        pm10 = pm10.v;
    }
    if ( o3 == undefined ){
        o3 = "-";
    }
    else{
        o3 = o3.v;
    }
    if ( no2 == undefined ){
        no2 = "-";
    }
    else{
        no2 = no2.v;
    }
    if ( so2 == undefined ){
        so2 = "-";
    }
    else{
        so2 = so2.v;
    }
    if ( co == undefined ){
        co = "-";
    }
    else{
        co = co.v;
    }

    return "<br><br><p>PM 2.5 <a style='opacity: 0.5;'>AQI</a>: " + pm25 + 
        "</p><p>PM 10 <a style='opacity: 0.5;'>AQI</a>: " + pm10 + "</p><p>O3 <a style='opacity: 18;'>AQI</a>: " + o3 + "</p>" +
        "<p>NO2 <a style='opacity: 0.5;'>AQI</a>: " + no2 + "</p><p>SO2 <a style='opacity: 0.5;'>AQI</a>: " + so2 + "</p>" + 
        "<p>CO <a style='opacity: 0.5;'>AQI</a>: " + co + "</p>" +
        "<p style='font-size: 10px;'>source from <a target='_blank' style='color: black;' href='http://api.waqi.info'>AQICn (http://api.waqi.info)</a></p>" +
        "<p><a target='_blank' style='color: black;' href='https://airnow.gov/index.cfm?action=airnow.calculator'>AQI Calculator</a></p>"+
        "<p><a target='_blank' style='color: black;' href='https://airnow.gov/index.cfm?action=aqi_brochure.index '>AQI Introduction</a></p>";
}



function checkCity() {
    if (checkGetCity == false) {
        console.log("reloading page");
        location.reload();
    }
}

function cityValue(name){
    setTimeout(checkCity, 30000);
    console.log("Enter city function");
    name = decapitalizeLetter(name);
    cityName = capitalizeLetter(name);
	if (cityName) {
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (this.status==200 && this.readyState==4) {
            var cityCode=getCityCode(JSON.parse(xhr.responseText), cityName);
            city();
            areaCode = cityCode;
            console.log("cityCode = " + cityCode);
            var str =  "<img style= 'display: block;margin-left: auto;margin-right: auto;width: 50%;' border='0' alt='Average min and max temperatures in Minneapolis, United States of America'  src='https://weather-and-climate.com/uploads/average-temperature-united-states-of-america-" + name.replace(" ", "-") + ".png'><br><div style= 'text-align:center;'><a href='https://weather-and-climate.com/average-monthly-min-max-Temperature,Minneapolis,United-States-of-America'>(https://weather-and-climate.com/average-monthly-min-max-Temperature," + cityName.replace(" ", "-") + ",United-States-of-America)</a></div><br><br>" +
            "<img style= 'display: block;margin-left: auto;margin-right: auto;width: 50%;' border='0' alt='Average relative humidity in  Minneapolis, United States of America' src='https://weather-and-climate.com/uploads/average-relative-humidity-united-states-of-america-" + name.replace(" ", "-") + ".png'><br><div style='text-align:center;'><a href='https://weather-and-climate.com/average-monthly-Humidity-perc,Minneapolis,United-States-of-America'>(https://weather-and-climate.com/average-monthly-Humidity-perc," + cityName.replace(" ", "-") + ",United-States-of-America)</a></div>";
            document.getElementById("weather-and-climate").innerHTML = str;
            console.log("Calling PlotGraph");
            // weatherAtlas();
            plotGraph(cityCode);
            console.log(areaCode);
        }
	};

    xhr.open("GET","https://aqs.epa.gov/data/api/list/cbsas?email=lee02305@umn.edu&key=" + EPAKey);
	xhr.send();
  }
  else{
  	var error='<div class="alert alert-danger alert-dismissible text-center" role="alert">';
		error+='<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		error+='You must enter a city name!</div>';
	document.getElementById('error').innerHTML=error;
  }
  return areaCode;
}

function city() {
    checkGetCity = true;
}

function getCityCode(data, city){
	for (var i = 0; i < data.Data.length; i++) {
        if (data.Data[i].value_represented.includes(city)){
            return data.Data[i].code;
        }
	}
	return areaCode;
}

// function plotNO2Graph(paramCode, areaCode){
    
//     monthlyDataValue(paramCode, areaCode);
    
// }

function getAverage(data) {
    var result = 0;
    for (var i = 0; i < data.length; i++) {
        result += data[i];
    }
    return result;
}


function plotGraph(areaCode){
    setDict(OutdoorTempDict);
    setDict(RHumidityDict);
    setDict(AATemperatureDict);
    setDict(SO2Dict);
    setDict(NO2Dict);
    setDict(O3Dict);
    setDict(PM10Dict);
    setDict(PM25Dict);
    setDict(sulfate25Dict);
    setDict(ammonium25Dict);
    setDict(totalNitrate25Dict);
    setDict(EC25Dict);
    setDict(OC25Dict);

    getMonthlyData(areaCode, "62101", OutdoorTempData, OutdoorTempDict, OutdoorTempList, OT, trial);
    setTimeout(() => {
        getMonthlyData(areaCode, "62201", RHumidityData, RHumidityDict, RHumidityList, RH, trial);
    }, 5000);
    setTimeout(() => {
        getMonthlyData(areaCode, "68105", AATemperatureData, AATemperatureDict, AATemperatureList, AA, trial);
    }, 10000);
    setTimeout(() => {
        getMonthlyData(areaCode, "42401", SO2Data, SO2Dict, SO2List, SO2, SO2YearAverage);
    }, 15000);
    setTimeout(() => {
        getMonthlyData(areaCode, "42602", NO2Data, NO2Dict, NO2List, NO2, NO2YearAverage);
    }, 20000);
    setTimeout(() => {
        getMonthlyData(areaCode, "44201", O3Data, O3Dict, O3List, O3, O3YearAverage);
    }, 40000);
    setTimeout(() => {
        getMonthlyData(areaCode, "81102", PM10Data, PM10Dict, PM10List, PM10, PM10YearAverage);
    }, 50000);
    setTimeout(() => {
        getMonthlyData(areaCode, "88101", PM25Data, PM25Dict, PM25List, PM25, PM25YearAverage);
    }, 60000);   
    setTimeout(() => {
        getMonthlyData(areaCode, "88403", sulfate25Data, sulfate25Dict, sulfate25List, sulfateFunc25, trial);
    }, 65000);   
    setTimeout(() => {
        getMonthlyData(areaCode, "88301", ammonium25Data, ammonium25Dict, ammonium25List, ammoniumFunc25, trial);
    }, 70000);   
    setTimeout(() => {
        getMonthlyData(areaCode, "88306", totalNitrate25Data, totalNitrate25Dict, totalNitrate25List, totalNitrateFunc25, trial);
    }, 75000);   
    setTimeout(() => {
        getMonthlyData(areaCode, "88381", EC25Data, EC25Dict, EC25List, ECFunc25, trial);
    }, 800000);   
    setTimeout(() => {
        getMonthlyData(areaCode, "88382", OC25Data, OC25Dict, OC25List, OCFunc25, trial);
    }, 85000);   
    
    // sulfate10Ave(areaCode);
    // ammonium10Ave(areaCode);
    // totallNitrate10Ave(areaCode);
    // EC10Ave(areaCode);
    // OC10Ave(areaCode);
    // plotPieChart10();

    // setDict(sulfate10Dict);
    // setDict(ammonium10Dict);
    // setDict(totalNitrate10Dict);
    // setDict(EC10Dict);
    // setDict(OC10Dict);
    // setTimeout(() => {
    //     getMonthlyData(areaCode, "82403", sulfate10Data, sulfate10Dict, sulfate10List, sulfateFunc10);
    // }, 1000);   
    // setTimeout(() => {
    //     getMonthlyData(areaCode, "82301", ammonium10Data, ammonium10Dict, ammonium10List, ammoniumFunc10);
    // }, 5000);   
    // setTimeout(() => {
    //     getMonthlyData(areaCode, "82306", totalNitrate10Data, totalNitrate10Dict, totalNitrate10List, totalNitrateFunc10);
    // }, 10000);   
    // setTimeout(() => {
    //     getMonthlyData(areaCode, "82307", EC10Data, EC10Dict, EC10List, ECFunc10);
    // }, 15000);   
    // setTimeout(() => {
    //     getMonthlyData(areaCode, "82305", OC10Data, OC10Dict, OC10List, OCFunc10);
    // }, 20000);   

    return 0;
}

function AA(x) {
    AABoolean[x] = true;
}

function RH(x) {
    RHBoolean[x] = true;
}

function OT(x) {
    OTBoolean[x] = true;
}

function SO2(x) {
    SO2Boolean[x] = true;
}

function NO2(x) {
    NO2Boolean[x] = true;
}

function O3(x) {
    O3Boolean[x] = true;
}

function PM10(x) {
    PM10Boolean[x] = true;
}

function PM25(x) {
    PM25Boolean[x] = true;
}

function totalNitrateFunc25(x) {
    totalNitrate25Boolean[x] = true;
}

function sulfateFunc25(x) {
    sulfate25Boolean[x] = true;
}

function ammoniumFunc25(x) {
    ammonium25Boolean[x] = true;
}

function OCFunc25(x) {
    OC25Boolean[x] = true;
}

function ECFunc25(x) {
    EC25Boolean[x] = true;
}

function totalNitrateFunc10(x) {
    totalNitrate10Boolean[x] = true;
}

function sulfateFunc10(x) {
    sulfate10Boolean[x] = true;
}

function ammoniumFunc10(x) {
    ammonium10Boolean[x] = true;
}

function OCFunc10(x) {
    OC10Boolean[x] = true;
}

function ECFunc10(x) {
    EC10Boolean[x] = true;
}

function setDict(_type) {
    for (var i = 0; i < 12; i++) {
        _type[i] = {};
        var x = _type[i];
        x["count"] = 0;
        x["total"] = 0;
    }
    console.log(_type);
}

function getMonthlyData(areaCode, param, output, dict, list, boolData, yearAverage) {
    var xhr = list;
    var k = 0;
    for (var j = 4; j <= 8; j++) {
        (function(k, j){
            xhr[k] = new XMLHttpRequest();
            var date = "&bdate=201"+ j + "0101&edate=201"+ j + "1231&cbsa=";
            var url = "https://aqs.epa.gov/data/api/dailyData/byCBSA?email=lee02305@umn.edu&key="+ EPAKey +"&param=" + param + date + areaCode;
            console.log(url);
            xhr[k].open("GET", url);
            xhr[k].onreadystatechange = function(){
                if (xhr[k].readyState === 4 && xhr[k].status === 200){
                    var data = JSON.parse(xhr[k].responseText).Data;
                    var total = 0;
                    for(var h = 0; h < data.length; h++) {
                        var date = data[h].date_local
                        if (date.charAt(5) == 1) {
                            var value = 9 + parseInt(date.charAt(6));
                            dict[value]["count"] += 1;
                            dict[value]["total"] += data[h].arithmetic_mean;
                        }
                        else {
                            var value = parseInt(date.charAt(6)) - 1;
                            dict[value]["count"] += 1;
                            dict[value]["total"] += data[h].arithmetic_mean;
                        }    
                        total += data[h].arithmetic_mean;
                    }
                    yearAverage[j-4] = total / data.length;
                    for (var i = 0; i < 12; i++) {
                        output[i] = dict[i]["total"] / dict[i]["count"];
                    }
                    boolData(k);
                }
            };
            xhr[k].send();
        })(k, j);
        k++;
    }
}

function weatherAtlas(){
    stateName.replace(" ", "-");
    console.log(stateName);
    var str = "<h2>" + cityName + " Weather Atlas Link" + "</h2>" +
    "<br>" +
    "<a href='https://www.weather-atlas.com/en/" + stateName + "-usa/" + cityName + "-climate#humidity_relative' target='_blank'>Click here for Weather-Atlas for average humidity</a>" +
    "<br>" +
    "<a href='https://www.weather-atlas.com/en/" + stateName + "-usa/" + cityName + "-climate#temperature' target='_blank'>Click here for Weather-Atlas for average temperature</a>";
    document.getElementById("weather-atlas").innerHTML = str;
}

function andBool(x) {
    return x[0] && x[1] && x[2] && x[3] && x[4];
}

function meteodraw(){
    meteoBool = andBool(AABoolean) && andBool(RHBoolean) && andBool(OTBoolean);    
    console.log(AABoolean);
    console.log(RHBoolean);
    console.log(OTBoolean);
    
    var trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        y: OutdoorTempData,
        type: 'scatter',
        name: 'Outdoor Temperature',
        yaxis: 'y2',
    };
    
    var trace2 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        y: RHumidityData,
        type: 'scatter',
        name: 'Relative Humidity',
    };
    
    var trace3 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        y: AATemperatureData,
        type: 'scatter',
        name: 'Average Ambient Temperature',
        yaxis: 'y2',
    };
    
    var data = [trace1, trace2, trace3];
    
    var layout = {
        //        width: 800,
        title: {
            text:'Meteorological data for ' + cityName,
            font: {
                family: 'Courier New, monospace',
                size: 24
            },
            xref: 'paper',
            x: 0.05,
        },
        xaxis: {
            dtick: 1,
            title: {
                text: 'Months',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: 'Relative Humidity',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        yaxis2: {
            title: 'Degree Fahrenheit',
            titlefont: {color: '#d62728'},
            tickfont: {color: '#d62728'},
            overlaying: 'y',
            side: 'right',
        },
        
    };
    
    var config = {responsive: true};

    Plotly.newPlot('Meteorological', data, layout, config);
    

    if (meteoBool) {
        clearInterval(meteoInterval);
    }
}


function setupTabs() {
    var str2 =  "<h2>Historical Pollutant</h2>" +
            "<h3>1. Criteria </h3>" +
            "<div class='container-fluid'>" +
                "<div class='row'>" +
                    "<div class='col-lg-10'>" +
                        "<div class='panel panel-default'>" +
                            "<div class='panel-body' id='panel-body'>" +
                                "<ul class='nav nav-tabs'>" +
                                    "<li class='active'><a href='#a' data-toggle='tab'>SO2</a></li>" +
                                    "<li><a href='#b' data-toggle='tab'>NO2</a></li>" +
                                    "<li><a href='#c' data-toggle='tab'>O3</a></li>" +
                                    "<li><a href='#d' data-toggle='tab'>PM 10</a></li>" +
                                    "<li><a href='#e' data-toggle='tab'>PM 2.5</a></li>" +
                                "</ul>" +
                                "<div class='tab-content'>" +
                                    "<div id='a' class='tab-pane active' style='z-index:-1;'>" +
                                    "</div>" +
                                    "<div id='b' class='tab-pane' style='z-index:-1;'>" +
                                    "</div>" +
                                    "<div id='c' class='tab-pane' style='z-index:-1;'>" +
                                    "</div>" +
                                    "<div id='d' class='tab-pane' style='z-index:-1;'>" +
                                    "</div>" +
                                    "<div id='e' class='tab-pane' style='z-index:-1;'>" +
                                    "</div>" +
                                "</div>" + 
                            "</div>" +
                        "</div>" +
                        "<div class='panel panel-default'>" +
                            "<div class='panel-body' id='panel-body'>" +
                                "<ul class='nav nav-tabs'>" +
                                    "<li class='active'><a href='#aa' data-toggle='tab'>SO2</a></li>" +
                                    "<li><a href='#bb' data-toggle='tab'>NO2</a></li>" +
                                    "<li><a href='#cc' data-toggle='tab'>O3</a></li>" +
                                    "<li><a href='#dd' data-toggle='tab'>PM 10</a></li>" +
                                    "<li><a href='#ee' data-toggle='tab'>PM 2.5</a></li>" +
                                "</ul>" +
                                "<div class='tab-content'>" +
                                    "<div id='aa' class='tab-pane active' style='z-index:-1;'>" +
                                    "</div>" +
                                    "<div id='bb' class='tab-pane' style='z-index:-1;'>" +
                                    "</div>" +
                                    "<div id='cc' class='tab-pane' style='z-index:-1;'>" +
                                    "</div>" +
                                    "<div id='dd' class='tab-pane' style='z-index:-1;'>" +
                                    "</div>" +
                                    "<div id='ee' class='tab-pane' style='z-index:-1;'>" +
                                    "</div>" +
                                "</div>" + 
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" ;
            document.getElementById("criteria").innerHTML = str2;
}

function SO2DrawMonth() {
    meteoBool = andBool(SO2Boolean);
    console.log(SO2Boolean);
    var trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        y: SO2Data,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Months',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('a', [trace1], layout, config);

    if (meteoBool) {
        clearInterval(SO2Interval);
    }
}

function SO2DrawYear() {
    meteoBool = andBool(SO2Boolean);
    console.log(SO2Boolean);
    var trace1 = {
        x: [2014, 2015, 2016, 2017, 2018],
        y: SO2YearAverage,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Year',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('aa', [trace1], layout, config);

    if (meteoBool) {
        clearInterval(SO2AverageInterval);
    }
}

function NO2DrawMonth() {
    meteoBool = andBool(NO2Boolean);
    console.log(NO2Boolean);
    var trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        y: NO2Data,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Months',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('b', [trace1], layout, config);
    if (meteoBool) {
        clearInterval(NO2Interval);
    }
}

function NO2DrawYear() {
    meteoBool = andBool(NO2Boolean);
    console.log(NO2Boolean);
    var trace1 = {
        x: [2014, 2015, 2016, 2017, 2018],
        y: NO2YearAverage,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Year',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('bb', [trace1], layout, config);

    if (meteoBool) {
        clearInterval(NO2AverageInterval);
    }
}

function O3DrawMonth() {
    meteoBool = andBool(O3Boolean);
    console.log(O3Boolean);
    var trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        y: O3Data,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Months',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('c', [trace1], layout, config);
    if (meteoBool) {
        clearInterval(O3Interval);
    }
}

function O3DrawYear() {
    meteoBool = andBool(O3Boolean);
    console.log(O3Boolean);
    var trace1 = {
        x: [2014, 2015, 2016, 2017, 2018],
        y: O3YearAverage,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Year',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('cc', [trace1], layout, config);

    if (meteoBool) {
        clearInterval(O3AverageInterval);
    }
}

function PM10DrawMonth() {
    meteoBool = andBool(PM10Boolean);
    console.log(PM10Boolean);
    var trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        y: PM10Data,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Months',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('d', [trace1], layout, config);
    if (meteoBool) {
        clearInterval(PM10Interval);
    }
}

function PM10DrawYear() {
    meteoBool = andBool(PM10Boolean);
    console.log(PM10Boolean);
    var trace1 = {
        x: [2014, 2015, 2016, 2017, 2018],
        y: PM10YearAverage,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Year',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('dd', [trace1], layout, config);

    if (meteoBool) {
        clearInterval(PM10AverageInterval);
    }
}

function PM25DrawMonth() {
    meteoBool = andBool(PM25Boolean);
    console.log(PM25Boolean);
    var trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        y: PM25Data,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Months',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('e', [trace1], layout, config);
    if (meteoBool) {
        clearInterval(PM25Interval);
    }
}

function PM25DrawYear() {
    meteoBool = andBool(PM25Boolean);
    console.log(PM25Boolean);
    var trace1 = {
        x: [2014, 2015, 2016, 2017, 2018],
        y: PM25YearAverage,
        type: 'scatter',
    };

    var layout = {
        width: 800,
        xaxis: {
            dtick: 1,
            title: {
                text: 'Year',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                }
            },
        },
        
        yaxis: {
            title: '\u03BC'+'m/m3 conc.',
            titlefont: {color: '#1f77b4'},
            tickfont: {color: '#1f77b4'}
        },
        
    };

    var config = {responsive: true}

    Plotly.newPlot('ee', [trace1], layout, config);

    if (meteoBool) {
        clearInterval(PM25AverageInterval);
    }
}

function PM25PieDraw(){
    meteoBool1 = andBool(ammonium25Boolean);
    meteoBool2 = andBool(sulfate25Boolean);
    meteoBool3 = andBool(totalNitrate25Boolean);
    meteoBool4 = andBool(OC25Boolean);
    meteoBool5 = andBool(EC25Boolean);
    sulfate25 = getAverage(sulfate25Data);
    ammonium25 = getAverage(ammonium25Data);
    totalNitrate25 = getAverage(totalNitrate25Data);
    EC25 = getAverage(EC25Data);
    OC25 = getAverage(OC25Data);
    console.log(ammonium25Boolean);
    console.log(sulfate25Boolean);
    console.log(totalNitrate25Boolean);
    console.log(OC25Boolean);
    console.log(EC25Boolean);

    var data = [{
        values: [sulfate25, ammonium25, totalNitrate25, EC25, OC25],
        labels: ['Sulfate', 'Ammonium', 'total nitrate', 'EC', 'OC'],
        type: 'pie'
    }];
  
    var layout = {
        height: 400,
        width: 500
    };

    var config = {responsive: true};

    Plotly.newPlot('species25', data, layout, config);

    if (meteoBool1 && meteoBool2 && meteoBool3 && meteoBool4 && meteoBool5) {    
        clearInterval(PM25PieInterval);
    }
}

function PM10PieDraw(){
    meteoBool1 = andBool(ammonium10Boolean);
    meteoBool2 = andBool(sulfate10Boolean);
    meteoBool3 = andBool(totalNitrate10Boolean);
    meteoBool4 = andBool(OC10Boolean);
    meteoBool5 = andBool(EC10Boolean);
    sulfate10 = getAverage(sulfate10Data);
    ammonium10 = getAverage(ammonium10Data);
    totalNitrate10 = getAverage(totalNitrate10Data);
    EC10 = getAverage(EC10Data);
    OC10 = getAverage(OC10Data);
    console.log(ammonium10Boolean);
    console.log(ammonium10);
    console.log(sulfate10Boolean);
    console.log(sulfate10);
    console.log(totalNitrate10Boolean);
    console.log(totalNitrate10);
    console.log(OC10Boolean);
    console.log(OC10);
    console.log(EC10Boolean);
    console.log(EC10);
    

    var data = [{
        values: [sulfate10, ammonium10, totalNitrate10, EC10, OC10],
        labels: ['Sulfate', 'Ammonium', 'nitrate', 'EC', 'OC'],
        type: 'pie'
      }];
      
    var layout = {
        height: 400,
        width: 500
    };

    Plotly.newPlot('species10', data, layout);

    if (meteoBool1 && meteoBool2 && meteoBool3 && meteoBool4 && meteoBool5) {    
        clearInterval(PM10PieInterval);
    }
}