
//
var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var desc = document.querySelector("#description");
var tem = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var hum = document.querySelector('#hum');
apik = 'dcfbc07f7353f137ee1f861e15ce6041'
var dis = document.querySelector('#display');
var imageElement = document.getElementsByTagName('img')[0];
dis.style.display = "none";

var top = document.querySelector("#top_container");


function convertion(val){
    return (val -273).toFixed(3)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>{
        var namevalue = data['name']
        var descrip = data['weather']['0']['description']
        var temparature = data['main']['temp']
        var wndspeed = data['wind']['speed']
        var humid = data['main']['humidity']

        console.log(data);

        city.innerHTML = `<span>${namevalue}</span>`
        tem.innerHTML = `<span>${Math.round(convertion(temparature))}&deg;c</span>`
        desc.innerHTML = `<span>${descrip}</span>`
        wind.innerHTML = `Wind Speed<br><span>${wndspeed}km/h<span>`
        hum.innerHTML = `<span>${humid}</span>% <br>Humidity`
        dis.style.display = "block";
    

        if(data.weather[0].main == 'Rain'){
          imageElement.src = 'rain.gif';
        }
        else if(data.weather[0].main == 'Clouds'){
          imageElement.src = 'cloudy.png';
        }
        else if(data.weather[0].main == "Haze"){
          imageElement.src = 'wind-power.gif';
        }
        else if(data.weather[0].main == "Clear"){
          imageElement.src = 'sun.png';
        }
        else if(data.weather[0].main == "Mist"){
          imageElement.src = 'haze.png';
        }

       
       
    })

    .catch(err => alert('You Enter Wrong CityName'))
})

const body = document.getElementsByTagName('body')[0]; 

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg"];
let cindex = 0;

function changeBackgroundImage() {
  body.style.backgroundImage = `url(${images[cindex]})`;
  cindex = (cindex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000);





  
 


