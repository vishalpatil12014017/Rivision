showButtons(1);
async function getData(val, page) {
    console.log(val, page);
    try {
        let data = await fetch(
            `https://api.unsplash.com/search/photos?client_id=1_mZ7KFa6sDdUAKLf3npFtX5ASyCft4qo3E7dkPVKyw&page=${page}&per_page=30&query=${val}`
        );
        let data2 = await data.json();
        console.log(data.Response);
        if (data2.Response == "False") {
            console.log("err");
        } else {
            let data3 = data2.results;
            let arr = [
                "mainPhotosContainer1",
                "mainPhotosContainer2",
                "mainPhotosContainer3",
                "mainPhotosContainer4",
                "mainPhotosContainer5",
            ];
            let floor = Math.floor(data3.length / arr.length);
            console.log(floor);
            for (let i = 0; i < arr.length; i++) {
                if (i == 0) {
                    showData(data3.slice(i, floor + 1), arr[0]);
                } else {
                    showData(data3.slice(floor * i, floor * i + (floor + 1)), arr[i]);
                }
            }
        }
    } catch (e) {
        console.log(e, "hi");
    }
}
getData("nature", 1);
function showData(data, box) {
    box = document.getElementById(`${box}`);
    box.innerHTML = null;
    data.map((el) => {
        let imageCardDiv = document.createElement("div");
        imageCardDiv.id = "imageCard";

        imageCardDiv.innerHTML = `
      <div class="image">
        <img
          src=${el.urls.small}
          alt=""
        />
      </div>
      <div class="description">
        <div class="forPadding">
          <p>How churros are made in traditional churrafas</p>
          <div class="stats">
            <div class="Vote Vote-up">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Upvote</title>
                <path
                  stroke-width="0"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182
                  2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025
                  1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823
                  1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552
                  0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996
                  52.996 0 012.364-2.243z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>1598</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="Vote Vote-down"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Downvote</title>
                <path
                  fill="currentColor"
                  stroke="#ffffff"
                  stroke-width="0"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.803 13.476a1.2 1.2 0 01-1.606 0 53.03 53.03 0 01-2.364-2.243 29.613 29.613 0 01-2.422-2.722c-.339-.435-.025-1.028.526-1.028h2.397V3.336c0-.524.306-.982.823-1.064A11.874 11.874 0 018 2.15c.829 0 1.427.056 1.843.122.517.082.824.54.824 1.064v4.147h2.396c.552 0 .865.593.527 1.028-.52.669-1.32 1.62-2.423 2.722a53.038 53.038 0 01-2.364 2.243z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="PostCommentsIcon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Comments</title>
                <path
                  fill="currentColor"
                  stroke="#ffffff"
                  stroke-width="0"
                  d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"
                  fill="currentColor"
                ></path>
              </svg>

              <span> 133 </span>
            </div>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="PostViewsIcon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Post views</title>
                <path
                  d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span> 22.4M </span>
            </div>
          </div>
        </div>
      </div>
      `;
        box.appendChild(imageCardDiv);
    });
}
function handleClick() {
    let search = document.getElementById("search").value;
    getSearchData(search);
    getData(search, 1);
}
async function handleChange(val) {
    try {
        let data = await fetch(
            "https://api.unsplash.com/search/photos?client_id=1_mZ7KFa6sDdUAKLf3npFtX5ASyCft4qo3E7dkPVKyw&per_page=30&query=office"
        );
        let data2 = await data.json();
        if (data2.Response == "False") {
            console.log("err");
        } else {
            console.log(data2, "sdfsdf");
        }
    } catch (e) {
        console.log(e, "hi");
    }
}
function showButtons(index) {
    let buttons_div = document.getElementById("buttons");
    buttons_div.innerHTML = null;
    let original_id = index;
    if (index <= 6) {
        index = 6;
    }
    for (let i = index - 5; i <= index + 5; i++) {
        let btn1 = document.createElement("button");
        btn1.innerHTML = `${i}`;
        btn1.setAttribute("id", `${i}`);
        btn1.onclick = showData2;
        buttons_div.appendChild(btn1);
    }
    let btn = document.getElementById(original_id);
}
var search2 = "nature";
function getSearchData(val) {
    search2 = val;
}

function showData2() {
    let id = Number(this.id);
    let num = id - 1;
    let search = document.getElementById("search").value;

    getData(search2, num);
    console.log(search2, "this is search2");

    showButtons(id);
}