const AppRoutes = {
  ROOT: {
    INDEX: '/',
  },
  AUTH: {
    SIGN_IN: {
      INDEX: '/auth/sign-in',
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
