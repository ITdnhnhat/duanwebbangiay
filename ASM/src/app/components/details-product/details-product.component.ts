import { HomesComponent } from './../homes/homes.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [HomesComponent],
  providers: [HomesComponent],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent implements OnInit{
  details: any;
  detailsId: any;

  constructor(private activeRoute: ActivatedRoute, private service : HomesComponent) { }
  
    ngOnInit(): void {
      this.detailsId = this.activeRoute.snapshot.paramMap.get('id');
      this.details = this.service.product.find((x: { id: any; }) => x.id == this.detailsId);
  }
}
