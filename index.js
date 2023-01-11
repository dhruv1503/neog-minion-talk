const userInput = document.querySelector(".user-input");
const outputContainer = document.querySelector(".output-container");
const textConvertButton = document.querySelector(".text-convert-btn");


userInput.addEventListener("input", (e) => {
    userInput.value = e.target.value
})


const createURL = (input) => {
    const url = "https://api.funtranslations.com/translate/minion.json?text=" + input
    return url;
}

  async function fetchApi(url){
    try{
    const response = await fetch(url)
    const data = await response.json();
    return data.contents.translated
    }
    catch(error){
        console.log(error)
        window.alert("Something went wrong!! Please try after sometime");
        
    }
}

const addTextToOutputContainer = (text) => {
    outputContainer.textContent = text;
}

const buttonHandler = async(input) => {
     
    const data = await fetchApi(createURL(input));
    console.log(data)

    if(typeof(data) == String){
    addTextToOutputContainer(data);
    }
    else{
        window.alert("Something went wrong!! Please try after sometime");
    }
}

textConvertButton.addEventListener("click", ()=>{
    const input = userInput.value
    buttonHandler(input)})