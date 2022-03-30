

const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'animals.com'         

];

const func1=(x)=>
{
    return x;
}

const googleSearch = (searchInput)=>{
    const match=googleDatabase.filter(website=>{
        return website.includes(searchInput);
    });

    return match.length>3? match.slice(0,3) : match;
}

console.log(googleSearch('cats'));

module.exports = googleSearch;
module.exports = func1;;