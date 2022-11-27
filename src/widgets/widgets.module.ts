import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { NgxPaginationModule } from 'ngx-pagination';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { HeaderMainNavbarComponent } from './header-main-navbar/header-main-navbar.component';
import { FooterMainNavbarComponent } from './footer-main-navbar/footer-main-navbar.component';
import { SocialMediaSwiperComponent } from './social-media-swiper/social-media-swiper.component';
import { ReCaptchaComponent } from './re-captcha/re-captcha.component';
import { UiBlockButtonDirective } from './directives/ui-block-button.directive';
import { PhonePipe } from './pipes/phone.pipe';
import { MobileFormatDataPipe } from './pipes/mobile-format-data.pipe';
import { ExpirationDateFormatPipe } from './pipes/expiration-date-format.pipe';
import { SimpleDateFormatPipe } from './pipes/simple-date-format.pipe';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { InvisibleRecaptchaComponent } from './invisible-recaptcha/invisible-recaptcha.component';
import { AddressLookupComponent } from './address-lookup/address-lookup.component';
import { CreditCardPaymentComponent } from './credit-card-payment/credit-card-payment.component';
import { CreditCardFormatDirective } from './directives/credit-card-format.directive';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { RestrictNumbersDirective } from './directives/restrict-numbers.directive';
import { TwoDecimaDigitsDirective } from './directives/two-decimal-digits.directive';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { CoverageMapComponent } from './coverage-map/coverage-map.component';
import { ActivatedPlanSelectorComponent } from './activated-plan-selector/activated-plan-selector.component';
import { ModalHelperService } from '../services/modal-helper.service';
import { SafePipe } from './pipes/safe.pipe';
import { PlansListComponent } from './plans-list/plans-list.component';
import { CustomRangeSliderComponent } from './custom-range-slider/custom-range-slider.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreditCardPaymentSectionComponent } from './credit-card-payment-section/credit-card-payment-section.component';
import { BannerSwiperAdsComponent } from './banner-swiper-ads/banner-swiper-ads.component';
import { FeaturedPlansComponent } from './featured-plans/featured-plans.component';
import { BannersComponent } from './banners/banners.component';

@NgModule({
  declarations: [
    HeaderMainNavbarComponent,
    FooterMainNavbarComponent,
    SocialMediaSwiperComponent,
    ReCaptchaComponent,
    ActivatedPlanSelectorComponent,
    PhonePipe,
    MobileFormatDataPipe,
    UiBlockButtonDirective,
    ExpirationDateFormatPipe,
    CustomPaginationComponent,
    AddressLookupComponent,
    CreditCardPaymentComponent,
    CreditCardFormatDirective,
    TwoDecimaDigitsDirective,
    InvisibleRecaptchaComponent,
    SimpleDateFormatPipe,
    SafePipe,
    QuestionAnswerComponent,
    RestrictNumbersDirective,
    PhoneMaskDirective,
    CoverageMapComponent,
    PlansListComponent,
    CustomRangeSliderComponent,
    OrderDetailsComponent,
    CreditCardPaymentSectionComponent,
    BannerSwiperAdsComponent,
    FeaturedPlansComponent,
    BannersComponent,
   ],
  imports: [
    CommonModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    NguiAutoCompleteModule,
    NgxPaginationModule,
    RouterModule,
    NgxPaginationModule
    ],
  exports: [
    HeaderMainNavbarComponent,
    FooterMainNavbarComponent,
    SocialMediaSwiperComponent,
    ReCaptchaComponent,
    ActivatedPlanSelectorComponent,
    CustomPaginationComponent,
    InvisibleRecaptchaComponent,
    AddressLookupComponent,
    CreditCardPaymentComponent,
    QuestionAnswerComponent,
    CoverageMapComponent,
    CreditCardFormatDirective,
    TwoDecimaDigitsDirective,
    UiBlockButtonDirective,
    RestrictNumbersDirective,
    PhoneMaskDirective,
    PhonePipe,
    MobileFormatDataPipe,
    ExpirationDateFormatPipe,
    SimpleDateFormatPipe,
    SafePipe,
    PlansListComponent,
    OrderDetailsComponent,
    CreditCardPaymentSectionComponent,
    CustomRangeSliderComponent,
    BannerSwiperAdsComponent,
    FeaturedPlansComponent,
    BannersComponent
  ],
  providers: [SimpleDateFormatPipe, SafePipe, ModalHelperService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetsModule { }