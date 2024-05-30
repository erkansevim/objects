const car1= new Object ({name:"porsche", engine:"boxer", model:2024 })

console.log(car1.name);
//--------

const car2=new Object({})
car2.name="volvo";
car2.motor="2.0"
console.log(car2);

//------------

function mitarbeiter(id, name, gebuhr) {
    this.mitarbeiterId=id
    this.mitarbeiterName=name
    this.mitarbeiterGebuhr=gebuhr
}

const person1=new mitarbeiter(101,"erkan",4200
)
console.log(person1);

//-----------
const person={
    name:"erkan",
    surname:"sevim",
    job:"developer",
    hasDriverLicense:true
}

console.log(person.job);

person.hasDriverLicense=false;
console.log(person.hasDriverLicense);

//new property add

person.location="Bremen";
console.log(person);

const mensch={
    name:"adam",
    surname:"mol",
    job:"maler",
    hasDriverLicense:true
}
console.log();
//---------

const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Rengin",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Kemal",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Halil",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    }]

    people.forEach((a)=>console.log(a.job));

    const newAges =people.map((kisi)=>kisi.age+1)

    console.log(newAges);
