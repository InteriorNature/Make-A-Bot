// On state change or at least before navigating away from the page, serialize and encode the state
// data you want to retain into the hash string

window.location.hash = encodeURIComponent(JSON.stringify(myData));

// If navigating away using Javascript, be sure to use window.location.href over window.location.replace

window.location.href = '/another-page-url'

....

// On page load (e.g. in an init function), if there is data in the #hash, overwrite initial state data
// by decoding and parsing the JSON string

if (window.location.hash) {

    // Read the hash string omitting the # prefix

    var hashJson = window.location.hash.substring(1);

    // Restore the deserialized data to memory

    myData = JSON.parse(decodeURIComponent(hashJson));
}