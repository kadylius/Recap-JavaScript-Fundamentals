"use strict";

// Import the travel list data from the module
import { travelList, activities } from "./travelList.js";


document.addEventListener("DOMContentLoaded", initializeDropdown);

/**
 * Initializes the dropdown population process.
 */
function initializeDropdown() {
  populateCountryDropdown();
  populateActivityDropdown();
}

/**
 * Populates the country dropdown with options from the travel list.
 */
function populateCountryDropdown() {
    const dropdownElement = document.getElementById("countryDropdown");
    const fragment = document.createDocumentFragment();
  
    travelList.forEach(country => {
      const countryOption = new Option(country, country);
      fragment.appendChild(countryOption);
    });
  
    dropdownElement.appendChild(fragment);
  }


/**
 * Populates the activity dropdown with options from the travel list.
 */
function populateActivityDropdown() {
    const dropdownElement = document.getElementById("activityDropDown");
    const fragment = document.createDocumentFragment();
  
    activities.forEach(activity => {
      const activityOption = new Option(activity, activity);
      fragment.appendChild(activityOption);
    });
  
    dropdownElement.appendChild(fragment);
  }