const GITHUB_URL = "https://api.github.com/users/AnnettLebid";

function getImage(){
  fetch(GITHUB_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {    
      const profileImage = document.getElementById("profile-image");
      const userName = document.getElementById("my-name");
      profileImage.src = data.avatar_url;
      profileImage.alt = "Profile image";
      userName.textContent = data.name;
    });
}

window.onload = getImage;



