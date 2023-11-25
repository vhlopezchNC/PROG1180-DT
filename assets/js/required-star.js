var checkbox = document.getElementById('enableHelpTips');
  var helpTips = document.querySelectorAll('.help-tip');

  checkbox.addEventListener('change', function () {
    helpTips.forEach(function (helpTip) {
      helpTip.style.display = checkbox.checked ? 'inline-block' : 'none';
    });
  });