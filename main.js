function addUser()
{
    username = document.getElementById("input_username").value;
    localStorage.setItem("user_name",username);
    window.location="witter.html";
}