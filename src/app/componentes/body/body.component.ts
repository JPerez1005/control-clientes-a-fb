import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarLeftComponent } from "../sidebar-left/sidebar-left.component";
import { ContenidoPrincipalComponent } from "../contenido-principal/contenido-principal.component";
import { FooterComponent } from "../footer/footer.component";
import { SidebarRightComponent } from "../sidebar-right/sidebar-right.component";

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [NavbarComponent, SidebarLeftComponent, ContenidoPrincipalComponent, FooterComponent, SidebarRightComponent]
})
export class BodyComponent {

}
