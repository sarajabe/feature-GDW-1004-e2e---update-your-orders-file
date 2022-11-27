import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportMainComponent } from './support.component';
import { IPageMeta } from '@ztarmobile/zwp-service';
import { AboutGoodMobileComponent } from './about-GoodMobile/about-GoodMobile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SUPPORT_ROUTE_URLS } from '../app.routes.names';
import { CoveragesComponent } from './coverages/coverages.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SupportComponent } from './faqs/support/support.component';
import { DataSetupComponent } from './data-setup/data-setup.component';
import { HearingAidCompatibilityComponent } from './hearing-aid-compatibility/hearing-aid-compatibility.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { InternationalCallingComponent } from './international-calling/international-calling.component';
import { LandingCoverageComponent } from './landing-coverage/landing-coverage.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { WhyGoodMobileComponent } from './why-goodmobile/why-goodmobile.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ShutdownComponent } from './shutdown/shutdown.component';
import { IosGsmComponent } from './data-setup/ios/gsm/gsm.component';
import { AndroidGsmComponent } from './data-setup/android/gsm/gsm.component';
import { IosTmoComponent } from './data-setup/ios/tmo/tmo.component';
import { AndroidTmoComponent } from './data-setup/android/tmo/tmo.component';
import { TMobileComponent } from './data-setup/t-mobile/t-mobile.component';
import { FourthGenerationPageComponent } from './data-setup/android/gsm/fourth-generation-page/fourth-generation-page.component';
import { FifthGenerationPageComponent } from './data-setup/android/gsm/fifth-generation-page/fifth-generation-page.component';
import { IosFifthGenerationPageComponent } from './data-setup/ios/gsm/fifth-generation-page/fifth-generation-page.component';
import { IosFourthGenerationPageComponent } from './data-setup/ios/gsm/fourth-generation-page/fourth-generation-page.component';

