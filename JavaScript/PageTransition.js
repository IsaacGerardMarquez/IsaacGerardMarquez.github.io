// This executes the code once the window is fully loaded.
window.onload = () => {
  // This selects all of the anchor elements in the document.
  const anchorElements = document.querySelectorAll('a');
  // This selects the transition element with the class named "PageTransition".
  const transitionElement = document.querySelector('.PageTransition');

  //I set a setTimeout to remove the class named "ActiveState" from the transition element after 450 milliseconds.
  setTimeout(() => transitionElement.classList.remove('ActiveState'), 450);

  // This iterates over each anchor element.
  anchorElements.forEach(anchor => {
    // I added a click event listener to all of the anchor element.
    anchor.addEventListener('click', e => {
      // I used this to prevent the default behavior of clicking on a link, which stops the browser from navigating to a new page.
      e.preventDefault();
      // This gets the target URL from the href attribute of the clicked anchor element.
      const target = e.target.href;
      // This adds the class named "ActiveState" to the transition element.
      transitionElement.classList.add('ActiveState');
       // I also set a setTimeout to change the window location to the target URL after 450 milliseconds.
      setTimeout(() => window.location.href = target, 450);
    });
  });
};