const input = document.getElementById("search");
const results = document.getElementById("results");

// Debounce function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Fetch GitHub users
async function fetchUsers(query) {
  if (!query) {
    results.innerHTML = "";
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();

    results.innerHTML = data.items
      .map(user => `<p><a href="${user.html_url}" target="_blank">${user.login}</a></p>`)
      .join("");
  } catch (err) {
    results.innerHTML = `<p>Error fetching data</p>`;
    console.error("Fetch error:", err);
  }
}

const debouncedFetch = debounce(fetchUsers, 500);

// Add event listener
input.addEventListener("input", (e) => {
  debouncedFetch(e.target.value);
});

