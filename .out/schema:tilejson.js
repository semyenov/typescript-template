"use strict";export const validate = validate10;export default validate10;const schema11 = {"$id":"tilejson","$schema":"http://json-schema.org/draft-07/schema","additionalProperties":true,"properties":{"attribution":{"type":"string"},"bounds":{"items":{"type":"number"},"type":"array"},"center":{"items":{"type":"number"},"type":"array"},"data":{"items":{"type":"string"},"type":"array"},"description":{"type":"string"},"fillzoom":{"maximum":30,"minimum":0,"type":"integer"},"grids":{"items":{"type":"string"},"type":"array"},"legend":{"type":"string"},"maxzoom":{"maximum":30,"minimum":0,"type":"integer"},"minzoom":{"maximum":30,"minimum":0,"type":"integer"},"name":{"type":"string"},"scheme":{"type":"string"},"template":{"type":"string"},"tilejson":{"pattern":"\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*","type":"string"},"tiles":{"items":{"type":"string"},"type":"array"},"vector_layers":{"items":{"additionalProperties":true,"properties":{"description":{"type":"string"},"fields":{"additionalProperties":{"type":"string"},"type":"object"},"id":{"type":"string"},"maxzoom":{"type":"integer"},"minzoom":{"type":"integer"}},"required":["id","fields"],"type":"object"},"type":"array"},"version":{"pattern":"\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*","type":"string"}},"required":["tilejson","tiles","vector_layers"],"title":"TileJSON","type":"object"};const func0 = Object.prototype.hasOwnProperty;const pattern0 = new RegExp("\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*", "u");function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="tilejson" */;let vErrors = null;let errors = 0;if(data && typeof data == "object" && !Array.isArray(data)){if((data.tilejson === undefined) || (!(func0.call(data, "tilejson")))){const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "tilejson"},message:"must have required property '"+"tilejson"+"'",schema:schema11.required,parentSchema:schema11,data};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}if((data.tiles === undefined) || (!(func0.call(data, "tiles")))){const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "tiles"},message:"must have required property '"+"tiles"+"'",schema:schema11.required,parentSchema:schema11,data};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}if((data.vector_layers === undefined) || (!(func0.call(data, "vector_layers")))){const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "vector_layers"},message:"must have required property '"+"vector_layers"+"'",schema:schema11.required,parentSchema:schema11,data};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}if(data.attribution !== undefined && func0.call(data, "attribution")){let data0 = data.attribution;if(typeof data0 !== "string"){const err3 = {instancePath:instancePath+"/attribution",schemaPath:"#/properties/attribution/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.attribution.type,parentSchema:schema11.properties.attribution,data:data0};if(vErrors === null){vErrors = [err3];}else {vErrors.push(err3);}errors++;}}if(data.bounds !== undefined && func0.call(data, "bounds")){let data1 = data.bounds;if(Array.isArray(data1)){const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];if(!((typeof data2 == "number") && (isFinite(data2)))){const err4 = {instancePath:instancePath+"/bounds/" + i0,schemaPath:"#/properties/bounds/items/type",keyword:"type",params:{type: "number"},message:"must be number",schema:schema11.properties.bounds.items.type,parentSchema:schema11.properties.bounds.items,data:data2};if(vErrors === null){vErrors = [err4];}else {vErrors.push(err4);}errors++;}}}else {const err5 = {instancePath:instancePath+"/bounds",schemaPath:"#/properties/bounds/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema11.properties.bounds.type,parentSchema:schema11.properties.bounds,data:data1};if(vErrors === null){vErrors = [err5];}else {vErrors.push(err5);}errors++;}}if(data.center !== undefined && func0.call(data, "center")){let data3 = data.center;if(Array.isArray(data3)){const len1 = data3.length;for(let i1=0; i1<len1; i1++){let data4 = data3[i1];if(!((typeof data4 == "number") && (isFinite(data4)))){const err6 = {instancePath:instancePath+"/center/" + i1,schemaPath:"#/properties/center/items/type",keyword:"type",params:{type: "number"},message:"must be number",schema:schema11.properties.center.items.type,parentSchema:schema11.properties.center.items,data:data4};if(vErrors === null){vErrors = [err6];}else {vErrors.push(err6);}errors++;}}}else {const err7 = {instancePath:instancePath+"/center",schemaPath:"#/properties/center/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema11.properties.center.type,parentSchema:schema11.properties.center,data:data3};if(vErrors === null){vErrors = [err7];}else {vErrors.push(err7);}errors++;}}if(data.data !== undefined && func0.call(data, "data")){let data5 = data.data;if(Array.isArray(data5)){const len2 = data5.length;for(let i2=0; i2<len2; i2++){let data6 = data5[i2];if(typeof data6 !== "string"){const err8 = {instancePath:instancePath+"/data/" + i2,schemaPath:"#/properties/data/items/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.data.items.type,parentSchema:schema11.properties.data.items,data:data6};if(vErrors === null){vErrors = [err8];}else {vErrors.push(err8);}errors++;}}}else {const err9 = {instancePath:instancePath+"/data",schemaPath:"#/properties/data/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema11.properties.data.type,parentSchema:schema11.properties.data,data:data5};if(vErrors === null){vErrors = [err9];}else {vErrors.push(err9);}errors++;}}if(data.description !== undefined && func0.call(data, "description")){let data7 = data.description;if(typeof data7 !== "string"){const err10 = {instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.description.type,parentSchema:schema11.properties.description,data:data7};if(vErrors === null){vErrors = [err10];}else {vErrors.push(err10);}errors++;}}if(data.fillzoom !== undefined && func0.call(data, "fillzoom")){let data8 = data.fillzoom;if(!(((typeof data8 == "number") && (!(data8 % 1) && !isNaN(data8))) && (isFinite(data8)))){const err11 = {instancePath:instancePath+"/fillzoom",schemaPath:"#/properties/fillzoom/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema11.properties.fillzoom.type,parentSchema:schema11.properties.fillzoom,data:data8};if(vErrors === null){vErrors = [err11];}else {vErrors.push(err11);}errors++;}if((typeof data8 == "number") && (isFinite(data8))){if(data8 > 30 || isNaN(data8)){const err12 = {instancePath:instancePath+"/fillzoom",schemaPath:"#/properties/fillzoom/maximum",keyword:"maximum",params:{comparison: "<=", limit: 30},message:"must be <= 30",schema:30,parentSchema:schema11.properties.fillzoom,data:data8};if(vErrors === null){vErrors = [err12];}else {vErrors.push(err12);}errors++;}if(data8 < 0 || isNaN(data8)){const err13 = {instancePath:instancePath+"/fillzoom",schemaPath:"#/properties/fillzoom/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0",schema:0,parentSchema:schema11.properties.fillzoom,data:data8};if(vErrors === null){vErrors = [err13];}else {vErrors.push(err13);}errors++;}}}if(data.grids !== undefined && func0.call(data, "grids")){let data9 = data.grids;if(Array.isArray(data9)){const len3 = data9.length;for(let i3=0; i3<len3; i3++){let data10 = data9[i3];if(typeof data10 !== "string"){const err14 = {instancePath:instancePath+"/grids/" + i3,schemaPath:"#/properties/grids/items/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.grids.items.type,parentSchema:schema11.properties.grids.items,data:data10};if(vErrors === null){vErrors = [err14];}else {vErrors.push(err14);}errors++;}}}else {const err15 = {instancePath:instancePath+"/grids",schemaPath:"#/properties/grids/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema11.properties.grids.type,parentSchema:schema11.properties.grids,data:data9};if(vErrors === null){vErrors = [err15];}else {vErrors.push(err15);}errors++;}}if(data.legend !== undefined && func0.call(data, "legend")){let data11 = data.legend;if(typeof data11 !== "string"){const err16 = {instancePath:instancePath+"/legend",schemaPath:"#/properties/legend/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.legend.type,parentSchema:schema11.properties.legend,data:data11};if(vErrors === null){vErrors = [err16];}else {vErrors.push(err16);}errors++;}}if(data.maxzoom !== undefined && func0.call(data, "maxzoom")){let data12 = data.maxzoom;if(!(((typeof data12 == "number") && (!(data12 % 1) && !isNaN(data12))) && (isFinite(data12)))){const err17 = {instancePath:instancePath+"/maxzoom",schemaPath:"#/properties/maxzoom/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema11.properties.maxzoom.type,parentSchema:schema11.properties.maxzoom,data:data12};if(vErrors === null){vErrors = [err17];}else {vErrors.push(err17);}errors++;}if((typeof data12 == "number") && (isFinite(data12))){if(data12 > 30 || isNaN(data12)){const err18 = {instancePath:instancePath+"/maxzoom",schemaPath:"#/properties/maxzoom/maximum",keyword:"maximum",params:{comparison: "<=", limit: 30},message:"must be <= 30",schema:30,parentSchema:schema11.properties.maxzoom,data:data12};if(vErrors === null){vErrors = [err18];}else {vErrors.push(err18);}errors++;}if(data12 < 0 || isNaN(data12)){const err19 = {instancePath:instancePath+"/maxzoom",schemaPath:"#/properties/maxzoom/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0",schema:0,parentSchema:schema11.properties.maxzoom,data:data12};if(vErrors === null){vErrors = [err19];}else {vErrors.push(err19);}errors++;}}}if(data.minzoom !== undefined && func0.call(data, "minzoom")){let data13 = data.minzoom;if(!(((typeof data13 == "number") && (!(data13 % 1) && !isNaN(data13))) && (isFinite(data13)))){const err20 = {instancePath:instancePath+"/minzoom",schemaPath:"#/properties/minzoom/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema11.properties.minzoom.type,parentSchema:schema11.properties.minzoom,data:data13};if(vErrors === null){vErrors = [err20];}else {vErrors.push(err20);}errors++;}if((typeof data13 == "number") && (isFinite(data13))){if(data13 > 30 || isNaN(data13)){const err21 = {instancePath:instancePath+"/minzoom",schemaPath:"#/properties/minzoom/maximum",keyword:"maximum",params:{comparison: "<=", limit: 30},message:"must be <= 30",schema:30,parentSchema:schema11.properties.minzoom,data:data13};if(vErrors === null){vErrors = [err21];}else {vErrors.push(err21);}errors++;}if(data13 < 0 || isNaN(data13)){const err22 = {instancePath:instancePath+"/minzoom",schemaPath:"#/properties/minzoom/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0",schema:0,parentSchema:schema11.properties.minzoom,data:data13};if(vErrors === null){vErrors = [err22];}else {vErrors.push(err22);}errors++;}}}if(data.name !== undefined && func0.call(data, "name")){let data14 = data.name;if(typeof data14 !== "string"){const err23 = {instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.name.type,parentSchema:schema11.properties.name,data:data14};if(vErrors === null){vErrors = [err23];}else {vErrors.push(err23);}errors++;}}if(data.scheme !== undefined && func0.call(data, "scheme")){let data15 = data.scheme;if(typeof data15 !== "string"){const err24 = {instancePath:instancePath+"/scheme",schemaPath:"#/properties/scheme/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.scheme.type,parentSchema:schema11.properties.scheme,data:data15};if(vErrors === null){vErrors = [err24];}else {vErrors.push(err24);}errors++;}}if(data.template !== undefined && func0.call(data, "template")){let data16 = data.template;if(typeof data16 !== "string"){const err25 = {instancePath:instancePath+"/template",schemaPath:"#/properties/template/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.template.type,parentSchema:schema11.properties.template,data:data16};if(vErrors === null){vErrors = [err25];}else {vErrors.push(err25);}errors++;}}if(data.tilejson !== undefined && func0.call(data, "tilejson")){let data17 = data.tilejson;if(typeof data17 === "string"){if(!pattern0.test(data17)){const err26 = {instancePath:instancePath+"/tilejson",schemaPath:"#/properties/tilejson/pattern",keyword:"pattern",params:{pattern: "\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*"},message:"must match pattern \""+"\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*"+"\"",schema:"\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*",parentSchema:schema11.properties.tilejson,data:data17};if(vErrors === null){vErrors = [err26];}else {vErrors.push(err26);}errors++;}}else {const err27 = {instancePath:instancePath+"/tilejson",schemaPath:"#/properties/tilejson/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.tilejson.type,parentSchema:schema11.properties.tilejson,data:data17};if(vErrors === null){vErrors = [err27];}else {vErrors.push(err27);}errors++;}}if(data.tiles !== undefined && func0.call(data, "tiles")){let data18 = data.tiles;if(Array.isArray(data18)){const len4 = data18.length;for(let i4=0; i4<len4; i4++){let data19 = data18[i4];if(typeof data19 !== "string"){const err28 = {instancePath:instancePath+"/tiles/" + i4,schemaPath:"#/properties/tiles/items/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.tiles.items.type,parentSchema:schema11.properties.tiles.items,data:data19};if(vErrors === null){vErrors = [err28];}else {vErrors.push(err28);}errors++;}}}else {const err29 = {instancePath:instancePath+"/tiles",schemaPath:"#/properties/tiles/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema11.properties.tiles.type,parentSchema:schema11.properties.tiles,data:data18};if(vErrors === null){vErrors = [err29];}else {vErrors.push(err29);}errors++;}}if(data.vector_layers !== undefined && func0.call(data, "vector_layers")){let data20 = data.vector_layers;if(Array.isArray(data20)){const len5 = data20.length;for(let i5=0; i5<len5; i5++){let data21 = data20[i5];if(data21 && typeof data21 == "object" && !Array.isArray(data21)){if((data21.id === undefined) || (!(func0.call(data21, "id")))){const err30 = {instancePath:instancePath+"/vector_layers/" + i5,schemaPath:"#/properties/vector_layers/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'",schema:schema11.properties.vector_layers.items.required,parentSchema:schema11.properties.vector_layers.items,data:data21};if(vErrors === null){vErrors = [err30];}else {vErrors.push(err30);}errors++;}if((data21.fields === undefined) || (!(func0.call(data21, "fields")))){const err31 = {instancePath:instancePath+"/vector_layers/" + i5,schemaPath:"#/properties/vector_layers/items/required",keyword:"required",params:{missingProperty: "fields"},message:"must have required property '"+"fields"+"'",schema:schema11.properties.vector_layers.items.required,parentSchema:schema11.properties.vector_layers.items,data:data21};if(vErrors === null){vErrors = [err31];}else {vErrors.push(err31);}errors++;}if(data21.description !== undefined && func0.call(data21, "description")){let data22 = data21.description;if(typeof data22 !== "string"){const err32 = {instancePath:instancePath+"/vector_layers/" + i5+"/description",schemaPath:"#/properties/vector_layers/items/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.vector_layers.items.properties.description.type,parentSchema:schema11.properties.vector_layers.items.properties.description,data:data22};if(vErrors === null){vErrors = [err32];}else {vErrors.push(err32);}errors++;}}if(data21.fields !== undefined && func0.call(data21, "fields")){let data23 = data21.fields;if(data23 && typeof data23 == "object" && !Array.isArray(data23)){for(const key0 of Object.keys(data23)){let data24 = data23[key0];if(typeof data24 !== "string"){const err33 = {instancePath:instancePath+"/vector_layers/" + i5+"/fields/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/properties/vector_layers/items/properties/fields/additionalProperties/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.vector_layers.items.properties.fields.additionalProperties.type,parentSchema:schema11.properties.vector_layers.items.properties.fields.additionalProperties,data:data24};if(vErrors === null){vErrors = [err33];}else {vErrors.push(err33);}errors++;}}}else {const err34 = {instancePath:instancePath+"/vector_layers/" + i5+"/fields",schemaPath:"#/properties/vector_layers/items/properties/fields/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema11.properties.vector_layers.items.properties.fields.type,parentSchema:schema11.properties.vector_layers.items.properties.fields,data:data23};if(vErrors === null){vErrors = [err34];}else {vErrors.push(err34);}errors++;}}if(data21.id !== undefined && func0.call(data21, "id")){let data25 = data21.id;if(typeof data25 !== "string"){const err35 = {instancePath:instancePath+"/vector_layers/" + i5+"/id",schemaPath:"#/properties/vector_layers/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.vector_layers.items.properties.id.type,parentSchema:schema11.properties.vector_layers.items.properties.id,data:data25};if(vErrors === null){vErrors = [err35];}else {vErrors.push(err35);}errors++;}}if(data21.maxzoom !== undefined && func0.call(data21, "maxzoom")){let data26 = data21.maxzoom;if(!(((typeof data26 == "number") && (!(data26 % 1) && !isNaN(data26))) && (isFinite(data26)))){const err36 = {instancePath:instancePath+"/vector_layers/" + i5+"/maxzoom",schemaPath:"#/properties/vector_layers/items/properties/maxzoom/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema11.properties.vector_layers.items.properties.maxzoom.type,parentSchema:schema11.properties.vector_layers.items.properties.maxzoom,data:data26};if(vErrors === null){vErrors = [err36];}else {vErrors.push(err36);}errors++;}}if(data21.minzoom !== undefined && func0.call(data21, "minzoom")){let data27 = data21.minzoom;if(!(((typeof data27 == "number") && (!(data27 % 1) && !isNaN(data27))) && (isFinite(data27)))){const err37 = {instancePath:instancePath+"/vector_layers/" + i5+"/minzoom",schemaPath:"#/properties/vector_layers/items/properties/minzoom/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema11.properties.vector_layers.items.properties.minzoom.type,parentSchema:schema11.properties.vector_layers.items.properties.minzoom,data:data27};if(vErrors === null){vErrors = [err37];}else {vErrors.push(err37);}errors++;}}}else {const err38 = {instancePath:instancePath+"/vector_layers/" + i5,schemaPath:"#/properties/vector_layers/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema11.properties.vector_layers.items.type,parentSchema:schema11.properties.vector_layers.items,data:data21};if(vErrors === null){vErrors = [err38];}else {vErrors.push(err38);}errors++;}}}else {const err39 = {instancePath:instancePath+"/vector_layers",schemaPath:"#/properties/vector_layers/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema11.properties.vector_layers.type,parentSchema:schema11.properties.vector_layers,data:data20};if(vErrors === null){vErrors = [err39];}else {vErrors.push(err39);}errors++;}}if(data.version !== undefined && func0.call(data, "version")){let data28 = data.version;if(typeof data28 === "string"){if(!pattern0.test(data28)){const err40 = {instancePath:instancePath+"/version",schemaPath:"#/properties/version/pattern",keyword:"pattern",params:{pattern: "\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*"},message:"must match pattern \""+"\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*"+"\"",schema:"\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*",parentSchema:schema11.properties.version,data:data28};if(vErrors === null){vErrors = [err40];}else {vErrors.push(err40);}errors++;}}else {const err41 = {instancePath:instancePath+"/version",schemaPath:"#/properties/version/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema11.properties.version.type,parentSchema:schema11.properties.version,data:data28};if(vErrors === null){vErrors = [err41];}else {vErrors.push(err41);}errors++;}}}else {const err42 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema11.type,parentSchema:schema11,data};if(vErrors === null){vErrors = [err42];}else {vErrors.push(err42);}errors++;}validate10.errors = vErrors;return errors === 0;}