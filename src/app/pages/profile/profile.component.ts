import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from '../../services/user.service';
import {UserApi} from '../../models/user-api.model';


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',

    styleUrls: ['./profile.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
    // user$: Observable<any>=({}) ;
    // initialize te  variable
    user$: Observable<UserApi> = of({
        data: {
            id: 1,
            email: "",
            first_name: "",
            last_name: "",
            avatar: ""
        },
        support: {
            url: "",
            text: ""
        }
    });


    constructor(
        private userService: UserService,
        private readonly route: ActivatedRoute
    ) {
        //  getting the user at   the first call of the component
        this.getUser()

    }

    ngOnInit(): void {
        this.getUser();
    }

    * getUser(): any {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.user$ = this.userService.getUserFromId(id);
    }
}
