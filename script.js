"use strict";

// DOM ELEMENTS
const dropdown = document.querySelector(".dropdown");
const dropdownLabel = document.querySelector(".dropdownLabel");
const dropdownLabelText = document.querySelector(".dropdownLabel label");
const dropdownItems = document.querySelectorAll(".item");

dropdownLabel.addEventListener("click", () => {
  dropdown.classList.toggle("dropdownOpen");
});

dropdownItems.forEach((dropdownItem, i) => {
  dropdownItem.addEventListener("click", () => {
    dropdownItems.forEach((di) => {
      di.classList = "";
    });
    dropdownLabelText.textContent = dropdownItem.textContent;
    dropdownItem.classList = "selected";
    dropdown.classList.toggle("dropdownOpen");
  });
});
