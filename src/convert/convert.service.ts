import { Injectable } from '@nestjs/common';
import { ConvertMeterDTO } from './dto/convert-meters.dto.js';

@Injectable()
export class ConvertService {
    convertMeters(params: ConvertMeterDTO) {
        const meters = params.meters
        const kilometers = meters/1000
        const centimeter = meters*100
        const miles = meters*39370.1

        return{
            success: true,
            message:`Length has converted`,
            data:{
                meters,
                kilometers,
                centimeter,
                miles
            }
        }
    }
        
}