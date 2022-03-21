module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        ping: {
          '75%': {
            transform: 'scale(0.1)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 2s ease-out',
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-out': 'fade-out 0.5s ease-out 3.5s',
      },
    },
  },
  plugins: [],
};
