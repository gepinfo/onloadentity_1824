import * as mongoose from 'mongoose';
import homedataModel from '../models/homedata';
import { CustomLogger } from '../config/Logger'


export class homedataDao {
    private homedata = homedataModel;
    constructor() { }
    
    public async GpDelete(homedataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into homedataDao.ts: GpDelete');

    

    
    
    
    this.homedata.findByIdAndRemove(homedataId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from homedataDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(homedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into homedataDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(homedataData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.homedata.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from homedataDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(homedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into homedataDao.ts: GpUpdate');

    

    
    
    
    this.homedata.findOneAndUpdate({ _id: homedataData._id }, homedataData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from homedataDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(homedataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into homedataDao.ts: GpGetNounById');

    

    
    
    
    this.homedata.findById(homedataId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from homedataDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into homedataDao.ts: GpGetAllValues');

    

    
    
    
    this.homedata.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from homedataDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(homedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into homedataDao.ts: GpCreate');

    let temp = new homedataModel(homedataData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from homedataDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}