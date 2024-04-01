import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <main>
      <section>
        <h3>Mon incroyable page / (ou <em>index</em>)</h3>
        <ul>
          <li>
            <a routerLink="/team">L'équipe front</a>
          </li>
          <li>
            <a href="/api/v1/team">L'équipe front au format JSON</a>
            <ul>
              <li>
                <a href="/api/v1/team/yoann">Saluer Yoann au format JSON (avec paramètre dynamique)</a>
              </li>
              <li>
                <a href="/api/v1/team/yoann?langage=soutenu">Saluer Yoann au format JSON (avec paramètre dynamique) de façon soutenue</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  `
})
export default class HomeComponent {}
