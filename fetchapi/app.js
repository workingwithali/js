let url = 'https://catfact.ninja/fact?max_length=140'
let ali = document.getElementById("hanan")
let butten = document.getElementById('btn')
async function Data() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  ali.innerHTML = data.fact;
}

butten.addEventListener("click",Data);
