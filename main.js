function addUser()
{
    username = document.getElementById("input_username").value;
    localStorage.setItem("username:",username);
    window.location="witter.html";
}