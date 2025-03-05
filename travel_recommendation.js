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
    debugger

    var beaches = xhr.response.beaches;
    var beachsDiv = document.getElementById('beaches');

    beaches.forEach(function(beach) {
        var beachDiv = document.createElement('div');
        beachDiv.classList.add('beach');

        var itemurl = document.createElement('img');
        itemurl.textContent = beach.imageUrl;

        var beachname = document.createElement('h2');
        beachname.textContent = beach.name;

        var description = document.createElement('p');
        description.textContent = beach.description;

        beachDiv.appendChild(itemurl);
        beachDiv.appendChild(beachname);
        beachDiv.appendChild(description);

        locationsDiv.appendChild(beachDiv);
    });
};

xhr.send();