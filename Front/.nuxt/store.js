import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  store = normalizeRoot(require('../store/index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('../store/auth/actions.js'), 'auth/actions.js')
  resolveStoreModules(require('../store/auth/getters.js'), 'auth/getters.js')
  resolveStoreModules(require('../store/auth/mutations.js'), 'auth/mutations.js')
  resolveStoreModules(require('../store/auth/state.js'), 'auth/state.js')
  resolveStoreModules(require('../store/dialog/actions.js'), 'dialog/actions.js')
  resolveStoreModules(require('../store/dialog/getters.js'), 'dialog/getters.js')
  resolveStoreModules(require('../store/dialog/mutations.js'), 'dialog/mutations.js')
  resolveStoreModules(require('../store/dialog/state.js'), 'dialog/state.js')
  resolveStoreModules(require('../store/loader/actions.js'), 'loader/actions.js')
  resolveStoreModules(require('../store/loader/getters.js'), 'loader/getters.js')
  resolveStoreModules(require('../store/loader/mutations.js'), 'loader/mutations.js')
  resolveStoreModules(require('../store/loader/state.js'), 'loader/state.js')
  resolveStoreModules(require('../store/snackbar/actions.js'), 'snackbar/actions.js')
  resolveStoreModules(require('../store/snackbar/getters.js'), 'snackbar/getters.js')
  resolveStoreModules(require('../store/snackbar/mutations.js'), 'snackbar/mutations.js')
  resolveStoreModules(require('../store/snackbar/state.js'), 'snackbar/state.js')
  resolveStoreModules(require('../store/user/actions.js'), 'user/actions.js')
  resolveStoreModules(require('../store/user/getters.js'), 'user/getters.js')
  resolveStoreModules(require('../store/user/mutations.js'), 'user/mutations.js')
  resolveStoreModules(require('../store/user/state.js'), 'user/state.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '../store/index.js',
      '../store/auth/actions.js',
      '../store/auth/getters.js',
      '../store/auth/mutations.js',
      '../store/auth/state.js',
      '../store/dialog/actions.js',
      '../store/dialog/getters.js',
      '../store/dialog/mutations.js',
      '../store/dialog/state.js',
      '../store/loader/actions.js',
      '../store/loader/getters.js',
      '../store/loader/mutations.js',
      '../store/loader/state.js',
      '../store/snackbar/actions.js',
      '../store/snackbar/getters.js',
      '../store/snackbar/mutations.js',
      '../store/snackbar/state.js',
      '../store/user/actions.js',
      '../store/user/getters.js',
      '../store/user/mutations.js',
      '../store/user/state.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
