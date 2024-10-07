### Home/List Page [App jsx]

- [x] This view displays all of the movies in the movie database. 

- [ ] When a movie poster (`<img>` element) is clicked, a user should be brought to the details page.
    - Link and route
    - on click for img

- [x] Each of the "movie items" on this page each must have a `data-testid="movieItem"` attribute.

- [ ] Each of the movie items' posters (`<img>` elements) on this page must have a `data-testid="toDetails"` attribute.



### Details Page 

- [ ] This view should show all details **including ALL the genres** for the selected movie, as well as the title, description, and poster image. Use Sagas and Redux to handle these requests and data. 

- [ ] The details page must have a `data-testid="movieDetails"` attribute.

- [ ] The details page must have a "back to movie list" button, which should bring the user back to the Home/List Page.

-   [ ] The "back to movie list" button must have a `data-testid="toList"` attribute.

Hint: You can make a `GET` request for a specific movie! Remember `req.params` and `:id`?
