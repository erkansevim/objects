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

console.log(person);