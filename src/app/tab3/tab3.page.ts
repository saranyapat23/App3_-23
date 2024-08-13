import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButton, IonAvatar, IonModal, IonButtons, IonList ,IonImg ,IonSearchbar} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent ,IonItem ,IonLabel ,IonButton ,IonContent ,IonAvatar ,IonModal , IonButtons ,IonList ,IonImg ,IonSearchbar]
})
export class Tab3Page {
  constructor(private actionSheetCtrl: ActionSheetController) {}
  isModalOpen = false;
  presentingElement = undefined;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}
