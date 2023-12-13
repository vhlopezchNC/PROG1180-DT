var checkbox = document.getElementById('enableHelpTips');
  var helpTips = document.querySelectorAll('.help-tip');

  checkbox.addEventListener('change', function () {
    helpTips.forEach(function (helpTip) {
      helpTip.style.display = checkbox.checked ? 'inline-block' : 'none';
    });
  });

  function adjustFontSize(size) {
    document.body.style.fontSize = size + 'px';
  } 

  $(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

  function toggleContrast(element) {
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    const mainPanel = document.querySelector('.main-panel'); // Target the main-panel class directly
    const sidebar = document.querySelector('.bg-sidebar');
    const bgtop = document.querySelector('.bg-top');
    const logo = document.querySelector('.logo');
    const card = document.querySelector('.card');
    if (element.checked) {
      body.classList.add('high-contrast');
      nav.classList.add('high-contrast');
      mainPanel.classList.add('high-contrast');
      sidebar.classList.add('high-contrast');
      logo.classList.add('high-contrast');
      mainPanel.classList.add('bg-sidebar');
      logo.classList.add('bg-top');
      card.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
      nav.classList.remove('high-contrast');
      mainPanel.classList.remove('high-contrast');
      mainPanel.classList.remove('bg-sidebar');
      card.classList.remove('high-contrast');
      logo.classList.remove('high-contrast');
      sidebar.classList.remove('high-contrast'); // Remove high contrast from the main panel
  }
  }