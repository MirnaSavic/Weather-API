// 5LC8HB6RYZD42E9KGDTRGB8BC - API KEY
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/chicago/?key=5LC8HB6RYZD42E9KGDTRGB8BC

const api_key = "5LC8HB6RYZD42E9KGDTRGB8BC"
const base_url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
const city = document.getElementById('city-input')

const searchBtn = document.getElementById("search")
const cityName = document.getElementById("city-name")
const description = document.getElementById("weather-type")
const temperature = document.getElementById("temp")
const minimalTemp = document.getElementById("min-temp")
const maximalTemp = document.getElementById("max-temp")


const searchCity = () => {
    fetch(`${base_url}${city.value}/?key=${api_key}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.address)
        console.log(data.description)
        console.log(data.days[0].temp)
        console.log(data.days[0].tempmin)
        console.log(data.days[0].tempmax)
        let database = data
        showData(database)

    })
    .catch((error) => {
        console.log("Something went wrong", error)

    })
        
    
       
}

const showData = (info) => {

    cityName.innerHTML = `${info.address}`

  
  description.innerHTML = `${info.currentConditions.conditions}`

 
  temperature.innerHTML = `${info.days[0].temp}`

  
  minimalTemp.innerHTML = `${info.days[0].tempmin}`

  
  maximalTemp.innerHTML = `${info.days[0].tempmax}`

}


searchBtn.onclick = () => searchCity()
