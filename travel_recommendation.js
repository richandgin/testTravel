var xhr = new XMLHttpRequest();
var url = './travel_recommendation_api.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

/*xhr.onload = function(cmdDEMO) {
    debugger
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var detailsHeader = document.createElement('h3');
        detailsHeader.textContent = 'Key Details';

        var detailslst = document.createElement('ul');
        article.key_details.forEach(function(detail) {
            var listItem = document.createElement('li');
            listItem.textContent = detail;
            detailslst.appendChild(listItem);
        });

        var impFactorsHeader = document.createElement('h3');
        impFactorsHeader.textContent = 'Important Factors:';

        var factorsList = document.createElement('ul');
        article.important_factors.forEach(function(factor) {
            var listItem = document.createElement('li');
            listItem.textContent = factor;
            factorsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(detailsHeader);
        articleDiv.appendChild(detailslst);
        articleDiv.appendChild(impFactorsHeader);
        articleDiv.appendChild(factorsList);

        articlesDiv.appendChild(articleDiv);
    });
};
*/

function cmdSearch() {
    var searchStr = document.getElementById('conditionInput').value;
    lowerCasesearchStr = searchStr.toLowerCase();
    /*alert('Search for: ' + lowerCasesearchStr);*/

    var responseData = JSON.parse(xhr.responseText);
    /*var beaches = xhr.response.beaches;*/
    /*var beaches = xhr.response.searchStr;*/
    var beaches = responseData.searchStr;
    var locationsDiv = document.getElementById('locations');

  

    beaches.forEach(function(beach) {
        var beachDiv = document.createElement('div');
        /*beachDiv.classList.add('beach');  */
        beachDiv.classList = "card-info"; 
        beachDiv.style = "width:100%";

        var itemurl = document.createElement('img');
        itemurl.src = beach.imageUrl;
        itemurl.classList = "card-photo";

        var infoDiv = document.createElement('div');
        var beachname = document.createElement('p');
        beachname.textContent = beach.name;
        beachname.classList = "card-name";

        var description = document.createElement('p');
        description.textContent = beach.description;
        description.classList = "card-description";

        var newbutton = document.createElement('button');
        newbutton.textContent = "View";
        newbutton.id = "cmdViewItem";
        newbutton.classList = "card-button";

        debugger
        beachDiv.appendChild(itemurl);
        beachDiv.appendChild(infoDiv);
        beachDiv.appendChild(beachname);
        beachDiv.appendChild(description)
        beachDiv.appendChild(newbutton);

        locationsDiv.appendChild(beachDiv);
    });
};

function cmdClearSearch() {
    beachsDiv = null;
    locationsDiv = null;
}

xhr.send();