let people = [
    {
      name: "John Doe",
      age: 32,
      occupation: "Software Engineer",
    },
    {
      name: "Jane Smith",
      age: 27,
      occupation: "Marketing Manager",
    },
    {
      name: "Bob Johnson",
      age: 45,
      occupation: "Accountant",
    },
  ];
  let filterarray=people.filter((singleperson)=>{
    if(singleperson.age>30)
    return singleperson;
  })
  console.log(filterarray)