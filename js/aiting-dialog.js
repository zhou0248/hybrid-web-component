const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {
      font-family: "Tourney", sans-serif;
      border: 0.2rem solid firebrick;
      padding: 1rem;
      margin: 1rem auto;
      background-color: mistyrose;
      border-radius: 1rem;
      max-width: 60%;
      box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;  
    }
    .btn{
      background-color: firebrick;
      color: white;
      font-weight: bold;
      font-size: 1rem;
      padding: 0.8rem 1rem;
      border: none;
      border-radius: 0.3rem;
      margin-top: 1rem;
      font-family: "Tourney", sans-serif;
        
    }
    .btn:hover, .btn:focus{
      background-color: crimson;
      color: mistyrose;
    }
    .title{
      color: firebrick; !important
      font-weight: 900;   
    }
    .text{
      color: firebrick;
      font-weight: 800;
      font-size: 1.2rem;
    }
    .info{
      color: navy;
    }
    .info-div{
      font-family: "Ysabeau Infant", sans-serif;
      border-color: navy;
      background-color: #d0e0f5
      ;
    }
    .info-btn{
      font-family: "Ysabeau Infant", sans-serif;
      background-color: navy;
      color:white;
    }
    .info-btn:hover, .info-btn:focus{
      background-color: #1f1f9e
      ;
      color: #c6d5e8;
    }
    .success{
      font-family: "Niramit", sans-serif;
      color: #234204;
      background-color: #E6FFB8;
      border-color: #234204;
    }
    .success-btn{
      font-family: "Niramit", sans-serif;
      background-color: #234204;
      color: white;
    }
    .success-btn:hover, .success-btn:focus{
      background-color: #325c09;
      color: #e7f7d7;
    }
  </style>
  <div>
    <slot class="title" name="title"> Default title </slot>
    <slot class="text" name="message"> Default text </slot>
    <button class="btn" id="btn"></button>
  </div>
`;

class customDialog extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
    this.shadowRoot
      .getElementById("btn")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    let ev = new CustomEvent("buttonClicked", {
      detail: {
        func: this.action,
      },
      bubbles: true,
      composed: true,
    });
    console.log(ev);
    this.shadowRoot.querySelector("div").dispatchEvent(ev);
  }

  static get observedAttributes() {
    return ["action", "level", "label"];
  }

  get action() {
    return this.getAttribute("action");
  }

  set action(value) {
    this.setAttribute("action", value);
  }

  get level() {
    return this.getAttribute("level");
  }

  set level(value) {
    this.setAttribute("level", value);
  }

  get label() {
    return this.getAttribute("label");
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  connectedCallback() {
    this.shadowRoot.getElementById("btn").innerText = this.label;
    this.shadowRoot
      .querySelector("div")
      .classList.add(this.level, this.level + "-div");
    this.shadowRoot
      .querySelector(".title")
      .classList.add(this.level, this.level + "-title");
    this.shadowRoot
      .querySelector(".text")
      .classList.add(this.level, this.level + "-text");
    this.shadowRoot
      .getElementById("btn")
      .classList.add(this.level, this.level + "-btn");
  }
  openDialog() {
    document.querySelector("aiting-dialog").style.display = "block";
  }

  closeDialog() {
    document.querySelector("aiting-dialog").style.display = "none";
  }
}

customElements.define("aiting-dialog", customDialog);
/*NOTE: the name of the custom element must be in lowercase or it will result in an error
but the html tag is not case sensitive
*/
