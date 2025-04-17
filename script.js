document.addEventListener('DOMContentLoaded', () => {
    const filmPosters = {
        1: 'images/episode_1.jpg',
        2: 'images/episode_2.jpg',
        3: 'images/episode_3.jpg',
        4: 'images/episode_4.jpg',
        5: 'images/episode_5.jpg',
        6: 'images/episode_6.jpg',
    };

    const characterPosters = {
        "Luke Skywalker": 'images/characters/luke_skywalker.jpg',
        "C-3PO": 'images/characters/c3po.jpg',
        "R2-D2": 'images/characters/r2d2.png',
        "Darth Vader": 'images/characters/darth_wader.png',
        "Leia Organa": 'images/characters/leia_organa.jpg',
        "Owen Lars": 'images/characters/owen_lars.jpg',
        "R5-D4": 'images/characters/r5d4.png',
        "Beru Whitesun lars": 'images/characters/beru_lars.jpg',
        "Biggs Darklighter": 'images/characters/biggs_darklighter.jpg',
        "Obi-Wan Kenobi": 'images/characters/obi_wan_kenobi.jpg',
    };

    // States to track whether data has been loaded
    let moviesLoaded = false;
    let charactersLoaded = false;

    // Function to hide all tabs
    function hideTabs() {
        const tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => tab.style.display = 'none');
    }

    // Function to hide loading indicators
    function hideLoading() {
        document.getElementById('loading-movies').style.display = 'none';
        document.getElementById('loading-characters').style.display = 'none';
    }

    // Function to show a tab by name
    function showTab(tabName) {
        hideTabs();
        document.getElementById(tabName).style.display = 'flex';
    }

    // Function to clear data of a tab
    function clearTabData(tabName) {
        const listElement = document.getElementById(`${tabName}-list`);
        listElement.innerHTML = '';  // Clear the content of the tab
    }

    // Function to load data (movies or characters)
    function loadData(url, type, callback) {
        const loadingIndicatorId = `loading-${type}`;
        const listId = `${type}-list`;

        // Show loading indicator
        document.getElementById(loadingIndicatorId).style.display = 'flex';

        // Clear the list before loading new data
        clearTabData(type);

        // Set a delay before starting the request to show the loading indicator
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const listElement = document.getElementById(listId);
                    const results = type === 'movies' ? data.result.sort((a, b) => a.properties.episode_id - b.properties.episode_id) : data.results;

                    if (results && results.length > 0) {
                        results.forEach(item => callback(item, listElement));

                        if (type === 'movies') {
                            moviesLoaded = true;
                        } else if (type === 'characters') {
                            charactersLoaded = true;
                        }
                    } else {
                        listElement.innerHTML = `<p>No ${type.charAt(0).toUpperCase() + type.slice(1)} available</p>`;
                    }
                    document.getElementById(loadingIndicatorId).style.display = 'none';
                })
                .catch(error => console.error(`Error loading ${type}:`, error));
        }, 500); // Reduced delay before request
    }

    // Function to load movie data
    function loadMovies(film, listElement) {
        const posterUrl = filmPosters[film.properties.episode_id];
        const div = document.createElement('div');
        div.classList.add('film');
        div.innerHTML = `
            <h3 class="text-center">${film.properties.title}</h3>
            ${posterUrl ? `<img src="${posterUrl}" alt="${film.properties.title} Poster" class="film-cover" />` : ''}
            <p style="height: 40px"><strong>Episode:</strong> ${film.properties.title}</p>
            <button class="show-more-btn">More Info</button>
            <div class="more-info" style="display: none;"></div>
        `;
        div.querySelector('.show-more-btn').addEventListener('click', () => {
            const moreInfoDiv = div.querySelector('.more-info');
            const showMoreBtn = div.querySelector('.show-more-btn');
            if (moreInfoDiv.style.display === 'none') {
                loadMovieDetails(film.properties.url, moreInfoDiv);
                showMoreBtn.textContent = 'Less Info';
                moreInfoDiv.style.display = 'block';
            } else {
                moreInfoDiv.style.display = 'none';
                showMoreBtn.textContent = 'More Info';
            }
        });
        listElement.appendChild(div);
    }

    // Function to load character data
    function loadCharacter(character, listElement) {
        const poster = characterPosters[character.name] || 'default_image.jpg';
        const div = document.createElement('div');
        div.classList.add('character');
        div.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${poster}" alt="${character.name}" class="film-cover" />
            <button class="show-more-btn">More Info</button>
            <div class="more-info" style="display: none;"></div>
        `;
        div.querySelector('.show-more-btn').addEventListener('click', () => {
            const moreInfoDiv = div.querySelector('.more-info');
            const showMoreBtn = div.querySelector('.show-more-btn');
            if (moreInfoDiv.style.display === 'none') {
                loadCharacterDetails(character.url, moreInfoDiv);
                showMoreBtn.textContent = 'Less Info';
                moreInfoDiv.style.display = 'block';
            } else {
                moreInfoDiv.style.display = 'none';
                showMoreBtn.textContent = 'More Info';
            }
        });
        
        listElement.appendChild(div);
    }

    // Function to load movie details (more info)
    function loadMovieDetails(movieUrl, moreInfoDiv) {
        fetch(movieUrl)
            .then(response => response.json())
            .then(data => {
                moreInfoDiv.innerHTML = `
                    <p style="text-align:left"><strong>Director:</strong> ${data.result.properties.director}</p>
                    <p style="text-align:left"><strong>Producer:</strong> ${data.result.properties.producer}</p>
                    <p style="text-align:left"><strong>Release Date:</strong> ${data.result.properties.release_date}</p>
                    <p style="text-align:justify"><strong>Description:</strong> ${data.result.properties.opening_crawl}</p>
                `;
            })
            .catch(error => console.error('Error loading movie details:', error));
    }

    // Function to load character details (more info)
    function loadCharacterDetails(characterUrl, moreInfoDiv) {
        fetch(characterUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the data for debugging
                moreInfoDiv.innerHTML = `
                    <p style="text-align:left"><strong>Mass:</strong> ${data.result.properties.mass}</p>
                    <p style="text-align:left"><strong>Birth Year:</strong> ${data.result.properties.birth_year}</p>
                    <p style="text-align:left"><strong>Height:</strong> ${data.result.properties.height}</p>
                    <p style="text-align:left"><strong>Hair Color:</strong> ${data.result.properties.hair_color}</p>
                    <p style="text-align:left"><strong>Skin Color:</strong> ${data.result.properties.skin_color}</p>
                    <p style="text-align:left"><strong>Eye Color:</strong> ${data.result.properties.eye_color}</p>
                    <p style="text-align:left"><strong>Gender:</strong> ${data.result.properties.gender}</p>
                `;
            })
            .catch(error => console.error('Error loading character details:', error));
    }

    // Initial data loading (default tab: movies)
    loadData('https://swapi.tech/api/films/', 'movies', loadMovies);
    showTab('movies');

    // Event listeners for tab switches
    const moviesTab = document.getElementById('movies-tab');
    const charactersTab = document.getElementById('characters-tab');

    moviesTab.addEventListener('click', () => {
        showTab('movies');
        loadData('https://swapi.tech/api/films/', 'movies', loadMovies);
    });

    charactersTab.addEventListener('click', () => {
        showTab('characters');
        loadData('https://swapi.tech/api/people/', 'characters', loadCharacter);
    });
});







