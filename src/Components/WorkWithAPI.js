// this is for a later edition where I manage to use Github API to get data instead of hardcoding it in the app 


fetch('https://api.github.com/users/KaiSun19/repos', {
    headers: {
        'Authorization': "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",
    }})
    .then(response => response.json())
    .then(data => {
      data.map( item =>{
        workItems.push(item)
              })
        workItems.sort(function(a,b){
          return new Date(b.created_at) - new Date(a.created_at)
        }
      )
        workItems = workItems.slice(0,15)
           return workItems;
    })
      .then(async workItems => {
          await Promise.all(workItems.map((e, index, array) => {
              return fetch(`https://api.github.com/repos/KaiSun19/${e.name}/contents`)
                  .then(response => response.json())
                  .then(data => {
                      //array[index] = {...e, ...data};
                      console.log(data);
                  })
          }));

      });


  // const getWork = async () =>{
    
  //   const res = await fetch()
  //   return res.json()

  // } 

  // const {data, status} = useQuery("works", getWork);

  // const callRepoData = async (name) =>{
  //   let repoRes = await fetch(`https://api.github.com/repos/KaiSun19/${name}/contents`)
  //   let repoData = repoRes.json()
  // }

  // const getRepoData = async (name) => {

  //   const {data, status} = await useQuery("repodata", callRepoData(name));

  //   if(data){
  //     console.log(data.download_url)
  //   }

  // }

  // if(data){
  //   data.map( item =>{
  //       workItems.push(item)
  //   })
  //   workItems.sort(function(a,b){
  //     return new Date(b.created_at) - new Date(a.created_at)
  //   }
  //   )
  //   workItems = workItems.slice(0,15)
  //   workItems.map( item =>{
  //     repoNames.push(item.name)
  //    })
  //   repoNames.map( name =>{
  //     getRepoData(name)
  //   })



  // }