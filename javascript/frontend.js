document.addEventListener("click", clickFilter);

function clickFilter() {
  
  if (event.target.dataset.multipass){
    console.log('success')
    getLink();
  }
}

function getLink() {
  var url = "/multipass";
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      window.location.href = this.responseText
    }
  };
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send();
}