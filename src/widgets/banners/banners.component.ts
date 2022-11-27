import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PHONES_SHOP_ROUTE_URLS, PLANS_SHOP_ROUTE_URLS, ROUTE_URLS, SHOP_ROUTE_URLS } from 'src/app/app.routes.names';
import { AppState } from 'src/app/app.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnDestroy, AfterViewInit {
  public showPromoBanner = false;
  public SHOP_ROUTE_URLS = SHOP_ROUTE_URLS;
  public PLANS_SHOP_ROUTE_URLS = PLANS_SHOP_ROUTE_URLS;
  public ROUTE_URLS = ROUTE_URLS;
  public PHONES_SHOP_ROUTE_URLS = PHONES_SHOP_ROUTE_URLS;
  public index = 0;
  public bannerSwiperConfig: SwiperConfigInterface = {
    centeredSlides: true,
    autoplay: {
      delay: 10000, // 10 seconds
      disableOnInteraction: false
    },
    speed: 1000,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.slider-pagination',
      renderBullet: (index, className) => {
        return `<li style="z-index: 10" class="slick-active ${className}"><button ></button></li>`;
      },
      clickable: true
    },
    observeParents: true,
    observer: true,
    zoom: {
      toggle: false
    },
    setWrapperSize: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  private alive = true;
  constructor(private appState: AppState, private router: Router) {
  }
  ngOnDestroy(): void {
    this.alive = false;
  }

  public goToplanDetails(id): void {
    this.router.navigate([`${SHOP_ROUTE_URLS.BASE}/${PLANS_SHOP_ROUTE_URLS.BASE}/${id}/${PLANS_SHOP_ROUTE_URLS.DETAILS}`]);
  }
  public goToPhones(): void {
    this.router.navigate([`${SHOP_ROUTE_URLS.BASE}/${PHONES_SHOP_ROUTE_URLS.BASE}/${PHONES_SHOP_ROUTE_URLS.TYPE}`]);
  }
  ngAfterViewInit(): void {
      this.slideChanged();
  }
  public slideChanged(): void {
    this.bannerSwiperConfig = {
      centeredSlides: true,
      autoplay: {
        delay: 10000, // 10 seconds
        disableOnInteraction: false
      },
      speed: 1000,
      direction: 'horizontal',
      slidesPerView: 1,
      keyboard: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.slider-pagination',
        renderBullet: (index, className) => {
          return `<li style="z-index: 10" class="slick-active ${className}"><button ></button></li>`;
        },
        clickable: true
      },
      observeParents: true,
      observer: true,
      zoom: {
        toggle: false
      },
      setWrapperSize: false,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
  }
}