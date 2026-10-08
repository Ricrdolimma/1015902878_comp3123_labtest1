


function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject)=>{
        if (!Array.isArray(mixedArray)){
            reject(new Error("It must be an array"));
            return;
        }
        const result = mixedArray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());

        resolve(result);
    });
}

const mixedArray = ["APPLE", 42, true, "BANANA", null, "ORANGE"];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));