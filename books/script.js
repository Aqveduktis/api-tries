fetch('https://anapioficeandfire.com/api/characters?page=2&pageSize=20').then((response)=>{
  return response.json()
}).then((json) => {
console.log(json)

const box = document.getElementById('book')
json.forEach((element) => {
console.log(element)
box.innerHTML += `<p>name: ${element.name}, title: ${element.titles[0]}</p>`
});
})