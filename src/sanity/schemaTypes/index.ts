import { type SchemaTypeDefinition } from 'sanity';

import {productType} from './productType';
import {categoryType} from './categoryType';
import {blockContentType} from './blockContentType';
import {designType} from './designType';
import {orderType} from './orderType';


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