import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonItem ,IonLabel ,IonButton ,IonActionSheet ,IonAlert ,IonList ,IonBadge ,IonCheckbox} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent ,IonItem ,IonLabel ,IonButton ,IonActionSheet ,IonAlert ,IonList ,IonBadge ,IonCheckbox],
})
export class Tab1Page {
  constructor() {}
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  public alertButtons = [
    {
      text: 'ยกเลิก',
      role: 'ยกเลิก',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'ยืนยัน',
      role: 'ยืนยัน',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  public alertButton1 = ['OK'];
  public alertInputs = [
    {
      placeholder: 'ชื่อ-นามสกุล',
    },
    {
      placeholder: 'ชื่อเล่น',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'อายุ',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'เกี่ยวกับตัวเอง',
    },
  ];
}
