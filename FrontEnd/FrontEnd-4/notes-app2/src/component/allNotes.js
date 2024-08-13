import noteData from "../script/data/data.js";

class ListNotes extends HTMLElement {
  _note = {
    id: null,
    title: null,
    body: null,
    createAt: null,
  };
  constructor() {
    super();
    this._style = document.createElement("style");
  }
  connectedCallback() {
    this.render();
  }
  _updateStyle() {
    this._style.textContent = `
    :host{
      display:block;
    }
            .card-wrapper{
              display: grid;
              grid-template-column:1fr;
              gap:1rem;
            }
            .cardNotes {
                border-radius: 4px;
                overflow: hidden;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
                color:black;
                background-color:#E8EDFF;
                display:grid;
                padding:1rem;
                 
                grid-template-columns:1fr 1fr ;
                grid-template-areas:
                'title title'
                'body body'
                'date date';
                
                gap:0.5rem

              }

            .cardTitle {
              grid-area: title;
                font-size:1.5rem;
            }
            .cardBody {
              grid-area:body;
                font-size:1rem;
                
            }
            .cardDate{
             
              grid-area:date;
              font-size:0.8rem;
              color:gray;
              justify-self: end;
              align-self: center;
            }
            @media only screen and (max-width: 508px){
              .cardTitle {
                  font-size:1rem;
              }
              .cardBody {
                  font-size:0.8rem;
                  
              }
              .cardDate {
                font-size:0.6rem;
                
            }
            }
        `;
  }
  render() {
    this._updateStyle();
    let notesHTML = "";
    noteData.forEach((note) => {
      notesHTML += `
      <div class="cardContainer">
          <div class="cardNotes">
              <div class="cardTitle">
                  <h3>${note.title}</h3>
              </div>
              <div class="cardBody">
                  <p>${note.body}</p>
              </div>
              <div class="cardDate">
                  <p>${note.createdAt}</p>
              </div>
          </div>
      </div>
      `;
    });
    this.innerHTML = `
            ${this._style.outerHTML}
            <div class="card-wrapper">
                ${notesHTML}
            </div>
        `;
  }
}

customElements.define("list-notes", ListNotes);
