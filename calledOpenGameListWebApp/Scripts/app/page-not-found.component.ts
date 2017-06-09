import { Component } from "@angular/core";

@Component({
    selector: "page-not-found",
    template: 
    `
    <h2>{{titles}}</h2>
    <div>
        Oops.. This page does not exist (yet!).
    </div>
    `
})
export class PageNotFoundComponent {
    title = "Page not found";
}