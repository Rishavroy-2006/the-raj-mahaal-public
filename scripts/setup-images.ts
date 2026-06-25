import fs from 'fs';
import https from 'https';
import path from 'path';

const imagesToDownload = [
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUPSFvaCNL4yfzDGdKA34ZAbQubxgTha4hFcz1J1OOK2carxVWU34wTfeikbv5_vqMU6NvmeCZnzObT91ZucwhH0w_9om7AhHP5SUAh_H21lgDyNsq-qNAyYKW6QYrcvbCgyUeY2iMkTuB6-9BYEQGOqBsxmlP55km-1q2PDpAqEJyQ53NjMspG61nu1ZgiatYi4HKK_EcBRQ6ujMuCJvQ2rwXyR6FqiA3aDGSCAPrU6QdNA2JdejyzS-TYIRPeyOgR0UkiFh0SZihkw", dest: "public/images/hero/hero-bg.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjuY5orH3MkkaPur_YvBponooNMeQz3ArNfX6_uHw-YDfwjYEmD8RkZKKFzAiQ65fAd4TkbGHPgNeu1JYifbL2gbooa04LWOJ7MHX3g2gc8B9sh9EFS7halQclj_DKn1CK7OM_PRDaIfdimLiPtcglrCABCpQ0Yy_tkQ0ntd6FvCLZ5Sh5JPzcLFnqllieTJbF9BFudKKELGmztvrrheVjT7RTk9Okv-7oy_zh6YyuYGyfA72k54VQdKfzIqlFRKZ66jGVMcSdijBXAw", dest: "public/images/experience/experience-bg.jpg" },
  { url: "https://lh3.googleusercontent.com/aida/AP1WRLvJgAsuOSbo_-PZ4waDnb1wDIB8w8G-_RkW_jIq2yBhOntfakgQEjh2IR5OkQZPWKGNjpj4wGJeeEgjzpdYfNjGEgjpV8pK99GWcBaJG-AQkqPuupQhgzXqPEbSlMZa7jnPvQbo8dbaW5V_rBniwIr5EVEYR31Pkid-GGqQobj-I-freQm7kQk0flGbN0LQA4OERKcY74wtlcGFO3MpJGOKUZK4G2LS2ATJSLTHRkxvtIjd0p1Y77_Lvk8", dest: "public/images/video/video-thumbnail.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7_pJz9x1Bx_R30SNDriPdhmgQiRLbi9-klo4i8JvrOXY7Z9jFLYAEaswqnctwWFHODv28_7gIzz-AKLwUoURNAo_ym-8p_hesDD0fBg9T6mIlEVElDG8KDs9iXvnIRUPiDy4ztdRz-jdICRmx_14NmM3WXJu0qb29_waC28gbtiScgPAqBLBYWjXJLFy1GBj_zrRdwLfZSEUz4M0n9NEoi-YgnJtQo08nCOfpXQVWCi19u7xtfst6tfsDAGzIUoTsyIcA3HfWDLNpng", dest: "public/images/facilities/grand-hall.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeDxeg26MWKFU57YVmKmLyglY16BkP6-4lTXTDrRENV7SfGcJK4fKGzVmSs4oJmZKiaYM4rwz4AEGYE5nQAVy5UtLcyoynG4iM6FNQEBsMDT1-EAAeDbANPDOwl9zqP83jN9j1T0HKoyyVSoc_CZlljQ2m7QV01s8nmixMyNoN1XqtvOfouOB3HTzwwj9hcFDK__CCHnr8q2h9dCY0bM4V7w1uZplVq6SXwIk4yMFJarYyV1yN0dK4UtUNbU5pNhpwbBmi78dA2dzK6w", dest: "public/images/facilities/staging.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBan5PheYkGPc5RuGfA8lAevgXYijMijI9MXe2XKw8UT4ebEBoUYxLV8-QTKDEVioDiHGG6NxUJxPnFAOSHWNe-5RbjVUVWqmBybg2Xu-QogxTCJWImpPDSbQZPQd5e5cVW-VGLCi-d7VCiEEJbVFyCut-ZHeahB7TIeikaT7Iwew6m1cxX3ViLaUlg51yMWvtS40wbUrJvFDubJJq7VPvPQHAazeJcHXzvdLwd6Ogf3bJuirCJZobv9khoZTCjea0SI5VAr6Bq-9i3-g", dest: "public/images/gallery/gallery-1.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJAIRCw0eGJjLqPEE5qAJSWv-eykYBxx1scTsIuXnEFGX4SBZUzjO8S3YdB6zAFKAOvkLOzxJ40oWZKNtdcQCdR65ZEQzyLdo764-H12Nxu4P9mfXs-NHvyNEwQ1PJvv8dF8dA-yMapTNMyR4ERrlQduAY5FLoPFlDE11gj1NUcF-ji6IWfiuu-An0sKr8IRDGtq3mUwwnGTnIeYD0FFbJYYFWNM_M19b2bicryQidxm_obn_5gnID0hAA4MlbdxKol8-8WposwvNgfQ", dest: "public/images/gallery/gallery-2.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjhB3dwvNH_dmKF5AIWi__oesUCsf4SZfSvvzbxQmeF8jMA7_TfGlf-mM774N6HHqEIBAbyQmc3ng7CUx4g8CkpFt-GOao-kkmrf8wyiQRkO_SZSyt7yVPYptdfFEdrYjaK4_IaJFCzkxR9-JVwU91EgvfpodKL5KVmxBSlL9OXw1kSaSeo8OjxQrQ5HOPM00f_fEoej_XnF3fCDyLTfyfZ7goSaqKcBSy94cFmzfex1E_rvKARgAkW8AM2u-TjRYcWSr0G6h_di8YBQ", dest: "public/images/gallery/gallery-3.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHPfqWd3XFVfJuis3dbbFQtY4PM9AMmERpqNWVHF7PObw-OF4nLlW2HOfCDagUTE0VShixiddBSPT_SMFjna_57hvv1Gb82OyDPH1e2L0s58f5xvAp-rExTrGcbqx7DISoyidduYTA0lI9cDbq_kfl0d3Tu9uIPxvjOcOBuq-S80J9e__BtzzWvaR9ie1PLmwya5qsPvgisiyC-LWwVVLEVJ9rAEHOYhjjVcG9kN8qeqCXnoXBbJZqzh2_htcH-86EFv4-BQtjCY", dest: "public/images/events/weddings.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO4UzcPdzPHh33q03rfxnepVY7kQfPzKCpV1rcA2DuuP3uJI-T9mAKyO19KMePHRPcrR75pIKxL67wlLljd2BQgpgFQQTam2Co-AlTm-OkO03r0Z6d9fchP-saGB9LZob8BeMLu9OPhjTFEhHGBssFZBh8w1OohhN4ntlEpmgQUPOcgSSafwIQqThZre3LQgnCbbiSn7_4khVXV8Pe5iQVWowcvVs6lxVwK6NlIpYwirrGGjMcxbBp8yV2CEcrGIVWi__1g2NFEiQ", dest: "public/images/events/receptions.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuApHUaQ8i3Zzdydf9jOSXOfA_Jt0tVMQUABRVmnb-VAB6scpIXsSiSsvlPBuEF88G1-NDtbxKxSMjWkevkIMuTJrcgXgYZzLrVzbp9g7Iei8FZDslOviY4bzXrsooFI0Ul6Qmj49887dQ1Sx81WzYsh6nhkfi9puLco0Ha-VFjjtFtNsunRXKXxXGxmGCU-97VDqeWjEifyMoGuAdVOwtEziQGa9JciwTFmCk31eD14cFQXPdjpItwcmYBHM9nXhzUT_9kwD2VmTkg", dest: "public/images/events/engagements.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuALwUbj_-xRICnjUn_XzYqEden5QGcrxpWJGL5Y7CH76UMxYrj2r8gYAipQgeq6-ppX2KNopEKEGo-9zsS8le4_Sp6GGErFcdmnpABNSTecbE87JDTHGC1QV9kffi9_IoAPlMz7g4AUBQvcipym2zupWMVzXh9Lr3qw3QIw6YIzuwCdwa7vKrxNLL7_We9ujo9NLyRJHu8qj1h7WZ5oQ_XRqDF3Bcgb-iBkApvqMTsBkFZjGP7NNmhcJs9D9_4gnZgMVTaSOl3H4ro", dest: "public/images/events/corporate.jpg" }
];

const download = (url: string, dest: string) => {
  return new Promise<void>((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function run() {
  for (const img of imagesToDownload) {
    console.log(`Downloading ${img.dest}...`);
    await download(img.url, img.dest);
  }
  console.log('Done downloading placeholder images.');
}

run();
