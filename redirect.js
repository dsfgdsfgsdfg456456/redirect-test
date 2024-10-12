// URL list
const urls = [
    "https://example1.com",
    "https://example2.com",
    "https://example3.com",
    // Add more URLs here
];

// Random URL selection and redirection
const randomURL = urls[Math.floor(Math.random() * urls.length)];
window.location.href = randomURL;
