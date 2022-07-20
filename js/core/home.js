class Home {
  constructor(id) {
    this.id = id;

    this.game = {
      grams: new Decimal(0),
      level: 0,
      req: new Decimal(5000),
      speedrun: 1.15
    };

    this.template =
      `
     <h1>
    ` +
      this.game.grams +
      `
     grams</h1>
     <h2>Level:
    ` +
      this.game.level +
      "</h2>" +
      `
        <div class="text">Next at
      ` +
      this.game.req +
      ` grams.</div>` +
      `
       <div class="tabs"><button id="click"><span class="big">Click Me!</span></button></div>
       <h3>I Allecrate Get x
      ` +
      this.game.speedrun +
      " get for grams gain.</h3>" +
      `
      <div class="tabs"><button id="alec">Allecrate Me Speed!</button><button id="reset">Reset Allecrate</button></div>
      `;

    this.updateHome = () => {
      setInterval(() => {
        this.template =
          `
     <h1>
    ` +
          this.game.grams +
          `
     grams</h1>
     <h2>Level:
    ` +
          this.game.level +
          "</h2>" +
          `
        <div class="text">Next at
      ` +
          this.game.req +
          ` grams.</div>` +
          `
       <div class="tabs"><button id="click"><span class="big">Click Me!</span></button></div>
       <h3>I Allecrate Get x
      ` +
          this.game.speedrun +
          " get for grams gain.</h3>" +
          `
      <div class="tabs"><button id="alec">Allecrate Me Speed!</button><button id="reset">Reset Allecrate</button></div>
      `;
      }, 80);
    };

    document.getElementById(id).innerHTML = this.template;
  }
}
