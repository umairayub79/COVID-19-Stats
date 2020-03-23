const URL = "https://coronavirus-19-api.herokuapp.com/countries"
const list_element = document.getElementById("list");
let countries_array = [];



fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        document.querySelector(".container").append("Countries infected " + data.length);
        loadList(data)
    })

    function loadList(listData) {
            // Establish the array which acts as a data source for the list
           
            // Make the list
            listElement = document.createElement('ul')
            // Set up a loop that goes through the items in listItems one at a time
            numberOfListItems = listData.length;
        
            // Add it to the page
            document.getElementById('container').appendChild(listElement);
            
            for (i = 0; i < numberOfListItems; ++i) {
                // create an item for each one
                let listItem = document.createElement('li');
                const country = `<h2 class="country">${listData[i].country}</h2>`;
                const cases =   `<span>Total Cases : ${listData[i].cases}</span>`;
                const TodayCases =   `<span>Today Cases : ${listData[i].todayCases}</span>`;
                const deaths =  `<span class="deaths">Total Deaths : ${listData[i].deaths}</span>`;
                const TodayDeaths =  `<span class="deaths">Today Deaths : ${listData[i].todayDeaths}</span>`;
                // Add the item text
                listItem.innerHTML = country + cases + TodayCases + deaths + TodayDeaths;
        
                // Add listItem to the listElement
                listElement.appendChild(listItem);
            }
    }
    