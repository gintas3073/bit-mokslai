//let x = 1;

async function loadJoke() {
    const tmp = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    // await Response.json;
    const joke = await tmp.json();
    console.log(joke);
    console.log(joke.category);
}
loadJoke();