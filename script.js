
// the below code fragment can be found in:
  function opentab(tabName) {
  // Get all the tab contents
  const tabContents = document.querySelectorAll('.tab-contents');

  // Loop through all the tab contents and close them
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active-tab');
  });

  // Get the specific tab content for the tab name
  const activeTab = document.getElementById(tabName);

  // Open the specific tab content
  activeTab.classList.add('active-tab');

  // Get all the tab links
  const tabLinks = document.querySelectorAll('.tab-links');

  // Loop through all the tab links and remove the active-link class
  tabLinks.forEach(tabLink => {
    tabLink.classList.remove('active-link');
  });

  // Get the specific tab link for the tab name
  const activeLink = document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`);

  // Add the active-link class to the specific tab link
  activeLink.classList.add('active-link');
}

// Call the opentab function with the default tab name
opentab('Skills');
