const AppRoutes = {
  ROOT: {
    INDEX: '/',
  },
  HOME: {
    INDEX: '/home',
  },
  USER: {
    INDEX: '/user',
    PROFILE: {
      INDEX: '/user/profile',
    },
    SETTINGS: {
      INDEX: '/user/settings',
    },
  },
  AUTH: {
    TERMS: {
      INDEX: '/auth/terms',
    },
    PRIVACY: {
      INDEX: '/auth/privacy',
    },
    SIGN_IN: {
      INDEX: '/auth/sign-in',
      PASSWORD_RECOVERY: {
        INDEX: '/auth/sign-in/password-recovery',
      },
      PASSWROD_CHANGE: {
        INDEX: '/auth/sign-in/password-change',
      },
    },
    SIGN_UP: {
      FIRST_STEP: {
        INDEX: '/auth/sign-up/first-step',
      },
      SECOND_STEP: {
        INDEX: '/auth/sign-up/second-step',
        EMAIL: (email: string) => `/auth/sign-up/second-step?email=${email}`,
      },
    },
  },
};

export default AppRoutes;
