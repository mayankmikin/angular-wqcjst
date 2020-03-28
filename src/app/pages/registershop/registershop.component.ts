import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Enheter } from 'src/app/models/result';

@Component({
  selector: 'app-registershop',
  templateUrl: './registershop.component.html',
  styleUrls: ['./registershop.component.css']
})
export class RegistershopComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private searchService: SearchService,
    private route: ActivatedRoute
    ) { }

    shop:Enheter;
    id:string
  ngOnInit() 
  { 
    this.spinner.show();
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id');
      this.getData(this.id);
    });
  }
   getData(id)
  {
     this.searchService.getResultSetById(id).subscribe(res => {
      // let id = res['id'];
      // this.router.navigate(['/detail/'+id]);
    //  console.log(res)
      if(res)
      {
        this.shop=res;
        console.log(this.shop)
      this.spinner.hide();
      }
      
     }, (err) => {
       console.log(err);
     });
  }
}
