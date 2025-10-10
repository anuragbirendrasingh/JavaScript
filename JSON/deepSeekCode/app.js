// preparing data to saved in local storage
const user = {
  name: "Bob",
  age: 25,
  isAdmin: true,
};

const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"Bob","age":25,"isAdmin":true}

// reterving data from local storage
const jsonString1 = '{"name":"Bob","age":25,"isAdmin":true}';
const userObject = JSON.parse(jsonString1);
console.log(userObject.name); // "Bob"

// saving data to local storage
// 1. Define a JavaScript object
const settings = {
  theme: "dark",
  notifications: true,
  language: "en",
};

// 2. Convert to JSON string and save
localStorage.setItem("userSettings", JSON.stringify(settings));

//reterive data from local storage
// 1. Retrieve the JSON string
const storedData = localStorage.getItem("userSettings");

// 2. Check if data exists and parse it
if (storedData) {
  const settings = JSON.parse(storedData);
  console.log(settings.theme); // "dark"
} else {
  console.log("No settings found.");
}

// Always handle errors when parsing JSON to avoid crashes from invalid data.

try {
  const data = JSON.parse(invalidJsonString);
} catch (error) {
  console.error("Failed to parse JSON:", error);
}
