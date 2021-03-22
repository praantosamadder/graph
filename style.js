let val = document.getElementById("value")    
let link = document.getElementById("link")
let value

val.onkeyup = () => {
    if (val.value.includes("https://")) {
        value = val.value
    } else if (val.value.includes("http://")) {
        value = val.value
    } else {
        value= "https://" + val.value
    }
    
    link.href = value
    console.log("Value changed " + value);
}
