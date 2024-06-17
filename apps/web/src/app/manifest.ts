import type { MetadataRoute } from 'next'
// import icon from '@/app/icon.png'
// import icon_1 from '@/app/icon1.png'
// import icon_2 from '@/app/icon2.png'
// import icon_3 from '@/app/icon3.png'
// import icon_4 from '@/app/icon4.png'
// import icon_5 from '@/app/icon5.png'
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Playground',
    short_name: 'Playground',
    description: 'Description',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000'
    // icons: [
    //   {
    //     src: icon_1.src,
    //     sizes: `${icon_1.width}x${icon_1.width}`,
    //     type: 'image/png',
    //   },
    //   {
    //     src: icon_2.src,
    //     sizes: `${icon_2.width}x${icon_2.width}`,
    //     type: 'image/png',
    //   },
    //   {
    //     src: icon_3.src,
    //     sizes: `${icon_3.width}x${icon_3.width}`,
    //     type: 'image/png',
    //   },
    //   {
    //     src: icon_4.src,
    //     sizes: `${icon_4.width}x${icon_4.width}`,
    //     type: 'image/png',
    //   },
    //   {
    //     src: icon_5.src,
    //     sizes: `${icon_5.width}x${icon_5.width}`,
    //     type: 'image/png',
    //   },
    //   {
    //     src: icon.src,
    //     sizes: `${icon.width}x${icon.width}`,
    //     type: 'image/png',
    //   },
    // ],
  }
}
