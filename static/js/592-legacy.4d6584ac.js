(self["webpackChunkpc_manage"]=self["webpackChunkpc_manage"]||[]).push([[592],{2592:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"manage"},[r("el-dialog",{attrs:{title:"add"===e.operateType?"新增用户":"更新信息",visible:e.isShow},on:{"update:visible":function(t){e.isShow=t}}},[r("common-form",{ref:"form",attrs:{formLabel:e.operateFormLabel,form:e.operateForm,inline:!0}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")])],1)],1),r("div",{staticClass:"manage-header"},[r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("+新增")]),r("div",{staticClass:"search-form"},[r("common-form",{ref:"form",attrs:{formLabel:e.formLabel,form:e.searchForm,inline:!0}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(e.searchForm.keyword)}}},[e._v("搜索")])],1)],1)],1),r("common-table",{attrs:{tableData:e.tableData,tableLabel:e.tableLabel,config:e.config},on:{changePage:function(t){return e.changePage()},edit:e.editUser,del:e.delUser}})],1)},o=[],a=r(1797),l=(r(1249),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.form,inline:e.inline}},[e._l(e.formLabel,(function(t){return r("el-form-item",{key:t.label,attrs:{label:t.label}},["input"===t.type?r("el-input",{attrs:{placeholder:"请输入"+t.label},model:{value:e.localForm[t.model],callback:function(r){e.$set(e.localForm,t.model,r)},expression:"localForm[item.model]"}}):e._e(),"switch"===t.type?r("el-switch",{model:{value:e.localForm[t.model],callback:function(r){e.$set(e.localForm,t.model,r)},expression:"localForm[item.model]"}}):e._e(),"date"===t.type?r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.localForm[t.model],callback:function(r){e.$set(e.localForm,t.model,r)},expression:"localForm[item.model]"}}):e._e(),"select"===t.type?r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.localForm[t.model],callback:function(r){e.$set(e.localForm,t.model,r)},expression:"localForm[item.model]"}},e._l(t.opts,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)})),r("el-form-item",[e._t("default")],2)],2)}),i=[],c={data:function(){return{localForm:this.form}},watch:{form:{handler:function(e){this.localForm=e},immediate:!0,deep:!0}},props:{formLabel:Array,form:Object,inline:Boolean}},s=c,u=r(1001),f=(0,u.Z)(s,l,i,!1,null,"03d1eff0",null),p=f.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"common-table"},[r("el-table",{attrs:{data:e.tableData,height:"90%",stripe:""}},[e._l(e.tableLabel,(function(t){return r("el-table-column",{key:t.prop,attrs:{"show-overflow-tooltip":"",label:t.label,width:"item.width ? item.width : 125"},scopedSlots:e._u([{key:"default",fn:function(n){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(n.row[t.prop]))])]}}],null,!0)})})),r("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.handleEdit(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],2),r("el-pagination",{staticClass:"pager",attrs:{layout:"prev, pager, next",total:e.config.total,"current-page":e.config.page,"page-size":20},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-change":e.changePage}})],1)},d=[],b={data:function(){return{}},props:{tableData:Array,tableLabel:Array,config:{type:Object}},methods:{handleEdit:function(e){this.$emit("edit",e)},handleDelete:function(e){this.$emit("del",e)},changePage:function(e){this.$emit("changePage",e)}}},h=b,g=(0,u.Z)(h,m,d,!1,null,"46b4834c",null),y=g.exports,v=r(970),w={components:{CommonForm:p,CommonTable:y},data:function(){return{operateType:"add",isShow:!1,operateFormLabel:[{model:"name",label:"姓名",type:"input"},{model:"age",label:"年龄",type:"input"},{model:"sex",label:"性别",type:"select",opts:[{label:"男",value:1},{label:"女",value:0}]},{model:"birth",label:"出生日期",type:"date"},{model:"addr",label:"地址",type:"input"}],operateForm:{name:"",addr:"",age:"",birth:"",sex:""},searchForm:{keyword:""},tableData:[],tableLabel:[{prop:"name",label:"姓名"},{prop:"age",label:"年龄"},{prop:"sexLabel",label:"性别"},{prop:"birth",label:"出生日期",width:200},{prop:"addr",label:"地址",width:320}],config:{page:1,total:30}}},computed:{formLabel:function(){return[{model:"keyword",label:"",type:"input"}]}},created:function(){this.getList()},methods:{confirm:function(){var e=this;"edit"===this.operateType?this.$axios.post("/user/edit",this.operateForm).then((function(t){e.isShow=!1,e.getList()})):this.$axios.post("/user/add",this.operateForm).then((function(t){e.isShow=!1,e.getList()}))},addUser:function(){this.isShow=!0,this.operateType="add",this.operateForm={name:"",addr:"",age:"",birth:"",sex:""}},getList:function(e){var t=this;console.log(11,e),this.config.loading=!0,this.config.page=e?1:0;var r={page:this.config.page,name:e};console.log("payload",r),(0,v.PR)(r).then((function(e){var r=e.data;console.log("res",r),t.tableData=r.list.map((function(e){return e.sexLabel=0===e.sex?"女":"男",e})),t.config.total=r.count,t.config.loading=!0}))},editUser:function(e){this.operateType="edit",this.isShow=!0,this.operateForm=(0,a.Z)({},e)},delUser:function(e){var t=this;this.$confirm("此操作将永久删除该组件，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r=e.id;t.$axios.post("user/del",{params:{id:r}}).then((function(){t.$message({type:"success",message:"删除成功"}),t.getList()}))}))},changePage:function(e){this.getList()}}},k=w,L=(0,u.Z)(k,n,o,!1,null,"703a59be",null),O=L.exports},970:function(e,t,r){"use strict";r.d(t,{Yu:function(){return d},r7:function(){return m},PR:function(){return b}});var n=r(1797);r(1703);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r(1539);var i=r(9669),c=r.n(i),s={baseURL:{dev:"/api/",pro:""}},u=s.baseURL.pro,f=function(){function e(t){o(this,e),this.baseURL=t}return l(e,[{key:"getInsideConfig",value:function(){var e={baseURL:this.baseURL,header:{}};return e}},{key:"interceptors",value:function(e){e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}},{key:"request",value:function(e){var t=c().create();return e=(0,n.Z)((0,n.Z)({},this.getInsideConfig()),e),this.interceptors(t),t(e)}}]),e}(),p=new f(u),m=function(e){return p.request({url:"/permission/getMenu",method:"post",data:e})},d=function(){return p.request({url:"/home/getData",method:"get"})},b=function(e){return p.request({url:"/user/getUser",method:"get",data:e})}},5003:function(e,t,r){var n=r(2109),o=r(7293),a=r(5656),l=r(1236).f,i=r(9781),c=o((function(){l(1)})),s=!i||c;n({target:"Object",stat:!0,forced:s,sham:!i},{getOwnPropertyDescriptor:function(e,t){return l(a(e),t)}})},9337:function(e,t,r){var n=r(2109),o=r(9781),a=r(3887),l=r(5656),i=r(1236),c=r(6135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,n=l(e),o=i.f,s=a(n),u={},f=0;while(s.length>f)r=o(n,t=s[f++]),void 0!==r&&c(u,t,r);return u}})},7941:function(e,t,r){var n=r(2109),o=r(7908),a=r(1956),l=r(7293),i=l((function(){a(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(e){return a(o(e))}})},1797:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=592-legacy.4d6584ac.js.map