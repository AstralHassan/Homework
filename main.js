let posts = [];
let pagenum = 1

var postlist = document.querySelector(".posts");
let button = document.querySelector(".btn");

const getpages = async (pagecount) => {
  const res = await fetch(
    `https://www.wp-course.site/wp-json/youthink/posts?page=${pagecount}`
  );
  const data = await res.json();
  var datameta = data.data;
  posts.push(...datameta);
  console.log(datameta)
};


const blogPosts = (datameta) => {
  postlist.innerHTML = "";
  datameta.map((item) => {
    postlist.innerHTML += `
    <div class="post">
      <img src="${item.thumbnail}" alt="${item.slug}" />
    <div class="post-info">
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      
      <div class="post-data">
        <div class="view"></div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#000"
            stroke-width="2"
            d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,712,7 L12,7 Z"
          ></path>
        </svg>
        <label>${item.views}</label>
        //
        <div class="date">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 01-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"
            ></path>
          </svg>
          <label for="">${item.date}</label>
          //
          <div class="tags">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"
              ></path>
              <path
                d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"
              ></path>
            </svg>
            <label for="">${item.tags}</label>
          </div>
        </div>
        
      </div>
      
    </div>
    
  </div>
  
 

        `;
  });
};


await getpages(pagenum)
 blogPosts(posts)
  
button.addEventListener('click', async () => {
  if(pagenum <= 3){
  pagenum += 1 
  await getpages(pagenum)
  blogPosts(posts)
  }
  else {button.remove()
    window.alert('No More Posts To Show!')}


  
}) 





// posts.addEventListener("click", (e) => {
//   e.path.map((el) => {
//     if (el.tagName == "IMG") {
//       window.location.href = `http://127.0.0.1:5500/slug=${el.alt}`;
//     }
//   });
// });

postlist.addEventListener("click", (e) => {
  console.log(e.composedPath() )
 e.path.map((el) => {
   if (el.tagName == "IMG") {window.location.href =`http://127.0.0.1:5500/solo.html?slug=${el.alt}`;
   }
 });
});