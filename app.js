var country = prompt("Enter the country name for stats!!!");

let stats = {
  getData: function (country) {
    fetch(
      `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query%20`
    )
      .then((response) => response.json())
      .then((res) => {
        this.display(res);
      });
  },
  display: (res) => {
    console.log(res);
    document.getElementById("flag").src = res.countryInfo.flag;
    document.getElementById("country").innerText = res.country;
    document.getElementById("cases").innerText = res.cases;
    document.getElementById("recovered").innerText = res.recovered;
    document.getElementById("critical").innerText = res.critical;
    document.getElementById("deaths").innerText = res.deaths;
    document.getElementById("todayCases").innerText = res.todayCases;
    document.getElementById("todayDeaths").innerText = res.todayDeaths;
    document.getElementById("todayRecovered").innerText = res.todayRecovered;
  },
  search: function () {
    this.getData(document.querySelector("#search-country").value);
  },
};

document.querySelector(".search button").addEventListener("click", () => {
  stats.search();
});

document.querySelector("#search-country").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    stats.search();
  }
});
stats.getData(country);
