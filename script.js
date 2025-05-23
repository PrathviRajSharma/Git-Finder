const userCard = document.querySelector('.userCard');
const skeletonLoader = `
  <div class="skeleton-card">
    <div class="profile">
      <div class="image"><div class="skeleton"></div></div>
      <div class="title">
        <div class="skeleton"></div>
        <div class="skeleton"></div>
      </div>
    </div>
    <div class="bio"><div class="skeleton"></div></div>
    <div class="breaker"></div>
    <div class="otherDetails">
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
    </div>
    <div class="breaker"></div>
    <div class="otherDetails">
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
    </div>
  </div>
`;
userCard.innerHTML = skeletonLoader;  
function gitFinder() {
  let userName = document.querySelector("#userName");
  let submitBtn = document.querySelector("#submit");
  let useCard = document.querySelector(".userCard");
  let userNF = document.querySelector(".userNotFound");
  
  submitBtn.addEventListener("click", function () {
    let userNameValue = userName.value;
    fetch(`https://api.github.com/users/${userNameValue}`)
      .then((res) => {
        if (!res.ok) {
          userNF.style.top = `50%`;
          userCard.innerHTML = '';
          setTimeout(() => {
            userNF.style.top = `-100%`;
            userCard.innerHTML = skeletonLoader;
          }, 3000);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        let clutter = "";
        clutter =
          clutter +
          `
        <div class="card">
                <div class="profile">
                    <div class="image"><img src="${
                      data.avatar_url
                    }" alt=""></div>
                    <div class="title">
                        <h4>${data.name}</h4>
                        <p>@${data.login}</p>
                    </div>
                </div>
                <div class="bio">
                    <p>${data.bio}</p>
                </div>
                <div class="breaker"></div>
                <div class="otherDetails">
                    <div class="pubrepo"><h4>Public Reops: <span>${
                      data.public_repos
                    }</span></h4></div>
                    <div class="followers"><h4>Followers: <span>${
                      data.followers
                    }</span></h4></div>
                    <div class="following"><h4>Following: <span>${
                      data.following
                    }</span></h4></div>
                    <div class="location"><h4>Location: <span>${
                      data.location
                    }</span></h4></div>
                    <div class="company"><h4>Company: <span>${
                      data.company
                    }</span></h4></div>
                    <div class="blog"><h4>Blog: <span>${
                      data.blog
                    }</span></h4></div>
                </div>
                <div class="breaker"></div>
                <div class="otherDetails">
                    <div class="hiable"><h4>Hirable: <span>${
                      data.hirable ? "Yes" : "No"
                    }</span></h4></div>
                    <div class="twitter"><h4>Twitter: <span>@${
                      data.twitter_username
                    }</span></h4></div>
                    <div class="created"><h4>Created: <span>${
                      data.created_at
                    }</span></h4></div>
                    <div class="updated"><h4>Last Updated: <span>${
                      data.updated_at
                    }</span></h4></div>
                </div>
        </div>
        `;
        useCard.innerHTML = clutter;
      })

      .catch((error) => {});
  });
}
gitFinder();

function sideBar(){
    let sideBarToggle = document.querySelector('#sideBar');
    let close = document.querySelector('#closeSideNav');
    let sideNav = document.querySelector('#sideNav');
    sideBarToggle.addEventListener('click',function(){
        sideNav.style.right = `0%`;
    })
    close.addEventListener('click',function(){
        sideNav.style.right = `-100%`;
    })
}
sideBar();

