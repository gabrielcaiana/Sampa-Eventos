import { wrapFunctional } from './utils'

export { default as Button } from '../../components/atoms/Button.vue'
export { default as ForgotPassword } from '../../components/atoms/ForgotPassword.vue'
export { default as Input } from '../../components/atoms/Input.vue'
export { default as Logo } from '../../components/atoms/Logo.vue'
export { default as Select } from '../../components/atoms/Select.vue'
export { default as ForgotDialog } from '../../components/molecules/ForgotDialog.vue'
export { default as FormLogin } from '../../components/molecules/FormLogin.vue'
export { default as FormRegister } from '../../components/molecules/FormRegister.vue'
export { default as LoginCard } from '../../components/organisms/LoginCard.vue'
export { default as RegisterCard } from '../../components/organisms/RegisterCard.vue'
export { default as LoginTemplate } from '../../components/templates/LoginTemplate.vue'
export { default as RegisterTemplate } from '../../components/templates/RegisterTemplate.vue'

export const LazyButton = import('../../components/atoms/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyForgotPassword = import('../../components/atoms/ForgotPassword.vue' /* webpackChunkName: "components/forgot-password" */).then(c => wrapFunctional(c.default || c))
export const LazyInput = import('../../components/atoms/Input.vue' /* webpackChunkName: "components/input" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/atoms/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazySelect = import('../../components/atoms/Select.vue' /* webpackChunkName: "components/select" */).then(c => wrapFunctional(c.default || c))
export const LazyForgotDialog = import('../../components/molecules/ForgotDialog.vue' /* webpackChunkName: "components/forgot-dialog" */).then(c => wrapFunctional(c.default || c))
export const LazyFormLogin = import('../../components/molecules/FormLogin.vue' /* webpackChunkName: "components/form-login" */).then(c => wrapFunctional(c.default || c))
export const LazyFormRegister = import('../../components/molecules/FormRegister.vue' /* webpackChunkName: "components/form-register" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginCard = import('../../components/organisms/LoginCard.vue' /* webpackChunkName: "components/login-card" */).then(c => wrapFunctional(c.default || c))
export const LazyRegisterCard = import('../../components/organisms/RegisterCard.vue' /* webpackChunkName: "components/register-card" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginTemplate = import('../../components/templates/LoginTemplate.vue' /* webpackChunkName: "components/login-template" */).then(c => wrapFunctional(c.default || c))
export const LazyRegisterTemplate = import('../../components/templates/RegisterTemplate.vue' /* webpackChunkName: "components/register-template" */).then(c => wrapFunctional(c.default || c))
