import { SystemEntryService } from '../config/SystemEntryService';

export class SefServices {

    public async GpSEF(UserFeatureId) {
        let sefscreen = {
            user: '',
            homedata: '',
        }
        await fetch(`${SystemEntryService.apiGatewayURL}/web/getuser/${UserFeatureId}`)
            .then(res => res.json().then(data => ({data})))
            .then( async(obj) => 
                sefscreen.user = obj.data
            );
        await fetch(`${SystemEntryService.apiGatewayURL}/web/homedata/created_by?createdby=${UserFeatureId}`)
        .then(res => res.json().then(data => ({data})))
        .then(obj => 
            sefscreen.homedata = obj.data
        );
        return sefscreen;
    }
}