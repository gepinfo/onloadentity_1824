import { Request, Response } from 'express';
import {homedataDao} from '../dao/homedataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let homedata = new homedataDao();

export class homedataService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpDelete')
     let  homedataId = req.params.id;
     homedata.GpDelete(homedataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpSearch')
     let  homedataData = req.query;
     homedata.GpSearch(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpUpdate')
     let  homedataData = req.body;
     homedata.GpUpdate(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpGetNounById')
     let  homedataId = req.params.id;
     homedata.GpGetNounById(homedataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpGetAllValues')
     
     homedata.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpCreate')
     let  homedataData = req.body;
     homedata.GpCreate(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}