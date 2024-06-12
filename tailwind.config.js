/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "haeder-c": "#243c5a",
        "border-c": "#7A7A7A",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      margin: {
        "99px": "99px",
      },
      width: {
        300: "18.75",
      },
      height: {
        90: "32rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        20: "20px",
      },
      boxShadow: {
        soop: "-3px 3px 7px 0px rgba(0, 0, 0, 0.2)",
      },
      fontSize: {
        sm: ["13px", "20px"],
      },
      grayscale: {
        50: "50%",
      },
      inset: {
        "12px": "-12px",
      },
      spacing: {
        "12px": "-12px",
      },
      backgroundImage: {
        "header-back-1": "url('./public/img/img-home/header-back-1.png')",
      },
    },
  },
};

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'tos':'#dbdbdb'
//       },
//     }
//   }
// }
