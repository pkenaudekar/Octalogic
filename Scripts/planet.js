function showPlanets(id) {

    fetch(`https://swapi.co/api/planets/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            console.log("data", json)

            if (!json.name) {
                return;
            }

            const name = json.name;
            const diameter = json.diameter;
            var surface_water = json.surface_water;  

        //    const html = `
        //<ul class="character">
        //  <li class="unhabitable">Name: <a href="${json.url}" target="_blank">${name}</a></li>
        //  <li class="diameter">Diameter: ${diameter}</li>
        //  <li class="surface_water">Surface Water: ${surface_water}</li>
        //</ul>`
        //document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)

            if (Number(surface_water) < 5 || Number(surface_water) == NaN || surface_water == "unknown")  {
                const html = `
        <ul class="character">
          <li class="unhabitable">Name: <a href="${json.url}" target="_blank">${name}</a></li>
          <li class="diameter">Diameter: ${diameter}</li>
          <li class="surface_water">Surface Water: ${surface_water}</li>
        </ul>`
                document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)
            }
            else {
                const html = `
        <ul class="character">
          <li class="habitable">Name: <a href="${json.url}" target="_blank">${name}</a></li>
          <li class="diameter">Diameter: ${diameter}</li>
          <li class="surface_water">Surface Water: ${surface_water}</li>
        </ul>`
                document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)
            }            
      
      

    })
}

for (var i = 1; i <= 50; i++) {
  showPlanets(i)
}