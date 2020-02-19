fetch('https://api.spacexdata.com/v3/launches/past').then((response)=>{
  return response.json()
}).then((jsonArray) => {
console.log(jsonArray)

jsonArray.forEach((element) => {
console.log(element)
const dateUtc = element.launch_date_utc
const mydate = new Date(element.launch_date_unix * 1000)
const lokdate = mydate.toLocaleDateString("en-uk",{dateStyle: "full", timeStyle: "short", hour12: false})
console.log(lokdate)
const dateString = new Date(dateUtc)
const dateList = dateString.toLocaleDateString('sv-se', {weekday:'long'})
const timeLaunch = dateString.toLocaleTimeString('sv-se', {timeStyle: 'short'})
console.log(dateList)


document.getElementById('space').innerHTML += `<p>${element.flight_number} ||<span> ${element.mission_name} </span>|| ${element.rocket.rocket_name} || ${lokdate}`  
});
})