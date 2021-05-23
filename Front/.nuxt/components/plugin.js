import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Button: () => import('../../components/atoms/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  ForgotPassword: () => import('../../components/atoms/ForgotPassword.vue' /* webpackChunkName: "components/forgot-password" */).then(c => wrapFunctional(c.default || c)),
  Input: () => import('../../components/atoms/Input.vue' /* webpackChunkName: "components/input" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/atoms/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Select: () => import('../../components/atoms/Select.vue' /* webpackChunkName: "components/select" */).then(c => wrapFunctional(c.default || c)),
  FormLogin: () => import('../../components/molecules/FormLogin.vue' /* webpackChunkName: "components/form-login" */).then(c => wrapFunctional(c.default || c)),
  FormRegister: () => import('../../components/molecules/FormRegister.vue' /* webpackChunkName: "components/form-register" */).then(c => wrapFunctional(c.default || c)),
  LoginCard: () => import('../../components/organisms/LoginCard.vue' /* webpackChunkName: "components/login-card" */).then(c => wrapFunctional(c.default || c)),
  RegisterCard: () => import('../../components/organisms/RegisterCard.vue' /* webpackChunkName: "components/register-card" */).then(c => wrapFunctional(c.default || c)),
  LoginTemplate: () => import('../../components/templates/LoginTemplate.vue' /* webpackChunkName: "components/login-template" */).then(c => wrapFunctional(c.default || c)),
  RegisterTemplate: () => import('../../components/templates/RegisterTemplate.vue' /* webpackChunkName: "components/register-template" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
