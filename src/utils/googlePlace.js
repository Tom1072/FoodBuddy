const key = "AIzaSyBCsE3YX42Sg6N5zDsLHXO52X7K1m5SIuY"
// const key = "AIzaSyA8GPNfwLECbIQSl8jGUR7N_o41-YBYbM0"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffle(arr) {
    let i = arr.length;
    while (i) {
        const j = Math.floor(Math.random() * i--);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export async function findPlace(place, cuisines, minPrice, maxPrice) {

    const minRating = 4;
    const radius = 50000;
    const maxNumOfPages = 10;
    const delay = 1000; // ms

    let res = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=\"${place}\"&inputtype=textquery&maxprice=${maxPrice}&minprice=${minPrice}&key=${key}`);
    let data = await res.json();
    const placeId = data.candidates[0].place_id;

    res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${key}`);
    data = await res.json();
    const location = `${data.result.geometry.location.lat},${data.result.geometry.location.lng}`;

    // Find the all page of results
    res = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=restaurant&key=${key}&opennow=true`);
    data = await res.json();

    let results = [];
    let nextPageToken = data.next_page_token;
    results.push(...data.results);
    results = results.filter(result => result.rating >= minRating);
    // console.log(`Next Page Token: ${data.next_page_token}`);
    

    let page = 1;
    while (nextPageToken && page < maxNumOfPages) {
        await sleep(delay); // There is a short delay between each page
        res = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=restaurant&opennow=true&key=${key}&pagetoken=${nextPageToken}`);
        data = await res.json();
        // console.log(`Status: ${data.status}`);
        // console.log(`Error: ${data.error_message}`);
        // console.log(`Next Page Token: ${data.next_page_token}`);

        nextPageToken = data.next_page_token;
        results.push(...data.results);

        // Only keep the results that has rating >= 4
        results = results.filter(result => result.rating >= minRating);

        page += 1;
    }

    // Get the details of each restaurant
    let restaurants = [];
    for (let i = 0; i < results.length; i++) {
        res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${results[i].place_id}&key=${key}&language=en`);
        data = await res.json();
        restaurants.push(data.result);
    }

    restaurants = shuffle(restaurants);
    
    console.log(`Number of restaurants: ${restaurants.length}`);
    console.log(`Page queried: ${page}`);
    console.log(`First restaurant: ${restaurants[0].name}`);
    return restaurants[0];
}

// findPlace("Downtown Ottawa", ["Chinese", "Japanese", "Thai"], 0, 4).then((result) => { console.log(result) });
