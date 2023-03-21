async function fetchUsers() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(data);
  }
  
  const myeggs = fetchUsers();
  console.log(myeggs);