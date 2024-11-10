const UR = "https://cat-fact.herokuapp.com";
const getFacts = async () => {
    console.log("Getting Data...");
    let response = await fetch(UR);
    console.log(response);
    let data = await response.json();
    console.log(data);
}
