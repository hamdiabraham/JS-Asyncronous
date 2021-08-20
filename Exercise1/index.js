fetch("https://api.github.com/users/hamdiabraham")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("image").src = data.avatar_url;
    document.getElementById("bio").innerHTML = data.bio;
    document.getElementById("followers").innerHTML = data.followers;
    document.getElementById("following").innerHTML = data.following;
  });
