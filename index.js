// COLOR SCHEME

const themeDark = window.matchMedia("(prefers-color-scheme: dark)");
const checkbox = document.querySelector("#toggleTheme");

function applyTheme(isThemeDark) {
	if (isThemeDark) {
		document.documentElement.setAttribute("data-theme", "dark");
		checkbox.checked = true;
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		checkbox.checked = false;
	}
}

function handleColorScheme() {
	applyTheme(themeDark.matches);
}
function handleToggleChange() {
	applyTheme(checkbox.checked);
	localStorage.setItem("theme", checkbox.checked ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
		applyTheme(savedTheme === "dark");
	} else {
		handleColorScheme();
	}
	checkbox.addEventListener("change", handleToggleChange);
});
themeDark.addEventListener("change", handleColorScheme);

// ANIMATION ON SCROLL

const items = document.querySelectorAll(".grid-items");

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible");
			observer.unobserve(entry.target);
		}
	});
});

items.forEach(item => {
	observer.observe(item);
})
