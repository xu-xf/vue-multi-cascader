import VMultiCascader from './multi-cascader'

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  Vue.component(VMultiCascader.name, VMultiCascader)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  VMultiCascader
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  VMultiCascader
}
