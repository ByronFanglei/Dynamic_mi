/**
 * storage封装
 */
const STORAGE_KEY = 'mall'

export default {
  // 存储值
  setItem (key, value, moudleName) {
    if (moudleName) {
      const val = this.getItem(moudleName)
      val[key] = value
      this.setItem(moudleName, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取值
  getItem (key, moudleName) {
    if (moudleName) {
      const val = this.getItem(moudleName)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  // 获取整个数据
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清空某个值
  clear (key, moudleName) {
    const val = this.getStorage()
    if (moudleName) {
      if (!val[moudleName]) return
      delete val[moudleName][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
