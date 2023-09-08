import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private animation!: Animation;

  constructor(
      private alertController: AlertController,
      private router: Router,
      private animationCtrl: AnimationController) { }
  

      async mostrarAlerta() {
        const alert = await this.alertController.create({
          header: 'Cerrar sesión',
          message: '¿Estás seguro de que quieres salir de la aplicación?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                // Maneja la acción de cancelar si lo deseas
                console.log('Acción cancelada');
              }
            }, {
              text: 'Confirmar',
              handler: () => {
                // Redirecciona al usuario a otra página
                this.router.navigate(['/login']); // Cambia 'otra-pagina' al nombre de la página a la que deseas redirigir
              }
            }
          ]
        });
    
        await alert.present();
      }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);
      this.animation.play();
  }

}
