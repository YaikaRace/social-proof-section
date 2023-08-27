/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile": "url('/public/images/bg-pattern-top-mobile.svg'), url('/public/images/bg-pattern-bottom-mobile.svg')",
        "desktop": "url('/public/images/bg-pattern-top-desktop.svg'), url('/public/images/bg-pattern-bottom-desktop.svg')",
      },
      backgroundPosition: {
        "pattern-position-mobile": "top, bottom",
        "pattern-position-desktop": "top left, bottom right"
      }
    },
    colors: {
      "v-d-magenta": "hsl(300, 43%, 22%)",
      "soft-pink": "hsl(333, 80%, 67%)",
      "d-g-magenta": "hsl(303, 10%, 53%)",
      "l-g-magenta": "hsl(300, 24%, 96%)",
      "white": "hsl(0, 0%, 100%)"
    },
    fontFamily: {
      "body": "'League Spartan', sans-serif"
    }
  },
  plugins: [],
}

