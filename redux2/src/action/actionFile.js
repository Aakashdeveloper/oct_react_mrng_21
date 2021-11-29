const baseUrl = "http://localhost:7690"

export function latestNews(){
    const output = fetch(`${baseUrl}/articles?_end=3`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'LATEST_NEWS',
        payload:output
    }
}