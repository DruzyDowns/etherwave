function BadgeFormCSS(props) {
  return <pre>{`/* etherwave popup modal form CSS */
  
  /* font from https://rsms.me/inter/ */
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

/* styling format built on top of an original design by Rik Lomas
https://twitter.com/riklomas */

/* Edit your CSS variables here to change the values across the form */
:root {
  --page-back: #ffffff;
  --page-fore: #111118;
  --page-font-size: 24px;

  --section-pad: 120px;
  --section-border: #f8f8f8;
  --section-height: 100vh;

  --etherwave-form-width: 320px;
  --etherwave-form-back: #fafafb;
  --etherwave-form-fore: #2b3946;
  --etherwave-form-border: #66666a;
}

/* mobile friendly layout */
@media (max-width: 640px) {
  :root {
    --etherwave-form-width: 100%;
  }
  #etherwave-form {
    position: fixed;
    bottom: 90px;
    right: 0;
    display: none;
  }
}

/* for fading in the form */
@keyframes fadein {
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translate(0, 24px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

/* Etherwave icon image styles — replace the background-image to customize  */

#etherwave-icon {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 64px;
  height: 64px;
  background-image: url(wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

/* Etherwave badge styles — the rotating text around the icon  */
#etherwave-badge {
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 96px;
  height: 96px;
  background-image: url(send-eth.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  animation: spin 20s linear infinite;
  cursor: pointer;
}

/* Etherwave form styles */

#etherwave-form {
  position: fixed;
  bottom: 90px;
  right: 24px;
  max-width: var(--etherwave-form-width);
  background: var(--etherwave-form-back);
  color: var(--etherwave-form-fore);
  border: 1px solid var(--etherwave-form-border);
  border-radius: 3px;
  padding: 24px;
  display: grid;
  grid-gap: 16px 8px;
  grid-template-areas: "label label" "input eth" "button button";
  grid-template-columns: 1fr auto;
  align-items: center;
  display: none;
  animation: fadein 0.4s 0.8s ease-in-out both;
  overflow: hidden;
}

#etherwave-form.is-open {
  display: grid;
  animation: fadein 0.2s 0.2s ease-in-out both;
}

#etherwave-form label {
  grid-area: label;
  display: block;
  font-size: 16px;
}

#etherwave-form input {
  grid-area: input;
  appearance: none;
  width: 100%;
  padding: 8px;
  font-variation-settings: "wght" 600;
  text-align: right;
  background: var(--etherwave-form-back);
  color: var(--etherwave-form-fore);
  border: 1px solid var(--etherwave-form-border);
  transition: border-color 0.2s ease-in-out;
}

#etherwave-form input:focus {
  border: 1px solid var(--etherwave-form-fore);
  outline: none;
}

#etherwave-form span {
  grid-area: eth;
}

#etherwave-form button {
  grid-area: button;
  appearance: none;
  border: none;
  background: var(--etherwave-form-fore);
  color: var(--etherwave-form-back);
  font: inherit;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
}

.etherwave-branding,
.etherwave-branding a {
  font-size: 12px;
  color: var(--etherwave-form-fore);
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`}</pre>;
}


export default BadgeFormCSS;