import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Xác nhận Xóa Sản Phẩm</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Bạn có thực sự muốn Xóa không?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">THOÁT</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">XÓA</button>
  </div>
  `,

})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  productList: any = [];
  constructor(private router: Router, private modalService: NgbModal,
    private toastr: ToastrService,
    private httpProvider: HttpProviderService, private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.productList = this.getAllProduct();
  }

  getAllProduct() {
    this.productList = this.httpProvider.getAlProducts().subscribe(
      data => this.productList = data
      );
    }
  
    // console.log(productList);

  AddProduct() {
    this.router.navigate(['AddProduct']);
  }

  deleteProductConfirmation(product: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        this.deleteProduct(product);
      },
        (reason) => { });
    this.router.navigate(['Home']);
  }

  deleteProduct(productId: any) {
    this.httpProvider.deleteProduct(productId).subscribe(
      data => {
        if (data != null) {
          this.toastr.success("Xóa Sản Phẩm Thành Công");
          this.getAllProduct();
        }
      }
    )

  }

}
