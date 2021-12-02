import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Filter} from '@loopback/repository';
import {WaterConsumption} from '../models';
import csv = require("csvtojson");
var applyFilter = require('loopback-filters');

@injectable({scope: BindingScope.TRANSIENT})
export class WaterBillDataService {
  constructor(/* Add @inject to inject parameters */) { }

  async getAll(
    filter?: Filter<WaterConsumption>,
  ): Promise<Array<WaterConsumption>> {

    var gasFiles = await csv().fromFile('data/water_bill_data.csv');




    var filtered = applyFilter(gasFiles, filter);


    return filtered;
    ;
  }
}
