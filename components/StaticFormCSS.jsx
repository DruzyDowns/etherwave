function StaticFormCSS(props) {
  return <pre>{`/* etherwave static form CSS */
  
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
  --etherwave-form-width: 100%;
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
    padding-left: 24px;
    padding-right: 24px;
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

/* Etherwave form styles */
#etherwave-form-container {
  position: relative;
}

#etherwave-form {
  max-width: var(--etherwave-form-width);
  background: var(--etherwave-form-back);
  color: var(--etherwave-form-fore);
  border: 1px solid var(--etherwave-form-border);
  border-radius: 3px;
  padding: 24px;
  padding-left: 25%;
  padding-right: 25%;
  display: grid;
  grid-gap: 16px 8px;
  grid-template-areas: "label label" "input eth" "button button";
  grid-template-columns: 1fr auto;
  align-items: center;
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

/* Etherwave icon styles — replace the background-image to customize  */
#etherwave-icon {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  background-image: url(wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Etherwave badge styles — the rotating text around the icon  */
#etherwave-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 76px;
  height: 76px;
  background-image: url(send-eth.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  animation: spin 20s linear infinite;
  pointer-events: none;
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
    opacity: 0.6;
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

export default StaticFormCSS;