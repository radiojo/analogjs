import {Component} from "@angular/core";
import {RouteMeta} from "@analogjs/router";
import {RouterLink} from "@angular/router";

export const routeMeta: RouteMeta = {
  title: `L'équipe front`,
  canActivate: [() => true]
};

@Component({
  selector: 'app-front-team',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <main>
      <section>
        <h3>Les membres de l'équipe front :</h3>
        <ul>
          <li><a routerLink="/team/yoann">Yoann le Normand (ou turc pour sa passion du kebab, on sait pas trop)</a></li>
          <li>Ben <em>'s Elsàss</em> représente</li>
          <li>Erick qui ne pourrait jamais jouer à Qui veut gagner des millions</li>
          <li>Benji, Iker, Charly et Adrien, les gens d'en-dessous de Paris</li>
          <li>Mathias, le soleil de Madagascar</li>
          <li>Séb, la sagesse</li>
          <li>Nico et sa haine du Dynamic Form (tu me diras, il n'y a pas que lui)</li>
        </ul>
      </section>
    </main>
  `
})
export default class FrontTeamComponent {}
