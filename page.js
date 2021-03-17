function logout() {
     window.location = "index.html";
     localStorage.removeItem("USERNAME");
     localStorage.removeItem("Roomname");
}