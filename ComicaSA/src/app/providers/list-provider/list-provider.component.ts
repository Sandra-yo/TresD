import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProviderScheme } from '../../schemes/providers/provider.scheme';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css'],
  providers: [DatabaseGenericService],
})
export class ListProviderComponent implements OnInit {

  @Output() _providerSelected: EventEmitter<ProviderScheme> = new EventEmitter<ProviderScheme>();

  providersList: ProviderScheme[] = [];

  constructor(
    private db: DatabaseGenericService<ProviderScheme>,
  ) { }

  ngOnInit() {
    this.db.getData(VariablesEnum.PROVEEDORES).subscribe((res: any) => {
      this.providersList = res.serverResponse;
    }, (error) => {
      console.log(error);
    });
  }

  formatDate(creado: Date): string {
    const fecha = new Date(creado);
    return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
  }

  onSelectCard(provider: ProviderScheme) {
    this._providerSelected.emit(provider);
  }

}
