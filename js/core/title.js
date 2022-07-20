class Title {
  constructor(id) {
    this.id = id;

    this.template = `
      <span class="orange">G</span>++
    `;

    document.getElementById(this.id).innerHTML = this.template;
  }
}
