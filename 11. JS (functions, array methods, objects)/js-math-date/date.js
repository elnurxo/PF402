// const now = new Date();

// now.setFullYear(2016);

// console.log("month idx: ", now.getTime());

// console.log(`Current Date: ${now.toDateString()}`);
// console.log(`Current Time: ${now.toTimeString()}`);

// const specificDate = new Date("2023-12-25");

// console.log(specificDate);

// const timestampDate = new Date(1000 * 60 * 60 * 24 * 7);
// console.log(timestampDate);

// console.log(Date());

//1 second - 1000ms
//1 minute - 60 seconds
//1 hour - 60 minutes
//1 day - 24 hours

// 7 gun - 1000 * 60 * 60 * 24 * 7

// const now = new Date();
// const deadline = new Date("2025-01-12 8:00:00");

// const diff = deadline - now; // Difference in milliseconds
// const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

// console.log(`Days until deadline: ${daysLeft}`);

// const eventDate = new Date();
// eventDate.setDate(eventDate.getDate() + 7); // Add 7 days
// console.log(`Event Date: ${eventDate.toDateString()}`);

// function calculateAgeDifference(personA, personB) {
//   const birthDateA = personA.birthDate;
//   const birthDateB = personB.birthDate;

//   // Compare the dates
//   const olderPerson = birthDateA < birthDateB ? personA : personB;
//   const youngerPerson = birthDateA < birthDateB ? personB : personA;

//   // Calculate the difference in milliseconds
//   const differenceInMilliseconds = Math.abs(birthDateA - birthDateB);

//   // Convert milliseconds to days
//   const differenceInDays = Math.floor(
//     differenceInMilliseconds / (1000 * 60 * 60 * 24)
//   );

//   // Return the result
//   return {
//     olderPerson: olderPerson.fullName,
//     youngerPerson: youngerPerson.fullName,
//     differenceInDays,
//   };
// }

// const person1 = {
//   fullName: "Alice Johnson",
//   gender: "Female",
//   birthDate: new Date("1990-05-15"), // YYYY-MM-DD
// };

// const person2 = {
//   fullName: "Bob Smith",
//   gender: "Male",
//   birthDate: new Date("1992-08-25"), // YYYY-MM-DD
// };

// const result = calculateAgeDifference(person1, person2);

// console.log(
//   `${result.olderPerson} is older than ${result.youngerPerson} by ${result.differenceInDays} days.`
// );

const now = new Date();

console.log(moment(now).format("MMM Do YYYY, h:mm a"));

console.log(moment(new Date("2005-12-12"), "YYYYMMDD").fromNow());
