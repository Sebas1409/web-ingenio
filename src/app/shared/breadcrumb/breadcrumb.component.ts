import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public menus = [];

  constructor(private state:ActivatedRoute) { }


  ngOnInit(): void {
    console.log(this.state.snapshot.routeConfig.path)
    let rutaAnterior = '/dash/'+this.state.snapshot.routeConfig.path.split("/")[0];
    console.log('ruta ant',rutaAnterior)
    let menuTemporal = this.state.snapshot.url;
    this.menus = [];
    menuTemporal.map((ele:any,index)=>{
      if(index<2){
        ele.rutaAnterior = index == 0 ? rutaAnterior : rutaAnterior + '/' + this.state.snapshot.routeConfig.path.split("/")[1];
        this.menus.push(ele);
      }
    })

    console.log(this.menus)
  }

}