const routes: Routes = [
  {
    path: '', component: SupportMainComponent, children: [
      {
        path: SUPPORT_ROUTE_URLS.ABOUT_GM, component: AboutGoodMobileComponent, data: {
          title: 'GoodMobileMobile | About GoodMobile',
          description: 'We believe passionately in living life. We hope you’ll bring GoodMobile to capture the memories.'
        } as IPageMeta
      },
      {
        path: SUPPORT_ROUTE_URLS.CONTACT_US, component: ContactUsComponent, data: {
          title: 'GoodMobile Mobile | Support | Contact Us',
          description: 'Let us know how we can assist in making your GoodMobile experience a better one for you.'
        } as IPageMeta
      },
      {
        path: SUPPORT_ROUTE_URLS.COVERAGE, component: CoveragesComponent, data: {
          title: 'Coverage',
          description: 'Stay connected to friends and family from coast to coast with GoodMobile. We ride on the nation’s largest and most trusted wireless network'
        } as IPageMeta
      },
      { path: SUPPORT_ROUTE_URLS.DATA_SETUP, component: DataSetupComponent , data: {
        title: 'Data Setup',
        description: 'Learn how to setup data services for your iPhone or Androind cell phones on the GoodMobile Mobile wireless network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.IPHONE, component: IosGsmComponent , data: {
        title: 'Data Setup | IPhone',
        description: 'Learn how to setup data services for your iPhone cell phones on the GoodMobile Mobile wireless network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.TMO_IPHONE, component: TMobileComponent , data: {
        title: 'Data Setup | IPhone',
        description: 'Learn how to setup data services for your iPhone cell phones on the GoodMobile Mobile wireless network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.IPHONE4G, component: IosFourthGenerationPageComponent , data: {
        title: 'Data Setup | IPhone | 4G',
        description: 'Fourth Generation for 4G Iphone GoodMobile Mobile network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.IPHONE5G, component: IosFifthGenerationPageComponent , data: {
        title: 'Data Setup | IPhone | 5G',
        description: 'Fifth Generation for 5G Iphone GoodMobile Mobile network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.TMO_Android, component: TMobileComponent , data: {
        title: 'Data Setup | Android',
        description: 'Learn how to setup data services for your Android cell phones on the GoodMobile Mobile wireless network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.ANDROID, component: AndroidGsmComponent , data: {
        title: 'Data Setup | Android',
        description: 'Learn how to setup data services for your Android cell phones on the GoodMobile Mobile wireless network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.ANDROID4G, component: FourthGenerationPageComponent , data: {
        title: 'Data Setup | Android | 4G',
        description: 'Fourth Generation for 4G Android GoodMobile Mobile network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.ANDROID5G, component: FifthGenerationPageComponent , data: {
        title: 'Data Setup | Android | 5G',
        description: 'Fifth Generation for 5G Android GoodMobile Mobile network.'
      } as IPageMeta},
      { path: SUPPORT_ROUTE_URLS.IPHONE_DATA_SETUP, redirectTo: SUPPORT_ROUTE_URLS.DATA_SETUP, pathMatch: 'full' },
      {
        path: SUPPORT_ROUTE_URLS.FAQS, component: FaqsComponent, data: {
          title: 'GoodMobile Mobile | Support | FAQs',
          description: 'We understand - when small things do not work... you just want an answer. Here are some Frequently Asked Questions.'
        } as IPageMeta
      },
      { path: SUPPORT_ROUTE_URLS.FAQS_CATEGORY, component: FaqsComponent, data: {
        title: 'GoodMobile Mobile | Support | FAQs',
        description: 'We understand - when small things do not work... you just want an answer. Here are some Frequently Asked Questions.'
      } as IPageMeta },
      { path: SUPPORT_ROUTE_URLS.FAQS_QUESTION_ID, component: FaqsComponent, data: {
        title: 'GoodMobile Mobile | Support | FAQs',
        description: 'We understand - when small things do not work... you just want an answer. Here are some Frequently Asked Questions.'
      } as IPageMeta },
      { path: SUPPORT_ROUTE_URLS.SUPPORT_CARRIER, component: FaqsComponent , data: {
        title: 'GoodMobile Mobile | Support | FAQs',
        description: 'We understand - when small things do not work... you just want an answer. Here are some Frequently Asked Questions.'
      } as IPageMeta },
      { path: SUPPORT_ROUTE_URLS.SUPPORT_QUESTION, component: FaqsComponent , data: {
        title: 'GoodMobile Mobile | Support | FAQs',
        description: 'We understand - when small things do not work... you just want an answer. Here are some Frequently Asked Questions.'
      } as IPageMeta },
      { path: SUPPORT_ROUTE_URLS.SUPPORT_CATEGORY, component: SupportComponent, data: { title: 'Support FAQs', description: 'We understand - when small things do not work... you just want an answer. Here are some Frequently Asked Questions.' } as IPageMeta },
      {
        path: SUPPORT_ROUTE_URLS.HEARING_AID_COMPATIBILITY, component: HearingAidCompatibilityComponent,
        data: { title: 'GoodMobile Mobile | Support | Hearing Aid Compatibility', description: 'Learn about GoodMobile Mobile Hearing Aid Compatibility.' } as IPageMeta
      },
      {
        path: SUPPORT_ROUTE_URLS.HOW_IT_WORKS, component: HowItWorksComponent, data: {
          title: 'GoodMobile| How It Works', description:
            'With GoodMobile Mobile there are no contracts. We are powered by a premium carrier* that boasts the best 4G LTE network in the United States.'
        } as IPageMeta
      },
      {
        path: SUPPORT_ROUTE_URLS.INTERNATIONAL_CALLING, component: InternationalCallingComponent, data: {
          title: 'GoodMobile| International Calling',
          description: 'GoodMobile Mobile International plans offer unlimited talk and text to over 60 countries including Canada and Mexico for just $5 a month.'
        } as IPageMeta
      },
      {
        path: SUPPORT_ROUTE_URLS.LANDING_COVERAGE, component: LandingCoverageComponent, data: {
          title: 'GoodMobile Coverage',
          description: 'Check if GoodMobile Mobile wireless service has coverage in your area using our cell phone service coverage map. Enter your address or zip code to see coverage zones.'
        } as IPageMeta
      },
      { path: SUPPORT_ROUTE_URLS.SITEMAP, component: SitemapComponent, data:
        { title: 'GoodMobile Sitemap', description: 'Access all links available in GoodMobile easily' } as IPageMeta },
      {
        path: SUPPORT_ROUTE_URLS.STORE_LOCATOR, component: StoreLocatorComponent, data: {
          title: 'GoodMobile Mobile | Support | Store Locator',
          description: 'Find GoodMobile Mobile authorized retailers near you.'
        } as IPageMeta
      },
      {path: SUPPORT_ROUTE_URLS.WHY_GM, component: WhyGoodMobileComponent, data: {title: 'GoodMobile Mobile | Why GoodMobile?', description:
      'Everyone has a right to a dependable prepaid wireless plan. GoodMobile offers some of the nation’s best cell phone plans powered by the nation’s best network.'} as IPageMeta},
      {path: SUPPORT_ROUTE_URLS.TERMS_AND_CONDITIONS, component: TermsAndConditionsComponent,
      data: {title: 'GoodMobile Mobile | Support | Terms & Conditions', description: 'Get the GoodMobile Mobile Terms & Conditions.'} as IPageMeta},
      {path: SUPPORT_ROUTE_URLS.TERMS_AND_CONDITIONS_CATEGORY, component: TermsAndConditionsComponent,
        data: {title: 'GoodMobile Mobile | Support | Terms & Conditions', description: 'Get the GoodMobile Mobile Terms & Conditions.'} as IPageMeta},
        {path: SUPPORT_ROUTE_URLS.SHUTDOWN_3G, component: ShutdownComponent,
          data: {title: 'GoodMobile Mobile | Support | 3G Shutdown', description: 'All major mobile carriers will be finalizing the shutdown of their 3G networks on various dates in 2022. Once the 3G network is shut down, 3G cell phones will not work.'} as IPageMeta},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }