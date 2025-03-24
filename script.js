document.addEventListener('DOMContentLoaded', () => {
    // Function for switching between tabs
    function showTab(tabName) {
        const tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => {
            tab.style.display = 'none';
        });

        document.getElementById(tabName).style.display = 'flex';
    }
    const movies = 'Movies';
    const characters = 'Characters'
    //movies posters
    const filmPosters = {
        1: 'images/episode_1.jpg',  // Episode 1
        2: 'images/episode_2.jpg',  // Episode 2
        3: 'images/episode_3.jpg',  // Episode 3
        4: 'images/episode_4.jpg',  // Episode 4
        5: 'images/episode_5.jpg',  // Episode 5
        6: 'images/episode_6.jpg',  // Episode 6
    };
    //characters posters
    const characterPosters = {
        "Luke Skywalker": { url: 'images/characters/luke_skywalker.jpg', name: 'Luke Skywalker' },
        "C-3PO": { url: 'images/characters/c3po.jpg', name: 'C-3PO' },
        "R2-D2": { url: 'images/characters/r2d2.png', name: 'R2-D2' },
        "Darth Vader": { url: 'images/characters/darth_wader.png', name: 'Darth Vader' },
        "Leia Organa": { url: 'images/characters/leia_organa.jpg', name: 'Leia Organa' },
        "Owen Lars": { url: 'images/characters/owen_lars.jpg', name: 'Owen Lars' },
        "R5-D4": { url: 'images/characters/r5d4.png', name: 'R5-D4' },
        "Biggs Darklighter": { url: 'images/characters/biggs_darklighter.jpg', name: 'Biggs Darklighter' },
        "Obi-Wan Kenobi": { url: 'images/characters/obi_wan_kenobi.jpg', name: 'Obi-Wan Kenobi' },
    };

    // Loading movies data
    function loadmovies() {
        document.getElementById('loading-movies').style.display = 'flex';
        setTimeout(() => {
            fetch('https://swapi.dev/api/films/')
                .then(response => response.json())
                .then(data => {
                    const moviesList = document.getElementById('movies-list');
                    moviesList.innerHTML = '';
                    data.results.sort((a, b) => a.episode_id - b.episode_id);

                    if (data.results && data.results.length > 0) {
                        document.getElementById('loading-movies').style.display = 'none';
                        data.results.forEach(film => {
                            const posterUrl = filmPosters[film.episode_id]
                            const div = document.createElement('div');
                            div.classList.add('film');
                            div.innerHTML = `
                <h3 class="text-center">${film.title}</h3>
                ${posterUrl ? `<img src="${posterUrl}" alt="${film.title} Poster" class="film-cover" />` : ''}
                <p><strong>Episode:</strong> ${film.episode_id}</p>
                <button class="show-more-btn">More Info</button>
                
                        <div class="more-info" style="display: none;">
                            <!-- Additional movie info will be added here -->
                        </div>
              `;
                            // Add event listener for 'More Info' button
                            const showMoreBtn = div.querySelector('.show-more-btn');
                            const moreInfoDiv = div.querySelector('.more-info');
                            showMoreBtn.addEventListener('click', () => {
                                // Toggle visibility of additional info
                                if (moreInfoDiv.style.display === 'none') {
                                    loadMovieDetails(film.url, moreInfoDiv);
                                    showMoreBtn.textContent = 'Less Info';
                                    moreInfoDiv.style.display = 'block';
                                } else {
                                    moreInfoDiv.style.display = 'none';
                                    showMoreBtn.textContent = 'More Info';
                                }
                            });
                            moviesList.appendChild(div);
                        });
                    } else {
                        document.getElementById('loading-movies').style.display = 'none'; // Hide loading
                        moviesList.innerHTML = '<p>No Movies available</p>';
                    }
                })
                .catch(error => console.error('Error loading movies:', error));
            //document.getElementById('loading').style.display = 'none';
        }, 500);
    }

    // Function to load detailed movie data when 'More Info' is clicked
    function loadMovieDetails(movieUrl, moreInfoDiv) {
        fetch(movieUrl)  // Perform GET request for detailed movie data
            .then(response => response.json())
            .then(data => {
                moreInfoDiv.innerHTML = `
                <p style="text-align:left"><strong>Director:</strong> ${data.director}</p>
                <p style="text-align:left"><strong>Producer:</strong> ${data.producer}</p>
                <p style="text-align:left"><strong>Release Date:</strong> ${data.release_date}</p>
                <p style="text-align:justify"><strong>Description:</strong> ${data.opening_crawl}</p>
            `;
            })
            .catch(error => console.error('Error loading movie details:', error));
    }

    // Loading characters data
    function loadCharacters() {
        document.getElementById('loading-characters').style.display = 'flex';
        setTimeout(() => {
            fetch('https://swapi.dev/api/people/')
                .then(response => response.json())
                .then(data => {
                    const charactersList = document.getElementById('characters-list');
                    charactersList.innerHTML = '';
                    if (data.results && data.results.length > 0) {
                        document.getElementById('loading-characters').style.display = 'none'; // Hide loading
                        const characterToRemove = 'Beru Whitesun Lars'.toLowerCase().trim();
                        data.results.forEach(character => {
                            const characterName = character.name.trim().toLowerCase();
                            if (characterName === characterToRemove) {
                                return;
                            }
                            const poster = characterPosters[character.name] ? characterPosters[character.name].url : 'default_image.jpg';
                            const div = document.createElement('div');
                            div.classList.add('character');
                            div.innerHTML = `
                <h3>${character.name}</h3>
                <img src="${poster}" alt="${character.name}" class="film-cover" />
                <button class="show-more-btn">More Info</button>
                        <div class="more-info" style="display: none;">
                            <!-- Additional info will be added here -->
                        </div>
              `;
                            // Add event listener for 'More Info' button
                            const showMoreBtn = div.querySelector('.show-more-btn');
                            const moreInfoDiv = div.querySelector('.more-info');
                            showMoreBtn.addEventListener('click', () => {
                                // Toggle visibility of additional info
                                if (moreInfoDiv.style.display === 'none') {
                                    loadCharacterDetails(character.url, moreInfoDiv);
                                    showMoreBtn.textContent = 'Less Info';
                                    moreInfoDiv.style.display = 'block';
                                } else {
                                    moreInfoDiv.style.display = 'none';
                                    showMoreBtn.textContent = 'More Info';
                                }
                            });
                            charactersList.appendChild(div);
                        });
                    } else {
                        document.getElementById('loading-characters').style.display = 'none'; // Hide loading
                        charactersList.innerHTML = '<p>No Characters available</p>';
                    }
                })
                .catch(error => console.error('Error loading characters:', error));
        }, 500);
    }
    // Function to load detailed character data when 'More Info' is clicked
    function loadCharacterDetails(characterUrl, moreInfoDiv) {
        fetch(characterUrl)  // Perform GET request for detailed character data
            .then(response => response.json())
            .then(data => {
                console.log(data);
                moreInfoDiv.innerHTML = `
                    <p class="info"><strong>Mass:</strong> ${data.mass}</p>
                    <p class="info"><strong>Birth Year:</strong> ${data.birth_year}</p>
                    <p class="info"><strong>Height:</strong> ${data.height}</p>
                    <p class="info"><strong>Hair Color:</strong> ${data.hair_color}</p>
                    <p class="info"><strong>Skin Color:</strong> ${data.skin_color}</p>
                    <p class="info"><strong>Eye Color:</strong> ${data.eye_color}</p>
                    <p class="info"><strong>Gender:</strong> ${data.gender}</p>
                `;
            })
            .catch(error => console.error('Error loading character details:', error));
    }

    // Initial data load (movies)
    loadmovies();
    showTab('movies');
    titleTextChanger(movies);

    // Add event listeners for tabs
    const moviesTab = document.getElementById('movies-tab');
    const charactersTab = document.getElementById('characters-tab');

    moviesTab.addEventListener('click', () => {
        showTab('movies');
        titleTextChanger(movies);
        loadmovies();
    });

    charactersTab.addEventListener('click', () => {
        showTab('characters');
        titleTextChanger(characters);
        loadCharacters();
    });

    //titlechange function
    function titleTextChanger(tabName) {
        const wordElement = document.getElementById('word');
        wordElement.textContent = tabName;
    };
});


