console.log("Hello World")

var input = document.querySelector("#input")
var btn = document.querySelector("#btn")
var div = document.querySelector("#div")

btn.addEventListener("click" , () =>{
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=2254184c399348a39e1140251241911&q=${input.value}&aqi=no`)
    .then((res) => res.json() )
    .then((res) => {
        console.log(res);


        div.innerHTML = `
        
        <div>
        <img src="https:${res.current.condition.icon}" alt="" class="img">
        <h1>Temprature :${res.current.temp_c} </h1>
        <h2>Country : ${res.location.country}</h2>
        <h3>Name : ${res.location.name}</h3>
        <h4>Humidity : ${res.current.humidity}</h4>
        <h5>Last updated : ${res.current.last_updated}</h5>
        </div>
        `
        
    } )
    .catch((err) => {
        console.log(err);
        div.innerHTML = `
        <p>error</p>
        `
    })
    
    input.value = ""
})
