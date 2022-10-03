import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "CodeSandbox";
  title2 = "Bonjour";
  isAdmin: boolean = true;

  toggleEditButton(): void {
    this.isAdmin = !this.isAdmin;
  }

  
}
