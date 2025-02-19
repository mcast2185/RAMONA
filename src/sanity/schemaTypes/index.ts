import { type SchemaTypeDefinition } from 'sanity';

import {orderType} from './orderType';
import {designType} from './designType';
import {productType} from './productType';
import {categoryType} from './categoryType';
import {blockContentType} from './blockContentType';


export const schema: { 
  types: SchemaTypeDefinition[] 
} = {
  types: [
    blockContentType, 
    categoryType, 
    productType,
    designType,
    orderType
  ],
};