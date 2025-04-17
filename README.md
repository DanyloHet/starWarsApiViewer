# Star Wars API Viewer

This project is a web application that fetches and displays data about **Star Wars movies** and **characters** from the [Star Wars API (SWAPI)](https://www.swapi.tech/). The application allows users to switch between tabs to view a list of movies and characters, along with additional details such as descriptions and personal information.

## Features

- **Movies Tab**: Displays a list of movies with their titles, episode number, and a poster image. You can click "More Info" to get additional details about each movie.
- **Characters Tab**: Displays a list of characters from the Star Wars universe with their names, images, and basic information. Click "More Info" to view additional details about each character.
- **Responsive Design**: The layout adjusts to different screen sizes, ensuring a good experience on both desktop and mobile devices.
- **Loading Indicators**: While data is being fetched from the API, loading indicators are shown.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/DanyloHet/starWarsApiViewer.git

2. Open the index.html file in your browser.

You can either open the file directly or use a local server if you prefer.


## Project Structure
The project consists of the following files:

1. index.html: The main HTML file containing the structure of the webpage.

2. style.css: The CSS file responsible for the styling of the webpage.

3. script.js: The JavaScript file that handles the logic of fetching data, switching tabs, and displaying information.

4. images/: A folder containing images of the movie posters and character photos. These images are used to visually represent the movies and characters.


## Technologies Used
1. HTML5: The structure of the webpage.

2. CSS3: Styling and layout of the webpage, including responsive design and animations.

3. JavaScript: Logic to interact with the Star Wars API (SWAPI), load data dynamically, and handle user interactions.

4. Fetch API: Used to retrieve data from the SWAPI.

5. Event Listeners: For switching between tabs and loading data when the user interacts with the interface.


## How It Works
1. When the page loads, data about movies is fetched from the SWAPI and displayed in the Movies tab.

2. The user can click the Movies or Characters tab to toggle between the two.

3. The user can click the "More Info" button for each movie or character to view additional details such as director, producer, release date (for movies), and mass, height, hair color, and birth year (for characters).

4. The data is fetched dynamically from the SWAPI, and the content is displayed using JavaScript.


## API Endpoints Used
1. Movies: https://www.swapi.tech/api/films

Characters: https://www.swapi.tech/api/people


## Known Issues
1. The loading indicator is shown until the data is fully fetched and displayed. However, if there's a delay or an issue with the API, the user may experience a wait time.

2. Some characters may not have images available in the images/characters/ folder. A default image will be shown in such cases.

3. Limited Number of Characters Displayed:
Due to challenges in sourcing images for a more visually appealing display, only the first 10 characters from the API are loaded and displayed. The full list of characters is not retrieved for performance and image availability reasons.


## Future Improvements
Implementing a search feature to find specific characters or movies.

Adding more styling and animations for a better user experience.

Integrating more data from the SWAPI (e.g., starships, vehicles, species).

## Image Attributions


### Movies Posters:
1. **Episode I: The Phantom Menace**
   - **Image**: `images/episode_1.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/1darthvader/art/Star-Wars-Episode-I-The-Phantom-Menace-393717136)
   - **License**: Creative Commons Attribution-ShareAlike 3.0 License
   - **Attribution**: "Image by [1darthvader] from [www.deviantart.com]"

2. **Episode II: Attack of the Clones**
   - **Image**: `images/episode_2.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/1darthvader/art/Star-Wars-Episode-II-Attack-Of-The-Clones-391433253)
   - **License**: Creative Commons Attribution-ShareAlike 3.0 License
   - **Attribution**: "Image by [1darthvader] from [www.deviantart.com]"
3. **Episode III: Revenge of the Sith**
   - **Image**: `images/episode_3.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/1darthvader/art/Revenge-Of-The-Sith-389387023)
   - **License**: Creative Commons Attribution-ShareAlike 3.0 License
   - **Attribution**: "Image by [1darthvader] from [www.deviantart.com]"
4. **Episode IV:  A New Hope**
   - **Image**: `images/episode_4.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/1darthvader/art/Star-Wars-Episode-IV-A-New-Hope-396970257)
   - **License**: Creative Commons Attribution-ShareAlike 3.0 License
   - **Attribution**: "Image by [1darthvader] from [www.deviantart.com]"
5. **Episode V:  The Empire Strikes Back**
   - **Image**: `images/episode_5.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/1darthvader/art/Empire-Strikes-Back-Poster-530552386)
   - **License**: Creative Commons Attribution-ShareAlike 3.0 License
   - **Attribution**: "Image by [1darthvader] from [www.deviantart.com]"
6. **Episode VI:  Return of the Jedi**
   - **Image**: `images/episode_6.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/1darthvader/art/Return-Of-The-Jedi-147805665)
   - **License**: Creative Commons Attribution-ShareAlike 3.0 License
   - **Attribution**: "Image by [1darthvader] from [www.deviantart.com]"


