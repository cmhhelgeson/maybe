import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu", "label", "option"]

  toggleMenu(event) {
    event.stopPropagation();
    this.menuTarget.classList.toggle("hidden");
  }

  hideMenu = () => {
    this.menuTarget.classList.add("hidden");
  }

  connect() {
    document.addEventListener("click", this.hideMenu);
  }

  disconnect() {
    document.removeEventListener("click", this.hideMenu);
  }

  selectOption(e) {
    const year = e.target.getAttribute('data-value');

    if (year) {
      // Update the label to show the selected year
      if (this.hasLabelTarget) {
        this.labelTarget.textContent = year;
      }

      // Hide the menu after selection
      this.menuTarget.classList.add("hidden");
    }
  }
}