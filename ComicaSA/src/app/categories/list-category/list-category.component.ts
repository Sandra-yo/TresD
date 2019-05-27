import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { CategoryScheme } from '../../schemes/categories/category.scheme';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
  providers: [DatabaseGenericService]
})
export class ListCategoryComponent implements OnInit {

  @Output() _categoySelected: EventEmitter<CategoryScheme> = new EventEmitter<CategoryScheme>();

  categoriesList: CategoryScheme[] = [];

  constructor(
    private db: DatabaseGenericService<CategoryScheme>,
  ) { }

  ngOnInit() {
    this.db.getData(VariablesEnum.CATEGORIA).subscribe((res: any) => {
      this.categoriesList = res.serverResponse;
    }, (error) => {
      console.log(error);
    });
  }

  formatDate(creado: Date): string {
    const fecha = new Date(creado);
    return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
  }

  onSelectCard(category: CategoryScheme) {
    this._categoySelected.emit(category);
  }

}
