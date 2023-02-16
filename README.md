# Movie API Database

This is a simple React application that allows users to search for movies using The Movie Database (TMDb) API.

## Technologies Used

- React: a popular JavaScript library for building user interfaces.
- Axios: a JavaScript library for making HTTP requests from the browser.
- Bootstrap: a popular CSS framework for building responsive and mobile-first websites.
- CSS animations: used to create a Hollywood-themed animation in the background.

## Installation Instructions

1. Clone the repository to your local machine.
2. Open a terminal window and navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Obtain an API key from The Movie Database (TMDb) website.
5. Create a `.env` file in the root directory of the project.
6. Add your API key to the `.env` file as follows: `REACT_APP_API_KEY=your-api-key-here`.
7. Run `npm start` to start the development server.
8. Open your browser and navigate to `http://localhost:3000` to view the application.

## Code Explanations

The project is structured into several components, each with its own responsibility. The `App` component is the root component of the application, and it is responsible for fetching the movie data from the TMDb API and passing it down to the `MoviesList` component.

The `MoviesList` component is responsible for rendering the list of movies returned by the API. It does this by mapping over the movie data and rendering a `MovieCard` component for each movie.

The `MovieCard` component is responsible for rendering the details of a single movie. It receives the movie data as props and renders the movie title, overview, poster image, and release date.

The `api.js` file contains the function that fetches the movie data from the TMDb API. The function takes a search term as input and returns a Promise that resolves to an array of movie objects.

The `App.css` file contains the custom CSS styles used in the application. It includes styles for the search bar, movie cards, and background animation.

The `nav.css` file contains the custom CSS styles used for the sticky navigation menu.

## Unsolved Problems

There are several ways to extend this project and add additional features, such as:

- Adding pagination to the movie list to allow users to view more movies.
- Allowing users to filter movies by genre, rating, or release date.
- Adding user authentication and allowing users to save their favorite movies.

## Conclusion

This is a simple yet effective React application that demonstrates how to fetch data from an external API and render it in a user-friendly way. It also demonstrates how to use third-party libraries and frameworks to create a modern and responsive user interface.

You can view the live demo of this project [here](https://musical-sopapillas-fa7f2a.netlify.app/).

