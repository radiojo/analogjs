import {Component} from "@angular/core";

@Component({
  selector: 'app-front-team-yoann',
  standalone: true,
  template: `
    <main>
      <section>
        <h3>Présentation de Yoann</h3>
        <img src="/vache.jpg" alt="">
      </section>
    </main>
  `,
  styles: [
    `
     img {
       width: 320px;
     }
    `
  ]
})
export default class FrontTeamComponent {}
