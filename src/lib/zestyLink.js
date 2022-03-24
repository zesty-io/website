// Uses the native zesty navigationArray to search for a ZUID match and return the url
// this is useful for field types "internal links" and hard coding url, which in this case, become dynamic

export function zestyLink(navArray, zuid ) { 
    for(let i = 0; navArray.length > i; i++){
        if(navArray[i].zuid == zuid){
            return navArray[i].url
        }
    }
}