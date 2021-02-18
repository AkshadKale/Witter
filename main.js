function addUser()
{
    username = document.getElementById("input_username").value;
    localStorage.setItem("UserName : ",username);
    window.location="witter.html";
}