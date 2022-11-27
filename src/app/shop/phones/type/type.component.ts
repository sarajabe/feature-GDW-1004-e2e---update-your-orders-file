import { Observable } from 'rxjs';
import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IShopCategory } from '@ztarmobile/zwp-service-backend';
import { FadeInOutAnimation } from '../../../../app/app.animations';
import { ContentfulService } from '../../../../services/contentful.service';
import { MetaService } from '../../../../services/meta-service.service';
import { takeWhile } from 'rxjs/operators';
import { PHONES_SHOP_ROUTE_URLS, ROUTE_URLS, SHOP_ROUTE_URLS } from '../../../app.routes.names';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-phones',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
  animations: [FadeInOutAnimation]
})
export class TypeComponent implements OnDestroy, OnInit, AfterViewInit {
  public phoneModels = [];
  public imageWidth = 240;
  public imageHeight= 410;
  public warrantyMessage;
  public returnMessage;
  public iconsWidth;
  public iconsHeight;
  public showPhoneSwiper;
  public config: SwiperConfigInterface = {};
  private params = {};

  private alive = true;
  constructor(private router: Router, private metaService: MetaService, private route: ActivatedRoute,
              private contentful: ContentfulService) {
    this.route.params.pipe(takeWhile(() => this.alive)).subscribe((params: Params) => {
      if (params) {
       this.params = params;
        if (!params[ROUTE_URLS.PARAMS.NEW_PURCHASE]) { // if the user didn't came with new plan flow
          sessionStorage.removeItem('planFlow');
        }
      }
    });
    this.setResponsiveData();
  }
  ngOnInit(): void {
    this.metaService.createCanonicalUrl(window.location.href, true);
    this.contentful.getphoneTypes('phoneModel', 'apple_ID').subscribe((phones) => {
      phones.forEach((phone) => {
        let index;
        index = this.getPhoneOrder(phone);
        this.phoneModels[index] = phone;
      });
    });
  }

  ngAfterViewInit(): void {
    this.slideChanged();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
  viewPhones(categoryId: string): void {
    this.router.navigate([`${SHOP_ROUTE_URLS.BASE}/${PHONES_SHOP_ROUTE_URLS.BASE}/${PHONES_SHOP_ROUTE_URLS.MODEL}`, this.params]);
  }
  public slideChanged(): void {
    this.config = {
      effect: 'fade',
      centeredSlides: true,
      observer: true,
      speed: 600,
      autoplay: {
        delay: 10000, // 10 seconds
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      mousewheel: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
  }
  public viewPhoneDetails(phoneKey): void {
    this.router.navigate([`${SHOP_ROUTE_URLS.BASE}/${PHONES_SHOP_ROUTE_URLS.BASE}/${PHONES_SHOP_ROUTE_URLS.TYPE}/${phoneKey}`, this.params]);
  }
  private getPhoneOrder(phone): any {
    const order = phone.fields.orderNumber;
    return order;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
      this.setResponsiveData();
  }

  /**
   * A function to set the height, width and content of the page that changes in different screen size
   * images height and width are set in the html dynamically to get better performance results
   */
  private setResponsiveData(): void {
    if (window.innerWidth > 1250) {
      this.imageHeight = 410;
      this.imageWidth = 240;
      this.iconsHeight = 64;
      this.iconsWidth = 64;
      this.showPhoneSwiper = false;
      this.warrantyMessage = 'Keep your phone up and running for no extra cost';
      this.returnMessage = 'We give you 14 days to cancel or return and get money back';
    } else if (window.innerWidth > 640){
      this.imageHeight = 300;
      this.imageWidth = 180;
      this.iconsHeight = 64;
      this.iconsWidth = 64;
      this.showPhoneSwiper = window.innerWidth < 850 ? true : false;
      this.warrantyMessage = 'Keep your phone up and running for no extra cost';
      this.returnMessage = 'We give you 14 days to cancel or return and get money back';
    } else {
      this.imageHeight = 164;
      this.imageWidth = 97;
      this.iconsHeight = 40;
      this.iconsWidth = 40;
      this.showPhoneSwiper = true;
      this.warrantyMessage = 'At no extra cost';
      this.returnMessage = 'Money back guarantee!';
    }
  }
}
