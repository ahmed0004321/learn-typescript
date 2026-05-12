//generic function

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithUserObj = (value: { id: number; name: string }) => {
  return [value];
};
// const arrString = createArrayWithString("apple");
// const arrNum = createArrayWithNumber(222);
// const arrObj = createArrayWithUserObj({
//     id: 333,
//     name: 'Oasif Ahmed Rikto'
// });

//ai function ta generic function use korle ja hoy karon amra same jinish bar bar repeat krobo na

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};
const arrString = createArrayWithString("apple");
const arrNum = createArrayWithNumber(222);
const arrObj = createArrayWithUserObj({
  id: 333,
  name: "Oasif Ahmed Rikto",
});

//now using tuple

const createArrayWithTuple = (param1: string, param2: string) => {
  return [param1, param2];
};

const crateArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};

const tupple = crateArrayTupleWithGeneric("Oasif", {
  name: "Ahmed Rikto",
  ID: 9999,
  devices: {
    isMobile: true,
    isLaptop: true,
    isMac: true,
  },
});
console.log(tupple);

//last example

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    CourseName: "Next Level Web Development",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "oasif",
  hasPen: true,
};
const student2 = {
  id: 321,
  name: "Oasif Ahmed Rikto",
  hsCar: true,
  isMarried: true,
};

const sendStudentData = addStudentToCourse(student2);
console.log(sendStudentData);
