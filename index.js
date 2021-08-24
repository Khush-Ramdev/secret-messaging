const form = document.querySelector("form");
const {hash} = window.location

if(hash){
    document.querySelector('#message-form-1').classList.add('hide')
    document.querySelector("#message-form-2").classList.remove('hide');
    document.querySelector('#message-output').innerText=atob(hash.replace("#",""))
    console.log(atob(hash.replace("#","")));
}


// document.querySelector('')

form.addEventListener("submit", (e) => {
  e.preventDefault();

    document.querySelector('#message-form-1').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

  const message = document.querySelector("#message-input");
  const cryptic = document.querySelector("#link-input");
  const encrypted = btoa(message.value);

  cryptic.value = `${window.location}#${encrypted}`;
  cryptic.select();
  // console.log(cryptic,newMessage)
});
