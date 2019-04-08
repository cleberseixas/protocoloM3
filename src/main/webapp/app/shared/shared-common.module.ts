import { NgModule } from '@angular/core';

import { ProtocoloM3SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProtocoloM3SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProtocoloM3SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProtocoloM3SharedCommonModule {}
