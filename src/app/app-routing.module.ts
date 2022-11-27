import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IPageMeta } from '@ztarmobile/zwp-service';
import {
  ACCOUNT_ROUTE_URLS, LOGIN_ROUTE_URLS, ROUTE_URLS, SHOP_ROUTE_URLS,
  SUPPORT_ROUTE_URLS, ACTIVATION_ROUTE_URLS, MIGRATION_ROUTE_URLS, OFFERS_ROUTE_URLS,
  DUPLICATE_PAYMENTS_ROUTE_URLS, ACP_ROUTE_URLS, PHONES_SHOP_ROUTE_URLS
} from './app.routes.names';
import { BringPhoneComponent } from './bring-phone/bring-phone.component';
import { HdVoiceComponent } from './hd-voice/hd-voice.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WifiCallingComponent } from './wifi-calling/wifi-calling.component';
import { LandingEbbComponent } from './landing-ebb/landing-ebb.component';
import { AuthEmailGuardService } from 'src/providers/user-auth-service/auth-email-guard.service';
import { AcpDetailsComponent } from './acp-details/acp-details.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {
      title: 'GoodMobile | Prepaid Cell Phone Plans',
      description: `GoodMobile offers nationwide wireless phone plans with no contracts. Buy the data that you need. Low-cost prepaid phone
    plans for iPhone and Android devices.`} as IPageMeta,
  },
  { path: LOGIN_ROUTE_URLS.BASE, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {
    path: ROUTE_URLS.HOME, component: HomeComponent, data: {
      title: 'GoodMobile | Prepaid Cell Phone Plans',
      description: `GoodMobile offers nationwide wireless phone plans with no contracts. Buy the data that you need. Low-cost prepaid phone
  plans for iPhone and Android devices.`} as IPageMeta,
  },
  { path: ACCOUNT_ROUTE_URLS.NAME, loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  {
    path: `${ACCOUNT_ROUTE_URLS.NAME}/${ACCOUNT_ROUTE_URLS.LOGIN}`, redirectTo: `${LOGIN_ROUTE_URLS.BASE}/${LOGIN_ROUTE_URLS.LOGIN}`, pathMatch: 'full',
    data: { title: 'GoodMobile | Login', description: 'Login in to your GoodMobile account' } as IPageMeta
  },
  {
    path: `${ACCOUNT_ROUTE_URLS.NAME}/${ACCOUNT_ROUTE_URLS.SIGNUP}`, redirectTo: `${LOGIN_ROUTE_URLS.BASE}/${LOGIN_ROUTE_URLS.SIGN_UP}`, pathMatch: 'full',
    data: { title: 'GoodMobile | Signup', description: 'Create your GoodMobile account' } as IPageMeta
  },
  {
    path: `${ACCOUNT_ROUTE_URLS.NAME}/${ACCOUNT_ROUTE_URLS.FORGET_PASSWORD}`, redirectTo: `${LOGIN_ROUTE_URLS.BASE}/${LOGIN_ROUTE_URLS.FORGOT_PASSWORD}`,
    data: { title: 'GoodMobile | Forgot Password', description: 'Reset your GoodMobile account password' } as IPageMeta
  },
  { path: ACTIVATION_ROUTE_URLS.NAME, loadChildren: () => import('./activation/activation.module').then(m => m.ActivationModule) },
  { path: SHOP_ROUTE_URLS.NAME, loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: SUPPORT_ROUTE_URLS.NAME, loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  { path: MIGRATION_ROUTE_URLS.NAME, loadChildren: () => import('./migration/migration.module').then(m => m.MigrationModule) },
  { path: OFFERS_ROUTE_URLS.BASE, loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule) },
  { path: DUPLICATE_PAYMENTS_ROUTE_URLS.NAME, loadChildren: () => import('./duplicate-payments/duplicate-payments.module').then(m => m.DuplicatePaymentsModule) },
  { path: ACP_ROUTE_URLS.NAME, loadChildren: () => import('./acp-flow/acp-flow.module').then(m => m.AcpFlowModule), canActivate: [AuthEmailGuardService] },
  {
    path: ROUTE_URLS.BRING_PHONE, component: BringPhoneComponent, data: {
      title: 'Keep Your Phone | GoodMobile',
      description: 'GoodMobile supports most GSM unlocked phones'
    } as IPageMeta
  },
  {
    path: ROUTE_URLS.HD_VOICE, component: HdVoiceComponent, data: {
      title: 'GoodMobile HD Voice',
      description: 'GoodMobile HD Voice improves the sound quality of your calls and lets you multi-task on your phone'
    } as IPageMeta
  },
  {
    path: ROUTE_URLS.WIFI_CALLING, component: WifiCallingComponent, data: {
      title: 'GoodMobile Wi-Fi Calling',
      description: 'GoodMobile Wi-Fi Calling lets you talk and text from locations where it’s hard to get a strong cellular signal.'
    } as IPageMeta
  },
  
  {
    path: ROUTE_URLS.EBB, redirectTo: `${ROUTE_URLS.ACP}`, pathMatch: 'full'
  },
  {
    path: ROUTE_URLS.POSTER_ACP, redirectTo: `${ROUTE_URLS.ACP}`, pathMatch: 'full'
  },
  {
    path: ROUTE_URLS.POSTER_ACP_SMALL, redirectTo: `${ROUTE_URLS.ACP}`, pathMatch: 'full'
  },
  {
    path: ROUTE_URLS.ACP, component: LandingEbbComponent, data: {
      title: 'ACP | Affordable Connectivity Program | GoodMobile',
      description: 'Get FREE UNLIMITED Data, Talk and Text with the Affordable Connectivity Program (ACP). Check to see if you’re eligible and apply to the ACP benefits to reduce your monthly bills.'
    } as IPageMeta
  },
  { path: ROUTE_URLS.DATA_SETUP, redirectTo: `${SUPPORT_ROUTE_URLS.NAME}/${SUPPORT_ROUTE_URLS.DATA_SETUP}`, pathMatch: 'full' },
  { path: ROUTE_URLS.CHECK_PHONE, redirectTo: `${ACTIVATION_ROUTE_URLS.NAME}/${ACTIVATION_ROUTE_URLS.CHECK_PHONE}`, pathMatch: 'full' },
  {
    path: ROUTE_URLS.PLANS, redirectTo: `${SHOP_ROUTE_URLS.NAME}/${SHOP_ROUTE_URLS.PLANS_AND_FEATURES}`, data: {
      title: `Unlimited Talk & Text 4G LTE Cell Phone Plans | GoodMobile`, description:
        // eslint-disable-next-line max-len
        `The best cell phone deal just got better! Get all the power of the nation’s largest networks for less.`
    } as IPageMeta
  },
  { path: ROUTE_URLS.LOGIN, redirectTo: `${LOGIN_ROUTE_URLS.BASE}/${LOGIN_ROUTE_URLS.LOGIN}`, pathMatch: 'full' },
  {
    path: ROUTE_URLS.ACP_DETAILS_LONG, component: AcpDetailsComponent, data: {
      title: 'Affordable Connectivity Program | GoodMobile',
      description: 'Free cellphone service through a government assistance program under the affordable connectivity program'
    } as IPageMeta
  },
  { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found', description: 'Please make sure to enter a valid GoodMobilemobile page url' } as IPageMeta },
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', scrollOffset: [0, 0], scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
