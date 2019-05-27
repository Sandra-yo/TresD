import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { UserScheme } from '../../schemes/users/user.scheme';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers: [DatabaseGenericService]
})
export class ListUserComponent implements OnInit {

  @Output() _userSelected: EventEmitter<UserScheme> = new EventEmitter<UserScheme>();

  userList: UserScheme[] = [];
  userListBackup: UserScheme[] = [];
  serach = '';
  constructor(
    private db: DatabaseGenericService<UserScheme>,
  ) { }

  ngOnInit() {
    this.db.getData(VariablesEnum.USER_INFO).subscribe((res: any) => {
      this.userList = res.serverResponse;
      this.userListBackup = [...this.userList];
    }, (error) => {
      console.log(error);
    });
  }

  formatDate(creado: Date): string {
    const fecha = new Date(creado);
    return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
  }

  onSelectCard(product: UserScheme) {
    this._userSelected.emit(product);
  }

  /* a(a: any) {
    typeof a === string;
  } */
  onSearch($event: any) {
    this.serach = $event.target.value;
    this.userList = [];
    this.userListBackup.forEach((user) => {
      if (user.nombre.toLowerCase().includes(this.serach.toLowerCase())) {
        this.userList.push(user);
      }
    });
  }
}
