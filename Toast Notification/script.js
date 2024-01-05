

let toastBox= document.getElementById('toastBox');
let successMsg= "Successfully submitted!";
let errorMsg= "Oops, something went wrong!";
let invalidMsg= "Invalid message, try again!";

function showToast(msg){
    let toast= document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML= msg;
    toastBox.appendChild(toast);


    setTimeout(() => {
        toast.remove();
    }, 6000);
}