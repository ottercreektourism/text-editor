const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // stash the event so it can be triggered later
    window.deferredPrompt = event;

    // remove the hidden class from the button
    butInstall.classList.toggle("hidden", false);
});

// DONE: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        // The deferred prompt isnt available.
        return;
    }

    // Show the install prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable because it can only be called once.
  window.deferredPrompt = null;

//   hide the install button
  butInstall.classList.toggle('hidden', true);
});

// DONE: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled', event);
    // Clear prompt 
  window.deferredPrompt = null;
});