### Character Posters:
1. **Luke Skywalker**
   - **Image**: `images/characters/luke_skywalker.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/1darthvader/art/Luke-Skywalker-ESB-Version-2-95755274)
   - **License**: Creative Commons Attribution-ShareAlike 3.0 License
   - **Attribution**: "Image by [1darthvader] from [www.deviantart.com]"

2. **C-3PO**
   - **Image**: `images/characters/c3po.jpg`
   - **Source**: [Link to image source](https://www.flickr.com/photos/shebalso/35037203356/)
   - **License**: Creative Commons Attribution-ShareAlike 2.0 License
   - **Attribution**: "Image by [John (shebalso)] from [www.flickr.com]"
    
3. **R2-D2**
   - **Image**: `images/characters/r2d2.png`
   - **Source**: [Link to image source](https://www.deviantart.com/wdwparksgal-stock/art/Clear-Cut-R2D2-IMG-2278-718836919)
   - **License**: Creative Commons Attribution 3.0 License
   - **Attribution**: "Image by [Brisbane Queen St Mall] from [www.deviantart.com]"
    
4. **Darth Vader**
   - **Image**: `images/characters/darth_wader.png`
   - **Source**: [Link to image source](https://www.flickr.com/photos/shebalso/35037203356/)
   - **License**: Creative Commons Attribution-ShareAlike 2.0 License
   - **Attribution**: "Image by [MoonManxO] from [www.deviantart.com]"
    
5. **Leia Organa**
   - **Image**: `images/characters/leia_organa.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/silverkane1976/art/Leia-Organa-1080214685)
   - **License**: Creative Commons Attribution-NonCommercial-No Derivatives Works 3.0 License
   - **Attribution**: "Image by [silverkane1976] from [www.deviantart.com]"
    
6. **Owen Lars**
   - **Image**: `images/characters/owen_lars.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/nomidarklighter/art/Owen-Lars-924555609)
   - **License**: Creative Commons Attribution-NonCommercial-No Derivatives Works 3.0 License
   - **Attribution**: "Image by [NomiDarklighter] from [www.deviantart.com]"
    
7. **Beru Whitesun lars**
   - **Image**: `images/characters/beru_lars.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/nomidarklighter/art/Beru-Lars-923654313)
   - **License**: Creative Commons Attribution-NonCommercial-No Derivatives Works 3.0 License
   - **Attribution**: "Image by [NomiDarklighter] from [www.deviantart.com]"
    
8. **R5-D4**
   - **Image**: `images/characters/r5d4.png`
   - **Source**: [Link to image source](https://www.deviantart.com/davemilburn/art/R5D4-587941439)
   - **License**: Creative Commons Attribution-NonCommercial-No Derivatives Works 3.0 License
   - **Attribution**: "Image by [DaveMilburn] from [www.deviantart.com]"
    
9. **Biggs Darklighter**
   - **Image**: `images/characters/biggs_darklighter.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/taibox/art/Biggs-Darklighter-575184685)
   - **License**: Creative Commons Attribution-NonCommercial-No Derivatives Works 3.0 License
   - **Attribution**: "Image by [taibox] from [www.deviantart.com]"
    
10. **Obi-Wan Kenobi**
   - **Image**: `images/characters/obi_wan_kenobi.jpg`
   - **Source**: [Link to image source](https://www.deviantart.com/silverkane1976/art/Obi-Wan-Kenobi-917822621)
   - **License**: Creative Commons Attribution-NonCommercial-No Derivatives Works 3.0 License
   - **Attribution**: "Image by [silverkane1976] from [www.deviantart.com]"

### Default Image (if any):
- **Image**: `default_image.jpg`
- **Source**: [Link to image source](https://example.com)
- **License**: Creative Commons Attribution-ShareAlike 3.0 License
- **Attribution**: "Image by [Author Name or Website] from [source/website]"

**Note**: All images are used according to their respective licenses, and attribution is provided as required by the respective image sources.


## License and Legal Notice

This project is a **test project** created for educational purposes and **not for commercial use**. All characters, movies, and related intellectual property are the exclusive property of **Lucasfilm Ltd.**, a subsidiary of **The Walt Disney Company**.

This project does not claim ownership of any of the Star Wars characters, films, or related material. It is intended for learning and testing purposes only, and it is not intended to be used for commercial gain or profit.

**Star Wars** and all related trademarks, names, and characters are the property of **Lucasfilm Ltd.** and **The Walt Disney Company**. All rights are reserved. Any use of Star Wars-related intellectual property is done under fair use for educational or non-commercial purposes.

