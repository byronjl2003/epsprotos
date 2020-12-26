import { Component, OnInit,Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-modaldefinitivo',
  templateUrl: './modaldefinitivo.component.html',
  styleUrls: ['./modaldefinitivo.component.css']
})
export class ModaldefinitivoComponent implements OnInit {
  modalRef: any;
  tplModalButtonLoading = false;
  htmlModalVisible = false;
  disabled = false;
  constructor(private modal: NzModalService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.modalRef = this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context',
        ref: this.modalRef
      },
      nzOnOk: () => console.log('Click ok')
    });
  }
  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      modelRef.destroy();
    }, 1000);
  }

}
