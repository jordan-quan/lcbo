import NonVQAColumns from './columns/NonVQAColumns'
import VQAColumns from './columns/VQAColumns'
import VQAOColumns from './columns/VQAOColumns'
import DutyFreeColumns from './columns/DutyFreeColumns'
import J10Coumns from './columns/J10Columns'
import WRSColumns from './columns/WRSColumns'
import FarmersColumns from './columns/FarmersColumns'
import LocationColumns from './columns/LocationColumns'
import ContainerDepositsColumns from './columns/ContainerDepositsColumns'

import * as models from '../models/models'

import {
  NON_VQA,
  VQA,
  VQAO_SALES_REPORT,
  DUTY_FREE,
  J10,
  WRS,
  LOCATION,
  FARMERS,
  CONTAINER_DEPOSITS,
  LCB_J10
} from './sheetNames'

export const NON_VQA_SHEET = {
  name: NON_VQA,
  startRow: 20,
  startCol: 0,
  filterColumn: 22,
  columnNames: Object.values(NonVQAColumns),
  model: models.NonVQA
}

export const VQA_SHEET = {
  name: VQA,
  startRow: 20,
  startCol: 1,
  filterColumn: 23,
  columnNames: Object.values(VQAColumns),
  model: models.VQA
}

export const VQAO_SHEET = {
  name: VQAO_SALES_REPORT,
  startRow: 9,
  startCol: 1,
  filterColumn: 21,
  columnNames: Object.values(VQAOColumns),
  model: models.VQAO
}

export const DUTY_FREE_SHEET = {
  name: DUTY_FREE,
  startRow: 18,
  startCol: 0,
  filterColumn: 18,
  columnNames: Object.values(DutyFreeColumns),
  model: models.DutyFree
}

export const LCB_J10_SHEET = {
  name: LCB_J10,
  outputSheets: [
    {
      name: J10,
      header: /Sales Channel \(Excluding applicable taxes & deposits\)/,
      endHeader: /Total Sales/,
      columnNames: Object.values(J10Coumns),
      model: models.J10
    },
    {
      name: WRS,
      header: /Product Type/,
      endHeader: /Total( WRS)?/,
      columnNames: Object.values(WRSColumns),
      model: models.WRS
    },
    {
      name: LOCATION,
      header: /Location Type/,
      endHeader: /Total/,
      columnNames: Object.values(LocationColumns),
      model: models.Location
    },
    {
      name: FARMERS,
      header: /Farmers' Market/,
      endHeader: /Total Farmers' Market/,
      columnNames: Object.values(FarmersColumns),
      model: models.Farmers
    },
    // remove: must be descending order
    {
      name: CONTAINER_DEPOSITS,
      header: /Deposits Collected by Channel/,
      endHeader: /Total Containers and Deposits/,
      columnNames: Object.values(ContainerDepositsColumns),
      model: models.ContainerDeposits,
      categories: [
        { label: '<=100', end: 9 },
        { label: '>100 & <=630', end: 18 },
        { label: '>630' }
      ]
    }
  ]
}

export const sheets = [NON_VQA_SHEET, VQA_SHEET, VQAO_SHEET, DUTY_FREE_SHEET, LCB_J10_SHEET]
