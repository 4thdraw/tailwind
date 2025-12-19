/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        maxWidth: {
          '1550': '1550px'
        },       
        colors :{
          main : "#ac441e",
          gray : "#707070",
          black :"#0A0909"
        },
        fontFamily :{
          kr : ['Noto Sans KR', 'sans-serif'],
          en : ['Montserrat', 'sans-serif'],
        },
        fontSize :{
          title : '30px',
          navi : '24px',
          subtitle : '18px',
          base : '16px',
          small : '14px',
          xs : '12px'
        },
        fontWeight :{
            100 : '100',
            200 : '200',
            300 : '300',         
            400 : '400',
            500 : '500',
            600 : '600',
            700 : '700',
            900 : '900'
        },
        screens: {
          xs: "375px",   // 모바일 소형
          sm: "578px",   // 모바일 대형
          md: "820px",   // 태블릿
          lg: "1024px",
          xl: "1550px",  // 데스크톱 대형
        },
    },
  },
  plugins: [],
}

