import{a as r,b as t,c as o}from"./chunk-95c70dfb.js";function e(r){return Math.round(5*(r-32)/9)}function a(r){return Math.floor(Math.random()*Math.floor(r))}function i(){let r="R";return r+=String.fromCharCode(15),r+=String.fromCharCode(0),r+=String.fromCharCode(0),r+=String.fromCharCode(0),r+=String.fromCharCode(0),r+=String.fromCharCode(0),r+=String.fromCharCode(0),r+=String.fromCharCode(a(255)),r+=String.fromCharCode(a(255)),r+=String.fromCharCode(a(255)),r+=String.fromCharCode(a(255)),r+=String.fromCharCode(a(255)),r+=String.fromCharCode(a(255)),r+=String.fromCharCode(a(255)),(r+=String.fromCharCode(a(255)))+String.fromCharCode(a(255))}function n(r,t){let o="M";return o+=String.fromCharCode(15),o+=String.fromCharCode(r),o+=String.fromCharCode(t),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),(o+=String.fromCharCode(a(255)))+String.fromCharCode(a(255))}function C(r,t){let o="O";return o+=String.fromCharCode(15),o+=String.fromCharCode(255&r),o+=String.fromCharCode(r>>8&255),o+=String.fromCharCode(255&t),o+=String.fromCharCode(t>>8&255),o+=String.fromCharCode(t>>16&255),o+=String.fromCharCode(t>>24&255),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),o+=String.fromCharCode(a(255)),(o+=String.fromCharCode(a(255)))+String.fromCharCode(a(255))}var g;!function(r){r[r.QRPMT_Base=1]="QRPMT_Base",r[r.QRPMT_Toggle=2]="QRPMT_Toggle",r[r.QRPMT_Range=3]="QRPMT_Range"}(g||(g={}));class s{constructor(r){this.pageTitle="",this.pageBottomText="",this.pageBottomButtonText="",this.pageBottomButtonHref="",this.qrCodeData=r,this.type=g.QRPMT_Base}setSettingsName(r){this._settingName=r}getData(){return r(this._settingName)}setData(r){t(this._settingName,r)}getQRCodeData(){return this.qrCodeData}}class h extends s{constructor(r){super(r),this.workingOptionId=0,this.type=g.QRPMT_Toggle}setSettingsName(r){super.setSettingsName(r),this.pageBottomText=!0===o(r)?this.toggledMessage:this.untoggledMessage}setData(r){t(this._settingName,r),this.pageBottomText=!0===o(this._settingName)?this.toggledMessage:this.untoggledMessage,this.qrCodeData=C(this.workingOptionId,r)}}class d extends s{constructor(r){super(r),this.workingOptionId=0,this.type=g.QRPMT_Range}setSettingsName(r){super.setSettingsName(r)}setData(r){t(this._settingName,r),this.qrCodeData=C(this.workingOptionId,r)}}export{s as a,n as b,e as c,g as d,h as e,d as f,C as g,i as h};