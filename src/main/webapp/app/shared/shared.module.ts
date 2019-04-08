import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { ProtocoloM3SharedLibsModule, ProtocoloM3SharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [ProtocoloM3SharedLibsModule, ProtocoloM3SharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [ProtocoloM3SharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProtocoloM3SharedModule {
    static forRoot() {
        return {
            ngModule: ProtocoloM3SharedModule
        };
    }
}
