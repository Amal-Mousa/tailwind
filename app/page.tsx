
const fetchData = async () => {
  // await new Promise((resolve) => setTimeout(resolve,3000))
  
  // return [1, 2, 3]
  // await new Promise((resolve,reject) => setTimeout(()=>
  // {
  //   return reject('An error occured'),3000}))
  const res = await fetch(`http://localhost:3000/api/hello`);
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


const Home = async () => {
  // const data = await fetchData();
  // console.log(data);
  
  return (
    <main>
      <div>Hello there</div>
    </main>
  )
}

export default Home;