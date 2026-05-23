# Kodecamp Stage 0 React Class

## My Design Approach

For this project, I used Bootstrap to handle basic responsiveness and leverage its ready-made components, especially for the header and footer.

I also wrote custom CSS to create additional styling and ensure the design matched the required specifications.

### Header & Navigation

My first step was building the header and implementing a responsive hamburger menu.

This part was challenging because I initially tried handling the menu state purely with JavaScript without a dedicated mobile menu structure, which caused layout and responsiveness issues.

To solve this, I created a separate mobile menu list in the HTML and controlled its visibility using JavaScript.

I used DOM manipulation to access elements by their IDs and classes, then created a toggle function that:

- Listens for clicks on the menu icon  
- Toggles the mobile menu visibility  
- Switches the menu icon image between open and close states  

The toggle function is only active in mobile view where the hamburger icon is visible.

I also ensured there was no horizontal overflow by carefully managing flexbox layouts in CSS.

---

## Form Handling & API Integration

This section was the most challenging part of the project.

The original API provided for the challenge was not working, so I integrated an alternative URL shortening API:

![https://tinyurl.com/app/features/url-shortener-api]

I used the Fetch API to send requests and handle responses dynamically.

After receiving the shortened URL, I updated the input field with the result.

This process helped me better understand:
- Asynchronous JavaScript (async/await)
- API requests and responses
- Error handling in real-world scenarios

---

## Key Learnings

- DOM manipulation for UI interactions
- Responsive design with Bootstrap + custom CSS
- Handling API failures and finding alternatives
- Better understanding of async JavaScript workflows