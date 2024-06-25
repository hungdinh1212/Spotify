
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import logoWhite from "./logo-white.png";
import errorSignup from "./error.png";
import apple from "./apple.png";
import back from "./back.png";
import song1tn from "./song1tn.jpg";
import song2tn from "./song2tn.jpg";
import song1 from "./song1.mp3";
import song2 from "./song2.mp3";
import Yoasobiimg from "./Yoasobiimg.jpg";
import SonTungMTPimg from "./SonTungMTPimg.jpg";
import Jackimg from "./Jackimg.jpg";
import BichPhuongimg from "./BichPhuongimg.jpg";
import JungKookimg from "./JungKookimg.jpg";
import Mckimg from "./Mckimg.jpg";
import HaAnhTuanimg from "./HaAnhTuanimg.jpg";
import BichPhuongbg from "./BichPhuongbg.jpg";
import Yoasobibg from "./Yoasobibg.jpg";
import SonTungMTPbg from "./SonTungMTPbg.jpg";

export const assets = {
  logoWhite,
  errorSignup,
  apple,
  back,
  SonTungMTPimg,
};


export const artists = [
  {
    id: 0,
    nameArtist: "Yoasobi",
    image: Yoasobiimg,
    profession: "Ban nhạc",
    bg: Yoasobibg,
    file: [
      {
        song1,
        nameSong: "Chúng ta của tương lai",
        thumbNailSong: song1tn,
        duration: "3:40",
      },

    ]

  },
  {
    id: 1,
    nameArtist: "Sơn Tùng MTP",
    image: SonTungMTPimg,
    profession: "Nghệ sĩ",
    bg: SonTungMTPbg,
    file: [
      {
        song1,
        nameSong: "Chúng ta của tương lai",
        thumbNailSong: song1tn,
        duration: "3:40",
      },

    ]

  },

  {
    id: 2,
    nameArtist: "Jack - J97",
    image: Jackimg,
    profession: "Nghệ sĩ",
    file: [
      {
        song2,
        nameSong: "Thiên lý ơi",
        thumbNailSong: song2tn,
        duration: "3:40",
      },
    ]

  },
  {
    id: 3,
    nameArtist: "Bích Phương",
    image: BichPhuongimg,
    profession: "Nghệ sĩ",
    file: [
      {
        song2,
        nameSong: "Thiên lý ơi",
        thumbNailSong: song2tn,
        duration: "3:40",
      },
    ]

  },
  {
    id: 4,
    nameArtist: "Jungkook",
    image: JungKookimg,
    profession: "Nghệ sĩ",
    file: [
      {
        song2,
        nameSong: "Thiên lý ơi",
        thumbNailSong: song2tn,
        duration: "3:40",
      },
    ]

  },
  {
    id: 5,
    nameArtist: "RPT MCK",
    image: Mckimg,
    profession: "Nghệ sĩ",
    file: [
      {
        song2,
        nameSong: "Thiên lý ơi",
        thumbNailSong: song2tn,
        duration: "3:40",
      },
    ]

  },
  {
    id: 6,
    nameArtist: "Hà Anh Tuấn",
    image: HaAnhTuanimg,
    profession: "Nghệ sĩ",
    file: [
      {
        song2,
        nameSong: "Thiên lý ơi",
        thumbNailSong: song2tn,
        duration: "3:40",
      },
    ]

  },


]



// export const songsData = [
//   {
//     id: 0,
//     name: "Chúng ta của tương lai",
//     image: img1,
//     file: song1,
//     description: "Sơn Tùng MTP",
//     duration: "3:00",
//   },
//   {
//     id: 1,
//     name: "Thiên Lý Ơi",
//     image: img2,
//     file: song2,
//     description: "Jack J97",
//     duration: "3:40",
//   }
// ]
// export const albumsData = [
//   {
//     id: 0,
//     name: "Chúng ta của tương lai",
//     image: img1,
//     description: "Sơn Tùng MTP",
//   },
//   {
//     id: 1,
//     name: "Daily Mix 1",
//     image: img2,
//     description: "Sơn Tùng M-TP,Bích Phương,Jack-J97 và nhiều hơn nữa",
//   },


// ]