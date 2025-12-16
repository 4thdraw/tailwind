export interface MainBannerItem {
  imgurl: string;
  title: string;
  subtitle: string;
}

export interface MainBannerJson {
  mainBanner: MainBannerItem[];
}

export interface MainProduct {
  섹션명: string
  상품목록: ProductItem[]
}

export interface ProductItem {
  브랜드?: string
  상품명: string
  판매가: number
  정가: number
  배송: string
  이미지:string
}

export interface MainProductResponse {
  mainProduct: MainProduct
}
