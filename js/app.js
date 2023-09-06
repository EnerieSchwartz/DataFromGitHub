let div = document.createElement("div");
div.className = "main__container";
document.body.append(div);

let discrBox = document.createElement("div");
discrBox.className = "discription__container";
div.appendChild(discrBox);

fetch("./js/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise((resolve, reject) => {
        let img = document.createElement("img");

        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        div.appendChild(img);

        let userName = document.createElement("div");
        userName.className = "userName";
        userName.innerHTML = githubUser.login;
        discrBox.appendChild(userName);
        console.log(githubUser);

        let userAccName = document.createElement("span");
        userAccName.className = "acc__name";
        userAccName.innerHTML = `@${githubUser.name}`;
        discrBox.appendChild(userAccName);

        let paragraph = document.createElement("p");
        paragraph.className = "par__text";
        paragraph.innerText =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        discrBox.appendChild(paragraph);

        let followBtn = document.createElement("button");
        followBtn.className = "follow__button";
        followBtn.innerHTML = "Follow";
        followBtn.onmousemove = function () {
          followBtn.style.backgroundColor = "#333";
          followBtn.style.color = "#f0efef";
          followBtn.style.border = "none";
          followBtn.style.transform = "translateY(-5px)";
          followBtn.style.letterSpacing = "4px";
          followBtn.style.transition = "0.5s ease-in-out";
        };
        followBtn.onmouseout = function () {
          followBtn.style.backgroundColor = "#f0efef";
          followBtn.style.color = "#333";
          followBtn.style.border = "1px solid #606060";
          followBtn.style.transform = "translateY(5px)";
          followBtn.style.letterSpacing = "2px";
        };

        discrBox.appendChild(followBtn);

        let statistics = document.createElement("div");
        statistics.className = "statistics__content";
        discrBox.appendChild(statistics);

        for (let i = 0; i < 3; i++) {
          let statisticsItem = document.createElement("div");
          statisticsItem.className = "statistics__item";
          statistics.appendChild(statisticsItem);

          let numberSpan = document.createElement("span");
          numberSpan.className = "number";
          statisticsItem.appendChild(numberSpan);

          let statisticsParam = document.createElement("span");
          statisticsParam.className = "statistics__parameter";
          statisticsItem.appendChild(statisticsParam);
        }

        let paramText = document.getElementsByClassName(
          "statistics__parameter"
        );
        paramText[0].innerHTML = "followers";
        paramText[1].innerHTML = "following";
        paramText[2].innerHTML = "repositories";

        let statisticsNum = document.getElementsByClassName("number");
        statisticsNum[0].innerHTML = githubUser.followers;
        statisticsNum[1].innerHTML = githubUser.following;
        statisticsNum[2].innerHTML = githubUser.public_repos;
      })
  )
  .catch((error) => console.log(error.message));
